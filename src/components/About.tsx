"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nama" className="relative py-32 lg:py-40 noise-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/onama-01-full.jpg"
                alt="Destilerija VEK - Porodica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            {/* Floating accent image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold/20 p-2 bg-dark hidden lg:block"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/proizvodnja01-full.jpg"
                  alt="Proizvodnja"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </motion.div>
            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/30" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Naša priča
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-8 leading-tight">
              O nama
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-cream/60 leading-relaxed mb-6 text-base">
              Destilerija VEK osnovana je na jednostavnoj ideji — stvaranja trajne
              vrednosti. Porodični smo tim od pet ljudi — troje dece, žena i muškarac
              koji predvodi — verujemo da se trajne vrednosti stvaraju, a ne nasleđuju.
            </p>
            <p className="text-cream/60 leading-relaxed mb-6 text-base">
              U svetu koji žuri, mi smo izabrali da usporimo. Da svakom plodu, svakom
              mirisu, svakom trenutku posvetimo pažnju koju zaslužuje.
            </p>
            <p className="text-cream/60 leading-relaxed text-base">
              Naša premium šljivovica je čista, elegantna i profinjena — destilovana sa
              preciznošću i starana pod kontrolisanim uslovima.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <p className="font-serif text-3xl text-gold">5+</p>
                <p className="text-xs tracking-wider text-cream/40 mt-1 uppercase">
                  Godina starenja
                </p>
              </div>
              <div className="w-px h-12 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-3xl text-gold">100%</p>
                <p className="text-xs tracking-wider text-cream/40 mt-1 uppercase">
                  Prirodno
                </p>
              </div>
              <div className="w-px h-12 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-3xl text-gold">1</p>
                <p className="text-xs tracking-wider text-cream/40 mt-1 uppercase">
                  Bačva po flaši
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
