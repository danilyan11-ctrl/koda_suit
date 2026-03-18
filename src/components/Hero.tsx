import logo from "../assets/logo.PNG";
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-koda-black pt-32 pb-10">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-koda-accent/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center items-center gap-4 md:gap-8"
        >
          <img 
            src={logo}  
            alt="KODA Logo" 
            className="h-[12vw] w-auto invert mix-blend-difference" 
          />
          <h1 className="font-display font-bold text-[18vw] leading-[0.8] tracking-tighter uppercase text-koda-white text-center mix-blend-difference">
            KODA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <a href="#contact" className="btn-premium inline-flex items-center justify-center px-8 py-4 bg-koda-white text-koda-black font-sans font-bold text-sm tracking-widest uppercase rounded-full">
            Оставить заявку
          </a>
        </motion.div>
      </div>

      {/* Marquee Footer */}
      <div className="relative z-10 w-full border-y border-koda-white/10 py-4 bg-koda-black/50 backdrop-blur-sm mt-8">
        <div className="marquee-container">
          <div className="marquee-track font-display text-2xl md:text-4xl uppercase tracking-widest text-koda-white/80">
            <span className="mx-8">Культ Идеи.</span>
            <span className="mx-8 text-koda-accent text-outline">Культ Музыки.</span>
            <span className="mx-8">Культ Идеи.</span>
            <span className="mx-8 text-koda-accent text-outline">Культ Музыки.</span>
            <span className="mx-8">Культ Идеи.</span>
            <span className="mx-8 text-koda-accent text-outline">Культ Музыки.</span>
            <span className="mx-8">Культ Идеи.</span>
            <span className="mx-8 text-koda-accent text-outline">Культ Музыки.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
