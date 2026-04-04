"use client";

import { motion } from "framer-motion";
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Globe
} from "lucide-react";
import { ServiceDefinition } from "./types";

interface PaymentCheckoutProps {
  service: ServiceDefinition;
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export default function PaymentCheckout({ service, onBack, onPaymentSuccess }: PaymentCheckoutProps) {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI / QR', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Cards', icon: CreditCard, description: 'Credit or Debit cards' },
    { id: 'netbanking', name: 'Net Banking', icon: Globe, description: 'All major Indian banks' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Review
        </button>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
          <ShieldCheck className="h-3 w-3" />
          Secure Checkout
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Order Summary</h4>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-200 text-xl border border-amber-500/20">
                {service.icon}
              </div>
              <div>
                <h5 className="font-semibold text-white">{service.shortTitle}</h5>
                <p className="text-xs text-slate-400">Personal Consultation</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/5 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Consultation Fee</span>
                <span className="text-white font-medium">{formatPrice(service.price, service.currency)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Platform Charges</span>
                <span className="text-emerald-400 font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-4 mt-2">
                <span className="text-base font-bold text-white">Total Amount</span>
                <span className="text-xl font-bold text-amber-300">{formatPrice(service.price, service.currency)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-emerald-500/10 bg-emerald-500/5 p-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-50">Instant Confirmation</p>
                <p className="text-xs text-emerald-200/70 mt-1">Receive your session link immediately after payment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
            <h4 className="mb-6 text-xl font-[var(--font-playfair)] text-white">Choose Payment Method</h4>
            
            <div className="grid gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 text-left transition hover:border-amber-500/30 hover:bg-amber-500/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 group-hover:bg-amber-500/20 group-hover:text-amber-300 transition">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{method.name}</p>
                      <p className="text-xs text-slate-400">{method.description}</p>
                    </div>
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-white/10 group-hover:border-amber-500/50 transition flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={onPaymentSuccess}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 px-6 py-4 text-base font-bold text-slate-900 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(252,211,77,0.4)]"
            >
              Pay Now {formatPrice(service.price, service.currency)}
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-6 grayscale opacity-50 contrast-125">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <Lock className="h-3 w-3" />
            End-to-end encrypted · PCI DSS Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
