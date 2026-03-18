import { motion } from 'motion/react';

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
    <section id="services" className="py-32 bg-koda-black border-b border-koda-white/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex items-end gap-6 mb-20">
          <div className="font-display text-[4rem] md:text-[6rem] leading-none text-koda-white/10">03</div>
          <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter uppercase pb-2">
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
              className="group border-t border-koda-white/20 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-koda-white hover:px-8 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span className="font-mono text-sm text-koda-white/40 group-hover:text-koda-black/40 transition-colors">
                  {service.id}
                </span>
                <h4 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(228,227,224,0.3)] group-hover:text-koda-black group-hover:[-webkit-text-stroke:0px] transition-all duration-500">
                  {service.title}
                </h4>
              </div>
              
              <p className="text-koda-white/50 group-hover:text-koda-black/70 font-light max-w-md md:text-right transition-colors duration-500">
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
