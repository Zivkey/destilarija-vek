"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="VEK"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
            <span className="font-serif text-sm tracking-[0.2em] text-cream/60">
              DESTILERIJA VEK
            </span>
          </div>

          <p className="text-cream/30 text-xs tracking-wider text-center">
            Pijemo danas, pamtimo vekovima
          </p>

          <div className="flex gap-8">
            <a
              href="https://facebook.com/profile.php?id=61581816304562"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-gold transition-colors text-xs tracking-wider"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/destilerija.vek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-gold transition-colors text-xs tracking-wider"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/5 text-center">
          <p className="text-cream/20 text-xs">
            &copy; {new Date().getFullYear()} Destilerija VEK. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
