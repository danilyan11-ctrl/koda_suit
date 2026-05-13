import { motion } from "motion/react";
import { useState } from "react";
import { INFO_CARDS } from "../content/infoCards";
import StoriesOverlay from "./StoriesOverlay";

export default function InfoCards() {
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [storiesStart, setStoriesStart] = useState(0);

  const openStories = (index: number) => {
    setStoriesStart(index);
    setStoriesOpen(true);
  };

  return (
    <section id="info" className="scroll-mt-28 border-b border-koda-white/10 bg-koda-black py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-8 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2 font-display text-[3rem] leading-none text-koda-white/10 md:mb-3 md:text-[6rem]">
              04
            </div>
            <h2 className="font-sans text-3xl font-bold uppercase tracking-tighter md:text-6xl">
              Всё по делу
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-sm font-light leading-relaxed text-koda-white/60 md:text-right md:text-lg md:leading-relaxed"
          >
            Оборудование, комнаты, прайс и акции — откройте как сторис: удобно с телефона, без горизонтального свайпа по ленте.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {INFO_CARDS.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              onClick={() => openStories(idx)}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-koda-black rounded-2xl"
            >
              <div className="overflow-hidden rounded-2xl border border-koda-white/10 bg-koda-graphite/30 active:scale-[0.98] transition-transform duration-150">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-koda-black sm:aspect-[3/4]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover object-top opacity-90 transition duration-300 group-active:opacity-100 md:group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
                      {card.subtitle}
                    </p>
                    <p className="mt-0.5 text-sm font-bold uppercase leading-tight text-white sm:text-base">
                      {card.title}
                    </p>
                    <p className="mt-2 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-koda-accent sm:text-xs">
                      Смотреть
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      <StoriesOverlay
        open={storiesOpen}
        startIndex={storiesStart}
        cards={INFO_CARDS}
        onClose={() => setStoriesOpen(false)}
      />
    </section>
  );
}
