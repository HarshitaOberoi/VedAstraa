"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Globe,
  Loader2,
  X
} from "lucide-react";

interface GemstonePaymentProps {
  gem: {
    name: string;
    priceRange: string;
    basePrice: number;
    image: string;
    planet: string;
  };
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export default function GemstonePayment({ gem, onClose, onPaymentSuccess }: GemstonePaymentProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI / QR', icon: Smartphone, description: 'Google Pay, PhonePe, Paytm' },
    { id: 'card', name: 'Cards', icon: CreditCard, description: 'Credit or Debit cards' },
    { id: 'netbanking', name: 'Net Banking', icon: Globe, description: 'All major Indian banks' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/90 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        {/* Background Accents */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

        <div className="relative z-10 p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Secure Checkout</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">VedAstraa Treasures</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <img 
                    src={gem.image} 
                    alt={gem.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80">{gem.planet} &middot; Natural</span>
                    <h4 className="text-xl font-serif text-white mt-1">{gem.name}</h4>
                  </div>
                  
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Base Price</span>
                      <span className="text-white font-medium">{formatPrice(gem.basePrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Certification</span>
                      <span className="text-emerald-400 font-medium">Included</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-4 mt-2">
                      <span className="text-base font-bold text-white">Total Amount</span>
                      <span className="text-2xl font-bold text-amber-300">{formatPrice(gem.basePrice)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Includes Authenticity Certificate & Vedic Energization Ritual.
                </p>
              </div>
            </div>

            {/* Right Column: Payment Methods */}
            <div className="lg:col-span-3 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl">
                <h4 className="mb-6 text-xl font-serif text-white">Payment Method</h4>
                
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
                  Pay Now {formatPrice(gem.basePrice)}
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="mt-8 flex items-center justify-center gap-6 grayscale opacity-40 contrast-125">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Lock className="h-3 w-3" />
                PCI DSS Compliant · Secured by Razorpay
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
