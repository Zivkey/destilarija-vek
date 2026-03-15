"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Destilerija VEK logo"
              width={100}
              height={100}
              className="brightness-0 invert"
            />
          </div>

          <p className="text-cream/50 text-xs tracking-wider text-center">
            Pijemo danas, pamtimo VEKovima
          </p>

          <div className="flex gap-8">
            <a
              href="https://facebook.com/profile.php?id=61581816304562"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors text-xs tracking-wider"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/destilerija.vek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors text-xs tracking-wider"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/5 text-center">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Destilerija VEK. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
