"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "Standard",
    price: "6.500 RSD",
    image: "/images/manja.jpg",
    description:
      "Čista šljivovica starana minimum pet godina u hrastovim bačvama. Elegantan i profinjen ukus sa notama suvog voća i vanile.",
    details: ["Min. 5 godina starenja", "Hrastova bačva", "0.7L"],
  },
  {
    name: "Premium",
    price: "9.500 RSD",
    image: "/images/veca.jpg",
    description:
      "Naša najfinija selekcija. Svaka flaša iz jedne jedinstvene bačve — neponovljiv karakter i dubina ukusa bez premca.",
    details: ["Single barrel", "Premium selekcija", "0.7L"],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rakija" className="relative py-32 lg:py-40 noise-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Kolekcija
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl text-cream mb-6">
            Premium Rakija VEK
          </h2>
          <div className="gold-line-wide mx-auto mb-8" />
          <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Svaka flaša dolazi iz jedne jedinstvene hrastove bačve. Bačve se ne koriste
            ponovo, čuvajući autentičnost i obezbeđujući da svaki single barrel zadrži
            svoj poseban karakter.
          </p>
        </motion.div>

        {/* Products */}
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              {/* Product image */}
              <div className="relative border border-gold/10 group-hover:border-gold/25 transition-colors duration-700 mb-8 p-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={product.image}
                    alt={`VEK ${product.name}`}
                    width={600}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </motion.div>
              </div>

              {/* Product info */}
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Šljivovica
                </p>
                <h3 className="font-serif text-3xl text-cream mb-3">
                  VEK {product.name}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                  {product.description}
                </p>

                {/* Details */}
                <div className="flex justify-center gap-6 mb-6">
                  {product.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs text-cream/40 tracking-wider"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="gold-line mx-auto mb-6" />

                <p className="font-serif text-2xl text-gold">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
