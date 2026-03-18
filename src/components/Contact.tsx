import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">

        <div className="flex flex-col gap-10 md:gap-12">

          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-6xl tracking-tight">
            JOIN THE <span className="text-koda-accent">CULT</span>
          </h2>

          <form className="flex max-w-2xl flex-col gap-6">

            <input
              placeholder="Имя"
              className="w-full bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <input
              placeholder="Контакт"
              className="w-full bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <textarea
              placeholder="О проекте"
              className="w-full resize-y bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <a
              href="https://t.me/thekodamusic"
              target="_blank"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-4 text-center font-bold uppercase text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Отправить
            </a>

          </form>

        </div>
      </div>
    </section>
  );
}