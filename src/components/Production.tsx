"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TreeDeciduous, FlaskConical, Droplets, Barrel } from "lucide-react";

export default function Production() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proizvodnja" className="relative py-32 lg:py-40">
      {/* Full-width image band */}
      <div className="relative h-[50vh] mb-24 overflow-hidden">
        <Image
          src="/images/proizvodnja02-full.jpg"
          alt="Šljivik destilerije VEK - voćnjaci šljiva u južnoj Srbiji"
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
              Od voćnjaka do flaše
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl text-cream">
              Proizvodnja
            </h2>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Part 1: Text left, plum image right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="text-cream/80 leading-relaxed mb-6 text-base">
              Na prostranim padinama južne Srbije negujemo sopstvene zasade šljiva – crvene
              ranke, čačanske rodne, čačanske lepotice i valjevke. Svaka sorta unosi svoj
              jedinstveni karakter u našu rakiju: od nežne slasti i bogate arome, do čvrstine
              i punoće ukusa po kojoj je naša rakija prepoznatljiva.
            </p>
            <p className="text-cream/80 leading-relaxed mb-6 text-base">
              Berba je ritual. Obavlja se ručno, u prvim časovima dana, kada plod dostiže punu
              zrelost i mirisom najavi svoju spremnost. Samo savršeno zdrave šljive dospevaju
              u proces, jer od prvog dodira do poslednje kapi, ništa se ne prepušta slučaju.
            </p>
            <p className="text-cream/80 leading-relaxed text-base">
              Fermentacija teče polako, prirodno, u kontrolisanim uslovima koji čuvaju
              autentičnu aromu voća. Destilacija se odvija dvostruko – tiho, pažljivo i s
              merom. U bakarnim kazanima, pod budnim okom majstora, rađa se rakija izuzetne
              čistoće i fine strukture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/proizvodnja-sljive.jpg"
              alt="Zrele šljive na grani spremne za berbu i destilaciju rakije"
              fill
              quality={85}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </motion.div>
        </div>

        {/* Part 2: Production image left, text right (on mobile: text first, image second) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="/images/proizvodnja01-full.jpg"
              alt="Proces destilacije rakije u bakarnim kazanima destilerije VEK"
              fill
              quality={85}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-cream/80 leading-relaxed mb-6 text-base">
              Destilacija se vrši dvostrukim pečenjem, umereno i pažljivo, na tradicionalan
              način koji se prenosi generacijama. Na taj način dobijamo rakiju izuzetne
              čistoće, zaokruženog ukusa i plemenitog karaktera.
            </p>
            <p className="text-cream/80 leading-relaxed mb-6 text-base">
              Svaka kap potom odležava u buradima od srpskog hrasta minimum 5 godina, gde
              vreme, drvo i rakija stupaju u tihu, dugotrajnu igru. Hrast otkriva svoje tonove
              vanile, meda i dima, dajući piću ćilibarnu nijansu i miris koji budi sva čula –
              tako rakija stiče zlatnu boju, prefinjen miris i ukus koji traje.
            </p>
            <p className="text-cream/80 leading-relaxed text-base">
              Rezultat je premium rakija – autentično srpsko piće, nastalo iz spoja prirode,
              znanja i strpljenja, namenjeno onima koji prepoznaju istinsku vrednost u
              jednostavnosti i dubini svakog gutljaja.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <p className="text-center text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Proces
          </p>
          <h3 className="text-center font-serif text-3xl lg:text-4xl text-cream mb-16">
            Put do savršene rakije
          </h3>

          {(() => {
            const steps = [
              {
                step: "01",
                title: "Gajenje",
                desc: "Sopstveni zasadi šljiva na padinama južne Srbije",
                icon: <TreeDeciduous className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1.5} />,
              },
              {
                step: "02",
                title: "Berba",
                desc: "Ručna berba u ranim jutarnjim satima, samo savršeni plodovi",
                icon: (
                  // Custom šljiva ikonica u Lucide stilu
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-7 lg:h-7">
                    <path d="M12 5c-3 0-6 3-6 7.5S9 21 12 21s6-4 6-8.5S15 5 12 5z" />
                    <path d="M12 5V3" />
                    <path d="M12 3c1.5 0 3 .5 4 1.5" />
                    <path d="M12 5c0 4 0 8 0 12" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Fermentacija",
                desc: "Prirodna fermentacija u kontrolisanim uslovima",
                icon: <FlaskConical className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1.5} />,
              },
              {
                step: "04",
                title: "Destilacija",
                desc: "Dvostruko pečenje u bakarnim kazanima",
                icon: <Droplets className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1.5} />,
              },
              {
                step: "05",
                title: "Odležavanje",
                desc: "Minimum 5 godina u buradima od srpskog hrasta",
                icon: <Barrel className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1.5} />,
              },
            ];

            return (
              <>
                {/* Mobile: Vertical timeline */}
                <div className="lg:hidden relative pl-16">
                  {/* Vertical line - from first to last circle center (bottom accounts for text below last circle) */}
                  <div className="absolute left-[23px] top-[23px] bottom-[85px] w-px bg-gold/30" />

                  <div className="flex flex-col gap-10">
                    {steps.map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative flex items-start"
                      >
                        {/* Circle on the line */}
                        <div className="absolute -left-16 top-0 w-[46px] h-[46px] rounded-full border border-gold/40 flex items-center justify-center text-gold bg-dark z-10 shrink-0">
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <div className="flex items-baseline gap-3 mb-1.5">
                            <span className="text-gold/50 text-[10px] tracking-[0.3em] font-mono">
                              {item.step}
                            </span>
                            <h4 className="font-serif text-cream text-lg">{item.title}</h4>
                          </div>
                          <p className="text-cream/50 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Desktop: Horizontal row */}
                <div className="hidden lg:block relative">
                  <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gold/30" />
                  <div className="grid grid-cols-5 gap-6">
                    {steps.map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-5 bg-dark relative z-10">
                          {item.icon}
                        </div>
                        <span className="text-gold/60 text-xs tracking-[0.3em] font-mono mb-2">
                          {item.step}
                        </span>
                        <h4 className="font-serif text-cream text-lg mb-2">{item.title}</h4>
                        <p className="text-cream/60 text-sm leading-relaxed max-w-[200px]">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </motion.div>
      </div>
    </section>
  );
}
