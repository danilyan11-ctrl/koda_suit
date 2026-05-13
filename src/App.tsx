/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Studio from './components/Studio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfoCards from "./components/InfoCards";
import FAQ from "./components/FAQ";
import { SITE, phoneLink, telegramDeepLink } from "./content/site";

export default function App() {
  return (
    <main className="min-h-screen bg-koda-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Studio />
      <Services />
      <InfoCards />
      <FAQ />
      <Contact />
      <Footer />

      {/* Sticky booking CTA */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={telegramDeepLink(["🔥 Бронь студии KODA", "", "Хочу забронировать студию. Подскажите свободные слоты?"].join("\n"))}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-koda-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_20px_60px_rgba(217,40,28,0.35)] transition hover:bg-koda-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-[0.99]"
        >
          Забронировать в TG
        </a>

        {SITE.booking.phone ? (
          <a
            href={phoneLink(SITE.booking.phone)}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-koda-white/15 bg-koda-black/70 px-6 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/85 backdrop-blur-xl transition hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            Позвонить
          </a>
        ) : null}
      </div>
    </main>
  );
}

