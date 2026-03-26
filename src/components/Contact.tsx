import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  // Создаем хранилища для текста из полей
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");

  const handleTelegramRedirect = (e) => {
    e.preventDefault(); // Останавливаем стандартную перезагрузку страницы при отправке формы

    // Формируем красивое сообщение для Телеграма
    const message = `🔥 Новая заявка (JOIN THE CULT)\n\nИмя: ${name || "Не указано"}\nКонтакт: ${contact || "Не указан"}\nО проекте: ${project || "Нет описания"}`;
    
    // Кодируем русский текст и переносы строк в формат для браузера (чтобы Safari не ругался)
    const encodedMessage = encodeURIComponent(message);

    // Перекидываем напрямую в приложение Telegram
    window.location.href = `https://t.me/thekodamusic?text=${encodedMessage}`;
  };

  return (
    <section className="bg-koda-black py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-12">

        <div className="flex flex-col gap-10 md:gap-12">

          <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-6xl tracking-tight">
            JOIN THE <span className="text-koda-accent">CULT</span>
          </h2>

          {/* Вешаем функцию на отправку формы */}
          <form onSubmit={handleTelegramRedirect} className="flex max-w-2xl flex-col gap-6">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
              className="w-full bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Контакт"
              className="w-full bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <textarea
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="О проекте"
              className="w-full resize-y bg-transparent border-b border-koda-white/20 py-4 text-base outline-none placeholder:text-koda-white/40 focus:border-koda-white/40 sm:text-xl"
            />

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-4 text-center font-bold uppercase text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer"
            >
              Отправить
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
