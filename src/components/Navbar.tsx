import logo from "../assets/logo.PNG";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-koda-white/10 bg-koda-black/70 px-4 py-3 backdrop-blur-xl md:px-6">

        <div className="flex items-center gap-2">
          <img src={logo} className="h-5 invert" />
          <span className="font-bold">KODA</span>
        </div>

        {/* burger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/30"
        >
          ☰
        </button>

        {/* desktop */}
        <div className="hidden md:flex gap-8 text-sm uppercase text-koda-white/60">
          <a className="hover:text-koda-white transition-colors" href="#about">
            О нас
          </a>
          <a className="hover:text-koda-white transition-colors" href="#studio">
            Студия
          </a>
          <a className="hover:text-koda-white transition-colors" href="#services">
            Услуги
          </a>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="mt-3 flex flex-col gap-1 rounded-2xl border border-koda-white/10 bg-koda-black/90 p-2 backdrop-blur-xl md:hidden"
        >
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-koda-white/80 hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            О нас
          </a>
          <a
            href="#studio"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-koda-white/80 hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            Студия
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-koda-white/80 hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            Услуги
          </a>
        </div>
      )}
    </div>
  );
}