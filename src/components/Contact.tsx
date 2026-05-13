import { useState } from "react";
import { SITE, phoneLink } from "../content/site";
import { METRIKA, reachGoal } from "../analytics/metrika";

export default function Contact() {
  // Создаем хранилища для текста из полей
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");

  const handleTelegramRedirect = (e: React.FormEvent) => {
    e.preventDefault(); // Останавливаем стандартную перезагрузку страницы при отправке формы

    reachGoal(METRIKA.goals.leadSubmit);

    // Формируем красивое сообщение для Телеграма
    const message =
      `🔥 Новая заявка (JOIN THE CULT)\n\n` +
      `Имя: ${name || "Не указано"}\n` +
      `Контакт: ${contact || "Не указан"}\n` +
      `О проекте: ${project || "Нет описания"}\n\n` +
      `Условия брони: ${SITE.booking.depositPercent}% предоплата, отмена за ${SITE.booking.cancelDeadlineHours}ч.\n` +
      `Адрес: ${SITE.studio.address} (м. ${SITE.studio.metro})`;
    
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

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/thekodamusic"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-koda-white/15 bg-koda-black/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/90 transition hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
            >
              Забронировать студию
            </a>
            {SITE.booking.phone ? (
              <a
                href={phoneLink(SITE.booking.phone)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-koda-white/15 bg-koda-black/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/90 transition hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
              >
                Позвонить
              </a>
            ) : null}
            <a
              href={SITE.maps.yandex}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-koda-white/10 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/60 transition hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
            >
              Яндекс.Карты
            </a>
            <a
              href="#studio"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-koda-white/10 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-widest text-koda-white/60 transition hover:text-koda-white hover:bg-koda-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-koda-white/20"
            >
              Смотреть комнаты
            </a>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-koda-white/10 bg-koda-graphite/30 p-5 text-sm text-koda-white/70 md:max-w-2xl md:p-6 md:text-base">
            <div>
              <span className="text-koda-white/90 font-semibold">Адрес:</span>{" "}
              {SITE.studio.address} (м. {SITE.studio.metro})
            </div>
            <div>
              <span className="text-koda-white/90 font-semibold">Режим:</span> {SITE.studio.hours}
            </div>
            <div>
              <span className="text-koda-white/90 font-semibold">Условия:</span>{" "}
              {SITE.booking.depositPercent}% предоплата, отмена максимум за{" "}
              {SITE.booking.cancelDeadlineHours} часов до записи
            </div>
          </div>

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
