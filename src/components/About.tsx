import about from "../assets/about.jpg";
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-koda-black relative border-b border-koda-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Big Number & Vertical Text */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-[8rem] md:text-[12rem] leading-none text-koda-white/5"
            >
              01
            </motion.div>
            <div className="hidden lg:block vertical-text text-xs font-mono tracking-[0.3em] uppercase text-koda-accent mb-8">
              О нас // Лейбл
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-sans text-3xl md:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-12">
                Объединяем, чтобы создавать <br />
                <span className="font-bold italic text-koda-white">сильную культуру</span> <br />
                вокруг звука.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <p className="text-lg md:text-xl text-koda-white/60 font-light leading-relaxed">
                  Мы — лейбл, который диктует свои правила. Закрытое комьюнити для тех, кто ценит чистоту звучания и концептуальную глубину.
                </p>
                
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm group">
                  <div className="absolute inset-0 bg-koda-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={about}
                    alt="Studio Vibe" 
                    className="w-full h-full object-cover rounded-lg opacity-90 hover:opacity-100 transition"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
