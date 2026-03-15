import { AgeProvider } from "@/components/AgeContext";
import AgeGate from "@/components/AgeGate";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuoteSection from "@/components/QuoteSection";
import Production from "@/components/Production";
import VideoSection from "@/components/VideoSection";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://destilerijavek.rs",
  name: "Destilerija VEK",
  description:
    "Premium šljivovica destilerisana sa strašću i starana u hrastovim bačvama minimum pet godina.",
  url: "https://destilerijavek.rs",
  email: "info@destilerijavek.rs",
  image: "https://destilerijavek.rs/images/onama-01-full.jpg",
  logo: "https://destilerijavek.rs/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Donjovlaška 160",
    addressLocality: "Donje Vlase, Niš",
    postalCode: "18000",
    addressRegion: "Nišavski okrug",
    addressCountry: "RS",
  },
  sameAs: [
    "https://www.facebook.com/destilerijavek",
    "https://www.instagram.com/destilerija_vek",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      priceCurrency: "RSD",
      price: "6500",
      availability: "https://schema.org/PreOrder",
      itemOffered: {
        "@type": "Product",
        name: "VEK Standard Šljivovica",
        description:
          "Premium šljivovica starana minimum pet godina u hrastovim bačvama. Single barrel, 0.7L.",
        brand: { "@type": "Brand", name: "Destilerija VEK" },
        image: "https://destilerijavek.rs/images/manja.jpg",
      },
    },
    {
      "@type": "Offer",
      priceCurrency: "RSD",
      price: "9500",
      availability: "https://schema.org/PreOrder",
      itemOffered: {
        "@type": "Product",
        name: "VEK Premium Šljivovica",
        description:
          "Premium šljivovica starana minimum pet godina u pažljivo odabranim hrastovim buradima. Single barrel, 0.7L.",
        brand: { "@type": "Brand", name: "Destilerija VEK" },
        image: "https://destilerijavek.rs/images/veca.jpg",
      },
    },
  ],
};

export default function Home() {
  return (
    <AgeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgeGate />
      <Navigation />
      <main>
        <Hero />
        <About />
        <QuoteSection />
        <Production />
        <VideoSection />
        <Products />
        <Contact />
      </main>
      <Footer />
    </AgeProvider>
  );
}
