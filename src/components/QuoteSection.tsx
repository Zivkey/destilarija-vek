"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/kockica.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      <div className="absolute inset-0 bg-dark/90" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="gold-line-wide mx-auto mb-12" />
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream/90 leading-tight italic mb-8">
            &ldquo;Trajne vrednosti se stvaraju,
            <br />
            <span className="text-gradient-gold">ne nasleđuju.&rdquo;</span>
          </blockquote>
          <p className="text-xs tracking-[0.4em] uppercase text-gold/60">
            Filozofija Destilerije VEK
          </p>
          <div className="gold-line-wide mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
