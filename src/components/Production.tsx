"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const plumVarieties = [
  {
    name: "Crvena Ranka",
    desc: "Nežna slatkoća i bogat miris",
  },
  {
    name: "Čačanska Rodna",
    desc: "Obilnost ukusa i postojanost",
  },
  {
    name: "Čačanska Lepotica",
    desc: "Elegancija i fina aroma",
  },
  {
    name: "Valjevka",
    desc: "Punoća i karakteristična čvrstina",
  },
];

export default function Production() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proizvodnja" className="relative py-32 lg:py-40">
      {/* Full-width image band */}
      <div className="relative h-[50vh] mb-24 overflow-hidden">
        <Image
          src="/images/proizvodnja02-full.jpg"
          alt="Šljivik"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Od voćnjaka do flaše
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl text-cream">
              Proizvodnja
            </h2>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream/60 leading-relaxed mb-8 text-base">
              Gajimo sopstvene voćnjake šljiva na južnim padinama Srbije. Svaka
              sorta doprinosi jedinstven karakter — od nežne slatkoće i bogatog
              mirisa do čvrstine i punog ukusa.
            </p>
            <p className="text-cream/60 leading-relaxed mb-12 text-base">
              Pažljivo biramo trenutak berbe, kada je svaki plod na vrhuncu
              zrelosti. Destilacija se odvija u bakarnim kazanima, poštujući
              tradiciju uz preciznu kontrolu temperature.
            </p>

            {/* Plum varieties */}
            <div className="space-y-6">
              <p className="text-xs tracking-[0.3em] uppercase text-gold">
                Sorte šljiva
              </p>
              {plumVarieties.map((variety, i) => (
                <motion.div
                  key={variety.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-2 h-2 rotate-45 border border-gold/50 group-hover:bg-gold transition-colors duration-300" />
                  <div>
                    <p className="text-cream text-sm font-medium">
                      {variety.name}
                    </p>
                    <p className="text-cream/40 text-xs">{variety.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process steps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {[
              {
                step: "01",
                title: "Berba",
                desc: "Ručna berba šljiva u optimalnom trenutku zrelosti sa naših voćnjaka na južnim padinama.",
              },
              {
                step: "02",
                title: "Destilacija",
                desc: "Dvostruka destilacija u bakarnim kazanima uz preciznu kontrolu temperature i vremena.",
              },
              {
                step: "03",
                title: "Starenje",
                desc: "Minimum pet godina u pažljivo odabranim hrastovim bačvama. Svaka bačva daje jedinstven karakter.",
              },
              {
                step: "04",
                title: "Flaširano",
                desc: "Svaka flaša dolazi iz jedne jedinstvene hrastove bačve. Bačve se ne koriste ponovo.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-3xl text-gold/30 group-hover:text-gold transition-colors duration-500">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
