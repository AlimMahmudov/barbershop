"use client";
import { useRouter } from "next/navigation";
import scss from "./ThankYou.module.scss";
import Image from "next/image";
import hero_logo from "@/shared/assets/images/hero_logo.svg";

const ThankYou = () => {
  const router = useRouter();
  return (
    <div id={scss.Thank}>
      <div className="container">
        <div className={scss.thank}>
          <div data-aos="fade-up" className={scss.hero_text}>
            <h1>
              УСПЕШНОЕ <br /> БРОНИРОВАНИЕ
            </h1>

            <div className={scss.buttons}>
              <h4>спосибо за бронирование</h4>
              <button onClick={() => router.push("/record/")}>
                Записаться еще
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className={scss.hero_img}>
            <Image src={hero_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
