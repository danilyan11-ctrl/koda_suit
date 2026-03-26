import logo from "../assets/logo.PNG";
import { motion } from "motion/react";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <img 
          src={logo} 
          className="h-[clamp(64px,22vw,120px)] mx-auto mb-8" 
          alt="KODA logo" 
        />
        <h1 className="font-display font-bold text-white text-6xl md:text-8xl">
          KODA
        </h1>
      </motion.div>

      {/* ЛЕГКИЙ ГЛЯНЕЦ */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
      </div>
    </section>
  );
}