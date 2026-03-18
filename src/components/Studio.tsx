import { motion } from "motion/react";

import studio1 from "../assets/studio1.jpg";
import studio2 from "../assets/studio2.jpg";
import studio3 from "../assets/studio3.jpg";

const images = [
  studio1,
  studio2,
  studio3
];

export default function Studio() {
  return (
    <section id="studio" className="py-32 bg-koda-graphite border-b border-koda-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display text-[4rem] md:text-[6rem] leading-none text-koda-white/10 mb-4">
              02
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              Студия в Москве
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-koda-white/60 text-lg font-light max-w-sm md:text-right"
          >
            Профессиональный подход, атмосфера полного погружения, передовые технические решения.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* MAIN ROOM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative aspect-video md:h-[600px] overflow-hidden group bg-koda-black"
          >
            <div className="relative w-full h-full group">

              <img 
                src={images[0]} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">

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
  href="https://t.me/thekodamusic"
  target="_blank"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition"
>
  Забронировать
</a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* SIDE */}
          <div className="md:col-span-4 flex flex-col gap-4">

            {/* ROOM B */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] md:h-[calc(50%-0.5rem)] overflow-hidden group bg-koda-black"
            >
              <div className="relative w-full h-full group">

                <img 
                  src={images[1]} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">

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
  href="https://t.me/thekodamusic"
  target="_blank"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition"
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
              className="relative h-[300px] md:h-[calc(50%-0.5rem)] overflow-hidden group bg-koda-black"
            >
              <div className="relative w-full h-full group">

                <img 
                  src={images[2]} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="translate-y-6 group-hover:translate-y-0 transition duration-500">

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