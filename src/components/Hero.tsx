"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useAgeVerified } from "./AgeContext";

export default function Hero() {
  const verified = useAgeVerified();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/hero-pocetna.jpg"
          alt="Destilerija VEK"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Content */}
      {verified && (
        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 leading-[0.95] italic"
          >
            Pijemo danas,
            <br />
            <span className="text-gradient-gold">pamtimo vekovima</span>
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            href="#o-nama"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#o-nama");
              if (el) {
                const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
                const startY = window.scrollY;
                const diff = targetY - startY;
                const duration = 650;
                let start: number | null = null;
                function ease(t: number) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }
                function step(ts: number) {
                  if (!start) start = ts;
                  const p = Math.min((ts - start) / duration, 1);
                  window.scrollTo(0, startY + diff * ease(p));
                  if (p < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
              }
            }}
            className="mt-12 px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Otkrijte više
          </motion.a>
        </motion.div>
      )}
    </section>
  );
}
