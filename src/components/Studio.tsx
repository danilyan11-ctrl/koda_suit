import { motion } from "motion/react";
import { useMemo, useState } from "react";

import studioA from "../assets/studioA.png";
import studioB from "../assets/studioB.png";
import lounge from "../assets/lounge.png";

const images = [
  studioA,
  studioB,
  lounge
];

export default function Studio() {
  const [room, setRoom] = useState<"A" | "B" | "Любая">("Любая");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hours, setHours] = useState<1 | 2 | 3 | 4>(2);

  const quickBookUrl = useMemo(() => {
    const roomText = room === "Любая" ? "любую комнату" : `Mix Room ${room}`;
    const dateTime = [date, time].filter(Boolean).join(" ");

    const message = [
      "🔥 Бронь студии KODA",
      "",
      `Комната: ${roomText}`,
      dateTime ? `Дата/время: ${dateTime}` : "Дата/время: (уточню)",
      `Длительность: ${hours} ч`,
      "",
      "Хочу забронировать. Подскажите свободные слоты и как добраться?",
    ].join("\n");

    return `https://t.me/thekodamusic?text=${encodeURIComponent(message)}`;
  }, [date, hours, room, time]);

  return (
    <section id="studio" className="scroll-mt-28 border-b border-koda-white/10 bg-koda-graphite py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-display text-[3.5rem] leading-none text-koda-white/10 md:text-[6rem]">
              02
            </div>
            <h2 className="font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
              Студия в Москве
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm text-base font-light leading-relaxed text-koda-white/60 md:text-right md:text-lg md:leading-relaxed"
          >
            Профессиональный подход, атмосфера полного погружения, передовые технические решения.
          </motion.p>
        </div>

        {/* Quick booking */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 rounded-2xl border border-koda-white/10 bg-koda-black/40 p-4 backdrop-blur-sm md:mb-10 md:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-koda-white/70">
                Быстрое бронирование
              </div>

              <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
                <label className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-koda-white/40">Комната</span>
                  <select
                    value={room}
                    onChange={(e) => setRoom(e.target.value as "A" | "B" | "Любая")}
                    className="h-11 rounded-xl border border-koda-white/10 bg-koda-black/60 px-3 text-sm text-koda-white outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
                  >
                    <option value="Любая">Любая</option>
                    <option value="A">Mix A</option>
                    <option value="B">Mix B</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-koda-white/40">Дата</span>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="h-11 rounded-xl border border-koda-white/10 bg-koda-black/60 px-3 text-sm text-koda-white outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-koda-white/40">Время</span>
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    type="time"
                    className="h-11 rounded-xl border border-koda-white/10 bg-koda-black/60 px-3 text-sm text-koda-white outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-koda-white/40">Часы</span>
                  <select
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value) as 1 | 2 | 3 | 4)}
                    className="h-11 rounded-xl border border-koda-white/10 bg-koda-black/60 px-3 text-sm text-koda-white outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </label>
              </div>
            </div>

            <a
              href={quickBookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.99]"
            >
              Открыть Telegram
            </a>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">

          {/* MAIN ROOM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-video overflow-hidden rounded-2xl bg-koda-black md:col-span-8 md:h-[600px]"
          >
            <div className="relative h-full w-full">

              <img 
                src={images[0]} 
                className="
                h-full w-full object-cover 
                grayscale opacity-70 
                transition-all duration-500
                group-hover:grayscale-0 group-hover:opacity-100
                group-active:grayscale-0 group-active:opacity-100
                "
              />

              <div className="
                absolute inset-0 bg-black/70 
                opacity-100 transition duration-300 
                group-hover:opacity-0 
                group-active:opacity-0
                pointer-events-none
              " />

              <div className="
                absolute inset-0 flex items-end p-5 
                opacity-100 transition duration-300 
                md:p-7
                group-hover:opacity-100 
                group-active:opacity-100
              ">
                <div className="transition duration-300">

                  <h3 className="text-white text-2xl font-bold mb-2">
                    Mix Room A
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    SSL 2+, U87, Mackie MR824 / KALI LP-6, Ryzen 9, DT770/990
                  </p>

                  <p className="text-white mt-3 text-sm font-semibold">
                    900₽ / 1800₽
                  </p> 

                  <a
                    href={`https://t.me/thekodamusic?text=${encodeURIComponent(
                      [
                        "🔥 Бронь студии KODA",
                        "",
                        "Комната: Mix Room A",
                        "Длительность: (уточню)",
                        "",
                        "Хочу забронировать. Подскажите свободные слоты?",
                      ].join("\n")
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex mt-4 min-h-11 items-center justify-center rounded-full 
                    bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white 
                    transition 
                    active:scale-95 active:bg-red-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                    md:hover:bg-red-700
                    "
                  >
                    Забронировать
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* SIDE */}
          <div className="flex flex-col gap-4 md:col-span-4 md:gap-5">

            {/* ROOM B */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative h-[280px] overflow-hidden bg-koda-black md:h-[calc(50%-0.5rem)] rounded-2xl"
            >
              <div className="relative h-full w-full">

                <img 
                  src={images[1]} 
                  className="
                  h-full w-full object-cover 
                  grayscale opacity-70 
                  transition-all duration-500
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                  group-active:grayscale-0 group-active:opacity-100 group-active:scale-105
                  "
                />

                <div className="
                  absolute inset-0 bg-black/70 
                  opacity-100 transition duration-300 
                  group-hover:opacity-0 
                  group-active:opacity-0
                  pointer-events-none
                " />

                <div className="
                  absolute inset-0 flex items-end p-5 
                  opacity-100 transition duration-300 
                  md:p-6
                ">
                  <div>

                    <h3 className="text-white text-lg font-bold mb-2">
                      Mix Room B
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed">
                      Audient ID4, SE X1S, кастом акустика, FX Audio, DT770/990
                    </p>

                    <p className="text-white mt-3 text-sm font-semibold">
                      600₽ / 1400₽
                    </p>

                    <a
                      href={`https://t.me/thekodamusic?text=${encodeURIComponent(
                        [
                          "🔥 Бронь студии KODA",
                          "",
                          "Комната: Mix Room B",
                          "Длительность: (уточню)",
                          "",
                          "Хочу забронировать. Подскажите свободные слоты?",
                        ].join("\n")
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex mt-4 min-h-11 items-center justify-center rounded-full 
                      bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white 
                      transition 
                      active:scale-95 active:bg-red-700
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                      md:hover:bg-red-700
                      "
                    >
                      Забронировать
                    </a>

                  </div>
                </div>

              </div>
            </motion.div>

            {/* LOUNGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative h-[280px] overflow-hidden bg-koda-black md:h-[calc(50%-0.5rem)] rounded-2xl"
            >
              <div className="relative h-full w-full">

                <img 
                  src={images[2]} 
                  className="
                  h-full w-full object-cover 
                  grayscale opacity-70 
                  transition-all duration-500
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                  group-active:grayscale-0 group-active:opacity-100 group-active:scale-105
                  "
                />

                <div className="
                  absolute inset-0 bg-black/70 
                  opacity-100 transition duration-300 
                  group-hover:opacity-0 
                  group-active:opacity-0
                  pointer-events-none
                " />

                <div className="absolute inset-0 flex items-end p-5 md:p-6">
                  <div>

                    <h3 className="text-white text-lg font-bold mb-2">
                      Lounge Zone
                    </h3>

                    <p className="text-white/70 text-sm">
                      Комфорт, отдых, атмосфера для артистов
                    </p>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}