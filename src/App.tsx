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
    </main>
  );
}

