import logo from "../assets/logo.PNG";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-koda-black px-4 md:px-12">
      {/* Glow */}
      <div className="absolute w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] bg-koda-accent/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-6 md:gap-8"
      >
        <img
          src={logo}
          className="h-[clamp(64px,22vw,120px)] md:h-[clamp(96px,10vw,160px)] invert"
        />

        <h1 className="font-display font-bold text-[clamp(64px,20vw,160px)] md:text-[clamp(120px,14vw,220px)] leading-[0.9] tracking-tight text-center">
          KODA
        </h1>
      </motion.div>

    
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

  {/* ЛЕГКИЙ ГЛЯНЕЦ */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
  </div>
</div>
</section>
