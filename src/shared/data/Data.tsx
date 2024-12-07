import man from "@/shared/assets/images/man.svg";
import man2 from "@/shared/assets/images/man2.svg";
import man3 from "@/shared/assets/images/man3.svg";
import man4 from "@/shared/assets/images/man4.svg";
import man5 from "@/shared/assets/images/man5.svg";

import price_img from "@/shared/assets/images/price.svg";
import price_img2 from "@/shared/assets/images/price2.svg";
import price_img3 from "@/shared/assets/images/price3.svg";
import price_img4 from "@/shared/assets/images/price4.svg";
import price_img5 from "@/shared/assets/images/price6.svg";
import price_img6 from "@/shared/assets/images/price5.svg";
import price_img7 from "@/shared/assets/images/price7.svg";
import price_img8 from "@/shared/assets/images/price8.svg";
import price_img9 from "@/shared/assets/images/price9.svg";
import price_img10 from "@/shared/assets/images/price10.svg";
interface DatesOption {
  num: string;
}

interface TimeOption {
  oclo: string; // Время
}

interface NameOption {
  photo: string; // Путь к изображению
  name: string; // Имя
  work: string; // Работа
}

interface PriceOption {
  img: string; // Путь к изображению
  title: string; // Название услуги
  price: string; // Цена
}

interface TimeCategory {
  utro?: TimeOption[]; // Утренние интервалы
  day?: TimeOption[]; // Дневные интервалы
  vech?: TimeOption[]; // Вечерние интервалы
}

interface Data {
  names?: NameOption[]; // Барберы
  prices?: PriceOption[]; // Услуги и цены
  time?: TimeCategory[]; // Интервалы времени
  dates?: DatesOption[]; // Даты
}

export const data: Data[] = [
  {
    names: [
      { photo: man, name: "Макс Корж", work: "Топ-барбер" },
      { photo: man2, name: "Али тулиев", work: "барбер" },
      { photo: man3, name: "данияр калиев", work: "Бренд-барбер" },
      { photo: man4, name: "Артем Белов", work: "барбер" },
      { photo: man5, name: "Нурлан Pаимов", work: "барбер" },
    ],
  },
  {
    prices: [
      { img: price_img, title: "Мужская стрижка", price: "1000" },
      { img: price_img2, title: "Под машинку", price: "700" },
      { img: price_img3, title: "Детская стрижка", price: "500" },
      { img: price_img4, title: "Укладка", price: "300" },
      { img: price_img5, title: "Королевское бритье", price: "1000" },
      { img: price_img6, title: "Ножницами", price: "1500" },
      { img: price_img7, title: "Черная маска", price: "400" },
      { img: price_img8, title: "Папа + сын", price: "1200" },
      { img: price_img9, title: "Покраска волос", price: "700" },
      { img: price_img10, title: "Борода и усы", price: "1000" },
    ],
  },
  {
    time: [
      {
        utro: [
          { oclo: "10:00" },
          { oclo: "10:30" },
          { oclo: "11:00" },
          { oclo: "11:30" },
        ],
      },
      {
        day: [
          { oclo: "12:00" },
          { oclo: "12:30" },
          { oclo: "13:00" },
          { oclo: "13:30" },
          { oclo: "14:00" },
          { oclo: "14:30" },
          { oclo: "15:00" },
          { oclo: "15:30" },
          { oclo: "16:00" },
          { oclo: "16:30" },
          { oclo: "17:00" },
          { oclo: "17:30" },
        ],
      },
      {
        vech: [
          { oclo: "18:00" },
          { oclo: "18:30" },
          { oclo: "19:00" },
          { oclo: "19:30" },
        ],
      },
    ],
  },
  {
    dates: [
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "1" },
      { num: "2" },
      { num: "3" },
      { num: "4" },
      { num: "5" },
      { num: "6" },
      { num: "7" },
      { num: "8" },
      { num: "9" },
      { num: "10" },
      { num: "11" },
      { num: "12" },
      { num: "13" },
      { num: "14" },
      { num: "15" },
      { num: "16" },
      { num: "17" },
      { num: "18" },
      { num: "19" },
      { num: "20" },
      { num: "21" },
      { num: "22" },
      { num: "23" },
      { num: "24" },
      { num: "25" },
      { num: "26" },
      { num: "27" },
      { num: "28" },
      { num: "29" },
      { num: "30" },
      { num: "31" },
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "" },
      { num: "" },
    ],
  },
];

// interface TimeOption {
//     oclo: string; // Время
//   }
