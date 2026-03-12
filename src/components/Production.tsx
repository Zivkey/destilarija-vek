"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/proizvodnja-sljive.jpg"
              alt="Šljive na grani"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </motion.div>
        </div>

        {/* Part 2: Production image left, text right (on mobile: text first, image second) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="/images/proizvodnja01-full.jpg"
              alt="Destilerija VEK - Proizvodnja"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
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
      </div>
    </section>
  );
}
