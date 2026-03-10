import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Destilerija VEK | Premium Srpska Rakija",
  description:
    "Pijemo danas, pamtimo vekovima. Premium šljivovica destilerisana sa strašću i starana u hrastovim bačvama minimum pet godina.",
  keywords: "rakija, šljivovica, premium, destilerija, Srbija, VEK, hrastove bačve",
  openGraph: {
    title: "Destilerija VEK | Premium Srpska Rakija",
    description: "Pijemo danas, pamtimo vekovima.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-dark text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
