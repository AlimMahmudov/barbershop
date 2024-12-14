"use client";
import scss from "./Price.module.scss";

import { CiCalendarDate } from "react-icons/ci";
import { TbRazorElectric } from "react-icons/tb";
import { IoMan } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import Image from "next/image";

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
import { useRouter } from "next/navigation";

const prices = [
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
];

const Price = () => {
  const router = useRouter();
  return (
    <div id={scss.Price}>
      <div className="container">
        <div className={scss.price}>
          <h1>выберите специалиста</h1>
          <div className={scss.buttonsPage}>
            <button>
              <CiCalendarDate />
            </button>
            <div className={scss.line}></div>
            <button>
              <IoMan />
            </button>
            <div className={scss.line}></div>
            <button>
              <TbRazorElectric />
            </button>
            <div className={scss.line}></div>
            <button>
              <GoClock />
            </button>
            <div className={scss.line}></div>
            <button>
              <FaCheck />
            </button>
          </div>
          <div className={scss.block}>
            {prices.map((el, index) => (
              <button key={index} className={scss.card}>
                <Image src={el.img} alt="" />
                <h1>{el.title}</h1>
                <p>{el.price} сом</p>
              </button>
            ))}
          </div>
          <div className={scss.buttons}>
            <button onClick={() => router.push("/specialist/")}>Назад</button>
            <button onClick={() => router.push("/data/")}>Продолжить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
