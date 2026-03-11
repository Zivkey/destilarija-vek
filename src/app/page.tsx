import { AgeProvider } from "@/components/AgeContext";
import AgeGate from "@/components/AgeGate";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuoteSection from "@/components/QuoteSection";
import Production from "@/components/Production";
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
    addressCountry: "RS",
  },
  sameAs: [
    "https://www.facebook.com/destilerijavek",
    "https://www.instagram.com/destilerija_vek",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "VEK Premium Šljivovica",
        description:
          "Premium šljivovica starana u hrastovim bačvama minimum pet godina.",
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
        <Products />
        <Contact />
      </main>
      <Footer />
    </AgeProvider>
  );
}
