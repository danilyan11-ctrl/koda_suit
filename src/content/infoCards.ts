import equipmentCard from "../assets/card-equipment.png";
import zonesCard from "../assets/card-zones.png";
import pricesCard from "../assets/card-prices.png";
import promoCard from "../assets/card-promo.png";

export type InfoCard = {
  id: string;
  title: string;
  subtitle?: string;
  img: string;
};

export const INFO_CARDS: InfoCard[] = [
  { id: "equipment", title: "Оборудование", subtitle: "Что внутри", img: equipmentCard },
  { id: "zones", title: "Комнаты", subtitle: "Main / Chill / Cook Up", img: zonesCard },
  { id: "prices", title: "Пакеты и цены", subtitle: "Cook Up / Track Cooking", img: pricesCard },
  { id: "promo", title: "Акция", subtitle: "Второй час", img: promoCard },
];
