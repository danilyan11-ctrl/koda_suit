import { motion } from "framer-motion";

import studio1 from "../assets/studio1.jpg";
import studio2 from "../assets/studio2.jpg";
import studio3 from "../assets/studio3.jpg";

const images = [studio1, studio2, studio3];

export default function Studio() {
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
            className="max-w-sm text-base font-light leading-relaxed text-koda-white/60 md:text-right md:text-lg"
          >
            Профессиональный подход, атмосфера полного погружения, передовые технические решения.
          </motion.p>
        </div>

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
                
                md:group-hover:grayscale-0 md:group-hover:opacity-100
                
                active:grayscale-0 active:opacity-100
                "
              />

              <div className="
                absolute inset-0 bg-black/70 
                opacity-100 transition duration-300 
                
                md:group-hover:opacity-0
                
                active:opacity-0
                
                pointer-events-none
              " />

              <div className="
                absolute inset-0 flex items-end p-5 
                transition duration-300 md:p-7
              ">
                <div>

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
                    className="
                    inline-flex mt-4 min-h-11 items-center justify-center rounded-full 
                    bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white 
                    transition 
                    active:scale-95 active:bg-red-700
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
                  
                  md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110
                  
                  active:grayscale-0 active:opacity-100 active:scale-105
                  "
                />

                <div className="
                  absolute inset-0 bg-black/70 
                  opacity-100 transition duration-300 
                  
                  md:group-hover:opacity-0
                  
                  active:opacity-0
                  
                  pointer-events-none
                " />

                <div className="absolute inset-0 flex items-end p-5 md:p-6">
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
                      href="https://t.me/thekodamusic"
                      target="_blank"
                      className="
                      inline-flex mt-4 min-h-11 items-center justify-center rounded-full 
                      bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white 
                      transition 
                      active:scale-95 active:bg-red-700
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
                  
                  md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110
                  
                  active:grayscale-0 active:opacity-100 active:scale-105
                  "
                />

                <div className="
                  absolute inset-0 bg-black/70 
                  opacity-100 transition duration-300 
                  
                  md:group-hover:opacity-0
                  
                  active:opacity-0
                  
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