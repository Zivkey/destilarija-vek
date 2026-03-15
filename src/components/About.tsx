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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Naša priča
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-6 leading-tight">
            O nama
          </h2>
          <div className="gold-line-wide mx-auto" />
        </motion.div>

        <div ref={ref}>
          {/* Part 1: Images left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 lg:mb-32">
            {/* Images - two staggered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="flex gap-4 items-end"
            >
              <div className="w-[60%] relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/onama-porodica.jpg"
                  alt="Porodica Destilerije VEK u voćnjaku šljiva"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 28vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
              <div className="w-[38%] flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src="/images/onama-casa-zavesa.jpg"
                    alt="Čaša premium šljivovice VEK uz elegantnu zavesu"
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 38vw, 14vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src="/images/onama-01-full.jpg"
                    alt="Porodica iza destilerije VEK - tradicija i posvećenost"
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 38vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text - first half */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                Destilerija VEK nastala je iz jednostavne ideje – da ono što stvaramo danas,
                ima svoj smisao i sutra. VEKovima. Iza destilerije stojimo nas petoro – troje
                dece i žena, na čelu sa mužem, porodica koja veruje da se trajne vrednosti ne
                nasleđuju, već stvaraju.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                U svetu koji žuri, mi smo odlučili da usporimo.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                Da svakom plodu, svakom mirisu i svakom trenutku damo pažnju koju zaslužuje.
                Upravo tako je i nastala naša premium rakija od šljiva – čista, elegantna i
                prefinjena, destilisana sa najvećom preciznošću i odležavana pod pažljivo
                kontrolisanim uslovima.
              </p>
              <p className="text-cream/80 leading-relaxed text-base">
                Svaka kap odražava našu posvećenost savršenstvu i standardima koji ne poznaju
                kompromis. Za nas, kvalitet nije samo rezultat procesa – to je način života.
              </p>
            </motion.div>
          </div>

          {/* Part 2: Text left, images right */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text - second half */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1"
            >
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                Isti principi koji nas vode kao porodicu, vode nas i u poslu: poštenje,
                doslednost i nepokolebljiva želja da svaka sledeća boca bude još bolja od
                prethodne.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                Naziv destilerije nosi ime naše dece – V(Vuk), E(Eva) i K(Klara). U njima je
                smisao našeg stvaranja i tiha snaga trajanja koje dolazi.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                Zato VEK nije samo ime našeg brenda, već i naš lični pečat – znak da ništa ne
                napušta naše ruke dok ne dostigne nivo koji sami živimo i poštujemo.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6 text-base">
                VEK je spoj rada i ljubavi, discipline i nežnosti, jednostavnosti i ozbiljnosti.
                Prostor u kojem porodica postaje tim, a stvaranje postaje način života.
                Iz svake boce izlazi ono što najviše cenimo – vreme, posvećenost, kvalitet i
                međusobno poverenje.
              </p>
              <div className="gold-line my-8" />
              <p className="text-cream/90 leading-relaxed mb-4 text-lg font-serif italic">
                Tradiciju ne nastavljamo. Mi je stvaramo.
              </p>
              <p className="text-cream/80 leading-relaxed mb-4 text-base">
                Za nas, VEK nije samo rakija. To je ime našeg puta, naše vizije i našeg
                zajedništva.
              </p>
              <p className="text-cream/80 leading-relaxed text-base">
                Naš potpis – sada i za VEKove koji dolaze.
              </p>
            </motion.div>

            {/* Images - puzzle layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex gap-4 items-end order-1 lg:order-2"
            >
              <div className="w-[38%] flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src="/images/onama-kutija.jpg"
                    alt="Premium poklon kutija za VEK šljivovicu"
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 38vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src="/images/mala.jpg"
                    alt="Mala boca premium rakije VEK šljivovice"
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 38vw, 14vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </motion.div>
              </div>
              <div className="w-[60%] relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/onama-casa-zavesa.jpg"
                  alt="Čaša premium šljivovice VEK uz elegantnu zavesu"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 28vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
