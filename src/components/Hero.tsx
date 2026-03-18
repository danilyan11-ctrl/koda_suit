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

      {/* Subtitle */}
      <div className="absolute bottom-6 px-4 text-center text-sm font-light tracking-wide text-koda-white/50 md:text-lg">
        Культ идеи. Культ музыки.
      </div>
    </section>
  );
}