import { motion } from "motion/react";
import { SITE } from "../content/site";

const faqs = [
  {
    q: "Как забронировать?",
    a: "Самый быстрый способ — написать в Telegram. Можно также позвонить, если удобнее.",
  },
  {
    q: "Что входит в час?",
    a: "Комната, готовое подключение, настроенный сетап. Если нужен звукорежиссёр — это отдельный пакет (смотрите карточку прайса).",
  },
  {
    q: "Предоплата нужна?",
    a: `Да, бронирование по ${SITE.booking.depositPercent}% предоплате.`,
  },
  {
    q: "Можно ли перенести/отменить бронь?",
    a: `Да. Отмена возможна максимум за ${SITE.booking.cancelDeadlineHours} часов до записи — напишите в Telegram, чтобы мы предложили свободные слоты.`,
  },
  {
    q: "Где вы находитесь?",
    a: `${SITE.studio.address} (м. ${SITE.studio.metro}). Маршрут удобнее всего открыть в Яндекс.Картах.`,
  },
  {
    q: "Режим работы",
    a: `Работаем ${SITE.studio.hours} — по записи.`,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 font-display text-[3.5rem] leading-none text-koda-white/10 md:text-[6rem]">05</div>
            <h2 className="font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
              FAQ
            </h2>
          </motion.div>

          <motion.a
            href={SITE.maps.yandex}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-koda-white/10 bg-koda-black/40 px-6 py-4 text-sm font-bold uppercase tracking-wider text-koda-white/80 transition hover:bg-koda-white/5 hover:text-koda-white focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
          >
            Открыть Яндекс.Карты
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {faqs.map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="rounded-2xl border border-koda-white/10 bg-koda-graphite/30 p-5 md:p-6"
            >
              <div className="text-base font-bold uppercase tracking-tight">{item.q}</div>
              <div className="mt-3 text-sm leading-relaxed text-koda-white/60 md:text-base">
                {item.a}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

