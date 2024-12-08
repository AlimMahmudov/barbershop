"use client";
import { useRouter } from "next/navigation";
import scss from "./ThankYou.module.scss";
import Image from "next/image";
import hero_logo from "@/shared/assets/images/hero_logo.svg";
import { useLanguageStore } from "@/shared/stores/Language";

const ThankYou = () => {
  const router = useRouter();
  const { translate } = useLanguageStore();

  return (
    <div id={scss.Thank}>
      <div className="container">
        <div className={scss.thank}>
          <div data-aos="fade-up" className={scss.hero_text}>
            <h1>
              {translate("УСПЕШНОЕ", "ТАКТУУЛУК", "SUCCESSFUL")} <br />
              {translate("БРОНИРОВАНИЕ", "БРОНИРОВАНИЕ", "BOOKING")}
            </h1>

            <div className={scss.buttons}>
              <h4>
                {translate(
                  "спосибо за бронирование",
                  "Рахмат, брондоо үчүн",
                  "Thank you for booking"
                )}
              </h4>
              <button onClick={() => router.push("/record/")}>
                {translate("Записаться еще", "Дагы катталуу", "Book again")}
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
