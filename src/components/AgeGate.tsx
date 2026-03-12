"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useAgeVerified } from "./AgeContext";

export default function AgeGate() {
  const verified = useAgeVerified();

  const handleConfirm = () => {
    sessionStorage.setItem("age-verified", "true");
    window.dispatchEvent(new Event("age-verified"));
  };

  return (
    <AnimatePresence>
      {!verified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 age-gate-bg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center px-8 py-12 max-w-md"
          >
            <Image
              src="/images/logo-vek.png"
              alt="VEK Logo"
              width={80}
              height={80}
              className="mx-auto mb-8 brightness-0 invert"
            />
            <div className="gold-line-wide mx-auto mb-8" />
            <h2 className="font-serif text-2xl text-cream mb-4">
              Dobrodošli
            </h2>
            <p className="text-cream/80 text-sm mb-8 leading-relaxed">
              Da li imate više od 18 godina?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleConfirm}
                className="px-8 py-3 bg-gold text-dark font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 cursor-pointer"
              >
                Da, imam
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 border border-cream/20 text-cream/80 text-sm tracking-widest uppercase hover:border-cream/40 transition-all duration-300 cursor-pointer"
              >
                Ne
              </button>
            </div>
            <p className="text-cream/50 text-xs mt-8">
              Ovaj sajt sadrži informacije o alkoholnim pićima.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
