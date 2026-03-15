import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://destilerijavek.rs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Destilerija VEK | Premium Srpska Rakija",
  description:
    "Pijemo danas, pamtimo VEKovima. Premium šljivovica destilerisana sa strašću i starana u hrastovim bačvama minimum pet godina.",
  keywords:
    "rakija, šljivovica, premium, destilerija, Srbija, VEK, hrastove bačve",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Destilerija VEK | Premium Srpska Rakija",
    description:
      "Pijemo danas, pamtimo VEKovima. Premium šljivovica destilerisana sa strašću i starana u hrastovim bačvama minimum pet godina.",
    url: SITE_URL,
    siteName: "Destilerija VEK",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/onama-01-full.jpg",
        width: 1200,
        height: 630,
        alt: "Destilerija VEK - Premium Srpska Rakija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destilerija VEK | Premium Srpska Rakija",
    description:
      "Pijemo danas, pamtimo VEKovima. Premium šljivovica destilerisana sa strašću i starana u hrastovim bačvama minimum pet godina.",
    images: ["/images/onama-01-full.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-dark text-cream`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
