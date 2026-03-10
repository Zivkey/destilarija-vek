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

export default function Home() {
  return (
    <AgeProvider>
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
