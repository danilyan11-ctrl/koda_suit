import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-koda-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="font-display text-[4rem] md:text-[6rem] leading-none text-koda-white/10 mb-4">04</div>
              <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
                JOIN<br/>THE<br/><span className="text-koda-accent">CULT</span>
              </h2>
            </div>

            <div className="space-y-8 font-mono text-sm text-koda-white mt-12 lg:mt-0">
              <div className="border-l-2 border-koda-accent pl-4">
                <span className="block text-koda-white/40 uppercase tracking-widest text-xs font-sans mb-1">Локация</span>
                Москва, металлургов 5
              </div>
              <div className="border-l-2 border-koda-accent pl-4">
                <span className="block text-koda-white/40 uppercase tracking-widest text-xs font-sans mb-1">Связь</span>
                <a href="mailto:koda.music@mail.ru" className="block hover:text-koda-accent transition-colors">koda.music@mail.ru</a>
                <a href="https://t.me/thekodamusic" target="_blank" rel="noopener noreferrer" className="block hover:text-koda-accent transition-colors">@thekodamusic</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex items-center"
          >
            <form className="w-full space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-transparent border-b-2 border-koda-white/20 py-4 text-2xl md:text-4xl text-koda-white focus:outline-none focus:border-koda-accent transition-colors font-display uppercase tracking-wider peer placeholder-transparent"
                  placeholder="Имя"
                />
                <label htmlFor="name" className="absolute left-0 -top-6 text-xs font-mono uppercase tracking-widest text-koda-white/40 peer-focus:text-koda-accent transition-colors peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-placeholder-shown:font-display peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono">
                  Имя
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="text" 
                  id="contact" 
                  required
                  className="w-full bg-transparent border-b-2 border-koda-white/20 py-4 text-2xl md:text-4xl text-koda-white focus:outline-none focus:border-koda-accent transition-colors font-display uppercase tracking-wider peer placeholder-transparent"
                  placeholder="Контакт"
                />
                <label htmlFor="contact" className="absolute left-0 -top-6 text-xs font-mono uppercase tracking-widest text-koda-white/40 peer-focus:text-koda-accent transition-colors peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-placeholder-shown:font-display peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono">
                  Telegram / Телефон
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  rows={1}
                  className="w-full bg-transparent border-b-2 border-koda-white/20 py-4 text-2xl md:text-4xl text-koda-white focus:outline-none focus:border-koda-accent transition-colors font-display uppercase tracking-wider peer placeholder-transparent resize-none"
                  placeholder="Проект"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-6 text-xs font-mono uppercase tracking-widest text-koda-white/40 peer-focus:text-koda-accent transition-colors peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-placeholder-shown:font-display peer-focus:-top-6 peer-focus:text-xs peer-focus:font-mono">
                  О проекте
                </label>
              </div>
                <a
  href="https://t.me/thekodamusic"
  target="_blank"
  className="btn-premium w-full py-6 font-display font-bold text-xl md:text-3xl tracking-widest uppercase text-koda-black bg-koda-white rounded-sm text-center block"
>
  Отправить
</a>
