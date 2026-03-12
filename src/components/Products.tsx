"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "Standard",
    price: "RSD 6.500",
    image: "/images/manja.jpg",
    description: "",
    details: ["Single barrel", "Min. 5 godina", "0.7L"],
  },
  {
    name: "Premium",
    price: "RSD 9.500",
    image: "/images/veca.jpg",
    description: "",
    details: ["Single barrel", "Min. 5 godina", "0.7L"],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rakija" className="relative py-32 lg:py-40 noise-overlay">
      {/* Full-width image band */}
      <div className="relative h-[50vh] mb-24 overflow-hidden">
        <Image
          src="/images/onama-casa-senka.jpg"
          alt="VEK Premium Rakija"
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
              Kolekcija
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl text-cream">
              Premium Rakija VEK
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="text-cream/80 leading-relaxed mb-6 text-base">
            Kada bure odsluži svoje, ono se ne koristi ponovo. Time čuvamo autentičnost
            zrenja i osiguravamo da svaki single barrel zadrži svoj neponovljiv potpis,
            prirodni trag hrastovine, mikroklime i vremena. Zato je svaka flaša
            dragocenost sama za sebe.
          </p>
          <p className="text-cream/80 leading-relaxed mb-6 text-base">
            Ona nosi u sebi godine strpljenja, preciznost i umeće stvaranja proizvoda
            koji u potpunosti poštuje ono što priroda daje. Ovo nije rakija koju može
            imati svako. Ovo je privilegija rezervisana za one koji prepoznaju vrednost
            neponovljivog i autentičnog.
          </p>
          <p className="text-cream/90 leading-relaxed text-lg font-serif italic">
            Dobrodošli u svet u kojem je kvalitet bezuslovan, proces potpuno prirodan,
            a luksuz pažljivo očuvan za odabrane.
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
                {product.description && (
                  <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    {product.description}
                  </p>
                )}

                {/* Details */}
                <div className="flex justify-center gap-6 mb-6">
                  {product.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs text-cream/60 tracking-wider"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="gold-line mx-auto mb-6" />

                <p className="font-serif text-2xl text-gold" style={{ fontFeatureSettings: '"lnum"' }}>
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-10" />
          <p className="text-cream/60 text-sm leading-relaxed mb-6">
            Dostupna na zvaničnom sajtu destilerije i u odabranim restoranima u Beogradu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <a
              href="https://egoconceptstore.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-sm tracking-wider underline underline-offset-4"
            >
              &ldquo;EGO&rdquo; concept store — Niš
            </a>
            <a
              href="https://www.restoranstambolijski.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-sm tracking-wider underline underline-offset-4"
            >
              Restoran &ldquo;Stambolijski&rdquo; — Niš
            </a>
            <a
              href="https://bocconcino.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-sm tracking-wider underline underline-offset-4"
            >
              Restoran &ldquo;Bocconcino&rdquo; — Niš
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
