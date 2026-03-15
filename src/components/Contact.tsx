"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "standard",
    quantity: "1",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", address: "", product: "standard", quantity: "1" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Poručite
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-8 leading-tight">
              Kontaktirajte nas
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-cream/85 leading-relaxed mb-12">
              Poručite direktno od nas ili nas kontaktirajte za sve informacije
              o našim proizvodima.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Sedište
                </p>
                <p className="text-cream/85">Donjovlaška 160, 18000, Donje Vlase, Niš, Srbija</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@destilerijavek.rs"
                  className="text-cream/85 hover:text-gold transition-colors"
                >
                  info@destilerijavek.rs
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Pratite nas
                </p>
                <div className="flex gap-6">
                  <a
                    href="https://facebook.com/profile.php?id=61581816304562"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/85 hover:text-gold transition-colors text-sm tracking-wider"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/destilerija.vek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/85 hover:text-gold transition-colors text-sm tracking-wider"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                  Adresa za dostavu
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                    Proizvod
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="standard" className="bg-dark">
                      Standard — RSD 6.500
                    </option>
                    <option value="premium" className="bg-dark">
                      Premium — RSD 9.500
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-2">
                    Količina
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-cream/20 py-3 text-cream focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 10, 12].map((n) => (
                      <option key={n} value={n} className="bg-dark">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 w-full py-4 bg-gold text-dark font-medium text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Šalje se..." : "Pošaljite porudžbinu"}
              </button>

              {status === "sent" && (
                <p className="text-green-400 text-sm text-center mt-4">
                  Porudžbina je uspešno poslata! Javićemo vam se uskoro.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-4">
                  Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte direktno.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
