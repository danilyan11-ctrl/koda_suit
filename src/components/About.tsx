import about from "../assets/about.jpg";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">

        <div className="flex flex-col gap-10 md:gap-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light leading-[1.08] tracking-tight md:text-6xl md:leading-tight"
          >
            Объединяем, чтобы создавать <br />
            <span className="font-bold italic">сильную культуру</span>
          </motion.h2>

          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">

            <p className="max-w-xl text-base leading-relaxed text-koda-white/60 md:text-xl md:leading-relaxed">
              Закрытое комьюнити, где важен не шум, а смысл.  
              Мы строим культуру вокруг звука и людей, которые его чувствуют.
            </p>

            <img
              src={about}
              className="w-full rounded-2xl object-cover md:w-[40%]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}