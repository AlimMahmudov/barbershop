"use client";
import Image from "next/image";
import scss from "./Hero.module.scss";
import hero_logo from "@/shared/assets/images/hero_logo.svg";
import barber from "@/shared/assets/images/hero_barber.svg";
import barber2 from "@/shared/assets/images/hero_barber2.svg";
import barber3 from "@/shared/assets/images/hero_barber3.svg";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/shared/stores/Language";

const Hero = () => {
  const router = useRouter();
  const { translate } = useLanguageStore();

  return (
    <>
      <section id={scss.Hero}>
        <div className="container">
          <div className={scss.hero}>
            <div data-aos="fade-up" className={scss.hero_text}>
              <h1>
                {translate("ИДЕАЛЬНАЯ", "ИДЕАЛДУУ", "PERFECT")} <br />{" "}
                {translate("СТРИЖКА", "ЧАЧ КЫРКУУ", "HAIRCUT")}
              </h1>
              <h2>
                {translate("в один клик!", "бир басым менен!", "in one click!")}
              </h2>
              <p>
                {translate(
                  "Запишись онлайн и наслаждайся комфортом и стилем! Наши барберы создадут образ, который покорит всех!",
                  "Онлайн жазылыңыз жана жайлуулук менен стилден ырахат алыңыз! Биздин барберлер сизди таң калтыра турган образ түзүшөт!",
                  "Book online and enjoy comfort and style! Our barbers will create a look that impresses everyone!"
                )}
              </p>
              <div className={scss.buttons}>
                <button onClick={() => router.push("/specialist/")}>
                  {translate(
                    "Записаться on-line",
                    "Онлайн жазылуу",
                    "Book on-line"
                  )}
                </button>
                <h4>
                  {translate(
                    "Забудь о долгом ожидании!",
                    "Көпкө күтүүнү унут!",
                    "Forget about long waits!"
                  )}
                </h4>
              </div>
            </div>
            <div data-aos="fade-up" className={scss.hero_img}>
              <Image src={hero_logo} alt="" />
              <h4>
                {translate(
                  "Забудь о долгом ожидании!",
                  "Көпкө күтүүнү унут!",
                  "Forget about long waits!"
                )}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" id={scss.Hero2}>
        <div className="container">
          <div className={scss.block}>
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>98%</h1>
                <p>
                  {translate(
                    "Клиентов довольны результатом работы",
                    "Кардарлар жумуштун жыйынтыгына ыраазы",
                    "Customers are satisfied with the results"
                  )}
                </p>
              </div>
              <Image src={barber} alt="" />
            </div>
            <hr />
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>14+</h1>
                <p>
                  {translate(
                    "Лет на рынке мужских стрижек",
                    "Эркектердин чач кыркуу рыногунда 14 жылдан ашык",
                    "Years in the men's haircut market"
                  )}
                </p>
              </div>
              <Image src={barber2} alt="" />
            </div>
            <hr />
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>35+</h1>
                <p>
                  {translate(
                    "Барбершопов в Кыргызстане",
                    "Кыргызстанда 35тен ашык барбершоп",
                    "Barbershops in Kyrgyzstan"
                  )}
                </p>
              </div>
              <Image src={barber3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
