import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Запись",
    desc: "Идеальная акустика и топовые микрофоны для кристально чистого вокала и инструментов."
  },
  {
    id: "02",
    title: "Сведение",
    desc: "Детальная проработка баланса, пространства и динамики вашего трека."
  },
  {
    id: "03",
    title: "Продакшн",
    desc: "Создание аранжировок с нуля, саунд-дизайн и продюсирование под ключ."
  },
  {
    id: "04",
    title: "Дистрибуция",
    desc: "Доставка вашей музыки на все цифровые площадки с поддержкой лейбла."
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 border-b border-koda-white/10 bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="mb-12 flex items-end gap-6 md:mb-20">
          <div className="font-display text-[3.5rem] leading-none text-koda-white/10 md:text-[6rem]">03</div>
          <h2 className="pb-2 font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
            Услуги
          </h2>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
              group flex cursor-pointer flex-col justify-between gap-4 
              border-t border-koda-white/20 py-8 
              transition-all duration-300
              
              md:flex-row md:items-center md:gap-6 md:py-12
              
              md:hover:bg-koda-white md:hover:px-8
              active:bg-koda-white active:px-6
              "
            >
              <div className="flex items-center gap-6 md:gap-16">
                <span className="
                font-mono text-sm text-koda-white/40 
                transition-colors
                
                group-hover:text-koda-black/40
                active:text-koda-black/40
                ">
                  {service.id}
                </span>

                <h4 className="
                font-display text-3xl uppercase tracking-tighter 
                text-transparent 
                [-webkit-text-stroke:1px_rgba(228,227,224,0.3)] 
                transition-all duration-300 
                md:text-5xl 
                
                group-hover:text-koda-black 
                group-hover:[-webkit-text-stroke:0px]
                
                active:text-koda-black 
                active:[-webkit-text-stroke:0px]
                ">
                  {service.title}
                </h4>
              </div>
              
              <p className="
              max-w-md text-sm font-light leading-relaxed text-koda-white/50 
              transition-colors duration-300 
              md:text-right md:text-base md:leading-relaxed 
              
              group-hover:text-koda-black/70
              active:text-koda-black/70
              ">
                {service.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-koda-white/20"></div>
        </div>

      </div>
    </section>
  );
}