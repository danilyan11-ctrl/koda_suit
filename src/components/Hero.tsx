import logo from "../assets/logo.PNG";
import { motion } from "motion/react";
import React from "react";

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
          alt="KODA logo"
        />

        <h1 className="font-display font-bold text-[clamp(64px,20vw,160px)] md:text-[clamp(120px,14vw,220px)] leading-[0.9] tracking-tight text-center">
          KODA
        </h1>
      </motion.div>

      {/* Marquee Footer - full width band with gloss */}
      <div className="relative z-10 w-full mt-8">
        {/* Full-width band */}
        <div className="relative w-full">
          {/* dark band that always covers the full width */}
          <div className="mx-auto w-full bg-koda-black/60 backdrop-blur-sm border-t border-b border-koda-white/10 py-4 md:py-5">
            {/* content wrapper keeps the marquee centered on large screens */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 overflow-hidden">
              {/* marquee track */}
              <div
                className="flex items-center whitespace-nowrap gap-8 text-center"
                style={{ alignItems: "center" }}
                aria-hidden="true"
              >
                <div
                  className="marquee-track inline-flex items-center text-2xl md:text-4xl uppercase tracking-widest text-koda-white/90"
                  style={{
                    // animation controlled by the CSS keyframes below
                    display: "inline-flex",
                    gap: "3rem",
                    animation: "koda-marquee 22s linear infinite",
                  }}
                >
                  <span className="px-4 py-1 bg-koda-black/30 rounded-sm">Культ Идеи.</span>
                  <span className="px-4 py-1 bg-transparent text-koda-accent">Культ Музыки.</span>
                  <span className="px-4 py-1 bg-koda-black/30 rounded-sm">Культ Идеи.</span>
                  <span className="px-4 py-1 bg-transparent text-koda-accent">Культ Музыки.</span>
                  <span className="px-4 py-1 bg-koda-black/30 rounded-sm">Культ Идеи.</span>
                  <span className="px-4 py-1 bg-transparent text-koda-accent">Культ Музыки.</span>
                  {/* повтор для бесшовности */}
                  <span className="px-4 py-1 bg-koda-black/30 rounded-sm">Культ Идеи.</span>
                  <span className="px-4 py-1 bg-transparent text-koda-accent">Культ Музыки.</span>
                </div>
              </div>
            </div>

            {/* Gloss overlay — subtle shiny band */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-full"
              aria-hidden="true"
            >
              {/* soft left/right fade to hide edges on small screens */}
              <div className="absolute inset-0">
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "10%",
                    height: "80%",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 60%, rgba(0,0,0,0.45) 100%)",
                    mixBlendMode: "overlay",
                    opacity: 0.9,
                    borderRadius: "2px",
                    transform: "rotate(-1deg)",
                    filter: "blur(6px)",
                  }}
                />
                {/* small glossy streak moving (very subtle) */}
                <div
                  style={{
                    position: "absolute",
                    left: "-25%",
                    top: "0%",
                    width: "60%",
                    height: "45%",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%)",
                    transform: "skewX(-20deg)",
                    opacity: 0.08,
                    animation: "koda-gloss 6s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for marquee + gloss animations */}
      <style>{`
        @keyframes koda-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes koda-gloss {
          0% { transform: translateX(-100%) skewX(-20deg); opacity: 0.04; }
          50% { transform: translateX(30%) skewX(-20deg); opacity: 0.12; }
          100% { transform: translateX(120%) skewX(-20deg); opacity: 0.04; }
        }
        /* make marquee seamless: duplicate track by CSS - we just rely on large track repeated items */
        .marquee-track { will-change: transform; }
        /* reduce motion on prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
}