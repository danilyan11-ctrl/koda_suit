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

export default function App() {
  return (
    <main className="min-h-screen bg-koda-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Studio />
      <Services />
      <Contact />
      <Footer />

      {/* Sticky booking CTA */}
      <a
        href={`https://t.me/thekodamusic?text=${encodeURIComponent(
          ["🔥 Бронь студии KODA", "", "Хочу забронировать студию. Подскажите свободные слоты?"].join("\n")
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-koda-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_20px_60px_rgba(217,40,28,0.35)] transition hover:bg-koda-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:scale-[0.99]"
      >
        Забронировать
      </a>
    </main>
  );
}

