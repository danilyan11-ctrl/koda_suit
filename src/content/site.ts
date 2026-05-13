export const SITE = {
  brand: "KODA",
  booking: {
    telegramUsername: "thekodamusic",
    phone: "+7(993)928-88-03",
    depositPercent: 50,
    cancelDeadlineHours: 12,
  },
  maps: {
    yandex: "https://yandex.ru/maps/org/koda_music/",
  },
  studio: {
    address: "Москва, Металлургов 5",
    metro: "Перово",
    hours: "24/7",
  },
} as const;

export function telegramDeepLink(text: string) {
  const encoded = encodeURIComponent(text);
  return `https://t.me/${SITE.booking.telegramUsername}?text=${encoded}`;
}

export function phoneLink(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "";
}

