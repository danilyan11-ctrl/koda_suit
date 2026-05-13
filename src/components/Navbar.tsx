import logo from "../assets/logo.PNG";
import { useState } from "react";
import { SITE, phoneLink, telegramDeepLink } from "../content/site";

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
        <div className="hidden md:flex items-center gap-8 text-sm uppercase text-koda-white/60">
          <a className="hover:text-koda-white transition-colors" href="#about">
            О нас
          </a>
          <a className="hover:text-koda-white transition-colors" href="#studio">
            Студия
          </a>
          <a className="hover:text-koda-white transition-colors" href="#services">
            Услуги
          </a>
          <a className="hover:text-koda-white transition-colors" href="#info">
            Инфо
          </a>
          <a className="hover:text-koda-white transition-colors" href="#faq">
            FAQ
          </a>
          <a
            href={telegramDeepLink(["🔥 Бронь студии KODA", "", "Хочу забронировать студию."].join("\n"))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-koda-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-koda-accent/90"
          >
            Бронь
          </a>
          {SITE.booking.phone ? (
            <a
              href={phoneLink(SITE.booking.phone)}
              className="inline-flex items-center justify-center rounded-full border border-koda-white/15 bg-koda-black/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-koda-white/80 transition hover:bg-koda-white/5 hover:text-koda-white"
            >
              Позвонить
            </a>
          ) : null}
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
          <a
            href="#info"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-koda-white/80 hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            Инфо
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-koda-white/80 hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            FAQ
          </a>

          <div className="mt-1 grid grid-cols-1 gap-2 p-2">
            <a
              href={telegramDeepLink(["🔥 Бронь студии KODA", "", "Хочу забронировать студию."].join("\n"))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-koda-accent px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-koda-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Забронировать в TG
            </a>
            {SITE.booking.phone ? (
              <a
                href={phoneLink(SITE.booking.phone)}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-koda-white/15 bg-koda-black/40 px-4 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/80 transition hover:bg-koda-white/5 hover:text-koda-white focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
              >
                Позвонить
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}