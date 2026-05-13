import { motion } from "motion/react";
import equipmentCard from "../assets/card-equipment.png";
import zonesCard from "../assets/card-zones.png";
import pricesCard from "../assets/card-prices.png";
import promoCard from "../assets/card-promo.png";

type Card = {
  id: string;
  title: string;
  subtitle?: string;
  img: string;
};

const cards: Card[] = [
  { id: "equipment", title: "Оборудование", subtitle: "Что внутри", img: equipmentCard },
  { id: "zones", title: "Комнаты", subtitle: "Main / Chill / Cook Up", img: zonesCard },
  { id: "prices", title: "Пакеты и цены", subtitle: "Cook Up / Track Cooking", img: pricesCard },
  { id: "promo", title: "Акция", subtitle: "Второй час", img: promoCard },
];

export default function InfoCards() {
  return (
    <section id="info" className="scroll-mt-28 border-b border-koda-white/10 bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 font-display text-[3.5rem] leading-none text-koda-white/10 md:text-[6rem]">04</div>
            <h2 className="font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
              Всё по делу
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm text-base font-light leading-relaxed text-koda-white/60 md:text-right md:text-lg md:leading-relaxed"
          >
            Оборудование, комнаты, пакеты и акции — в одном месте.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {cards.map((card, idx) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="snap-start shrink-0 w-[86%] sm:w-[70%] md:w-[46%] lg:w-[36%]"
              >
                <div className="group overflow-hidden rounded-2xl border border-koda-white/10 bg-koda-graphite/30">
                  <div className="flex items-end justify-between gap-3 p-4 md:p-5">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-koda-white/40">
                        {card.subtitle ?? "Инфо"}
                      </div>
                      <div className="mt-1 truncate text-lg font-bold uppercase tracking-tight">
                        {card.title}
                      </div>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-koda-white/40">
                      swipe →
                    </div>
                  </div>

                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-koda-black">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover grayscale opacity-90 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-active:grayscale-0 group-active:opacity-100"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-100 transition duration-300 group-hover:opacity-0 group-active:opacity-0" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

