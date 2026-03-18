import logo from "../assets/logo.PNG";
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className={`flex justify-between items-center px-6 py-3 rounded-full border transition-all duration-500 ${
        scrolled 
          ? 'bg-koda-black/60 backdrop-blur-xl border-koda-white/10 shadow-2xl' 
          : 'bg-transparent border-transparent'
      }`}>
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg tracking-widest uppercase">
          <img 
            src={logo} 
            alt="KODA Logo" 
            className="h-6 w-auto invert" 
          />
          <span>KODA<span className="text-koda-accent">.</span></span>
        </a>
        
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-koda-white/60">
          <a href="#about" className="hover:text-koda-white transition-colors">О нас</a>
          <a href="#studio" className="hover:text-koda-white transition-colors">Студия</a>
          <a href="#services" className="hover:text-koda-white transition-colors">Услуги</a>
        </div>

        <a 
          href="#contact"
          className="btn-premium inline-block bg-koda-white text-koda-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          В команду
        </a>
      </div>
    </motion.nav>
  );
}
