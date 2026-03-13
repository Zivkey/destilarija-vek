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
          alt="Čaša premium rakije šljivovice u dramatičnom osvetljenju"
          fill
          quality={90}
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
            Dobro došli u svet u kojem je kvalitet bezuslovan, proces potpuno prirodan,
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
                    alt={`Boca VEK ${product.name} premium šljivovice 0.7L`}
                    width={600}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl max-h-[50vh] object-contain"
                    sizes="(max-width: 768px) 100vw, 35vw"
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
          <p className="text-cream/60 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Premium rakija destilerije VEK biće dostupna na zvaničnom sajtu destilerije,
            kao i u sledećim prodavnicama i restoranima u Nišu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
            <a
              href="https://egoconceptstore.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="h-[70px] flex items-center justify-center mb-3">
                <Image
                  src="/images/logo-ego.png"
                  alt="EGO concept store"
                  width={140}
                  height={56}
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(90%)" }}
                />
              </div>
              <span className="text-cream/50 group-hover:text-gold transition-colors text-xs tracking-wider">
                EGO Concept Store
              </span>
            </a>
            <a
              href="https://www.restoranstambolijski.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="h-[70px] flex items-center justify-center mb-3">
                <Image
                  src="/images/logo-stambolijski.png"
                  alt="Restoran Stambolijski"
                  width={56}
                  height={56}
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-cream/50 group-hover:text-gold transition-colors text-xs tracking-wider">
                Restoran Stambolijski
              </span>
            </a>
            <a
              href="https://bocconcino.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="h-[70px] flex items-center justify-center mb-3">
                <Image
                  src="/images/logo-bocconcino.png"
                  alt="Restoran Bocconcino"
                  width={160}
                  height={40}
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(90%)" }}
                />
              </div>
              <span className="text-cream/50 group-hover:text-gold transition-colors text-xs tracking-wider">
                Restoran Bocconcino
              </span>
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g295382-d4307898-Reviews-Kod_Rajka-Nis_Central_Serbia.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="h-[70px] flex items-center justify-center mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Kod Rajka logo (1).svg"
                  alt="Kafana Kod Rajka"
                  width={160}
                  height={70}
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(90%)" }}
                />
              </div>
              <span className="text-cream/50 group-hover:text-gold transition-colors text-xs tracking-wider">
                Kafana Kod Rajka
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
