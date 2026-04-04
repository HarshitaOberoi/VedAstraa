"use client";

import { useState } from "react";
import Script from "next/script";
import { ArrowRight, Loader2 } from "lucide-react";
import styles from "../gemstones/[slug]/GemstoneProduct.module.css";

interface GemstoneCheckoutButtonProps {
  amount: number;
  name: string;
  description: string;
  image?: string;
}

export default function GemstoneCheckoutButton({
  amount,
  name,
  description,
  image,
}: GemstoneCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Create order on the server
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      });

      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      // Options for Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: order.amount,
        currency: order.currency,
        name: "VedAstraa",
        description: `Acquire ${name}`,
        image: image || "/logo.png",
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          // You would typically redirect or update UI here
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "VedAstraa Headquarters",
          product_name: name,
        },
        theme: {
          color: "#d4af37", // Gold color to match VedAstraa theme
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(`Payment failed: ${error.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <button
        className={styles.primaryCta}
        onClick={handlePayment}
        disabled={loading}
      >
        <span className="flex items-center gap-2">
          {loading ? (
            <>
              Processing... <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Acquire Now <ArrowRight className="w-4 h-4" />
            </>
          )}
        </span>
      </button>
    </>
  );
}
