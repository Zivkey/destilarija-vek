"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useAgeVerified } from "./AgeContext";

const heroImages = [
  "/images/onama-02-full.jpg",
  "/images/hero-vocnjak.jpg",
  "/images/hero-pocetna.jpg",
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const verified = useAgeVerified();
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const startTimeRef = useRef<number>(Date.now());

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % heroImages.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroImages.length) % heroImages.length);
  }, [current, goTo]);

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const nextIdx = (c + 1) % heroImages.length;
        setProgress(0);
        startTimeRef.current = Date.now();
        return nextIdx;
      });
    }, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  // Progress animation
  useEffect(() => {
    let raf: number;
    function tick() {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Background images with crossfade */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[current]}
              alt="Destilerija VEK"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
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

          {/* Progress dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-10 flex items-center gap-3"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative w-8 h-px bg-cream/20 overflow-hidden"
                aria-label={`Slika ${i + 1}`}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-gold transition-none"
                  style={{
                    width: i === current ? `${progress * 100}%` : i < current ? "100%" : "0%",
                  }}
                />
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
      {/* Side arrows */}
      {verified && (
        <>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            onClick={prev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 text-cream/25 hover:text-gold transition-colors"
            aria-label="Prethodna slika"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            onClick={next}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 text-cream/25 hover:text-gold transition-colors"
            aria-label="Sledeća slika"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </>
      )}
    </section>
  );
}
