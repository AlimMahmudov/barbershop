"use client";
import Image from "next/image";
import scss from "./Hero.module.scss";
import hero_logo from "@/shared/assets/images/hero_logo.svg";
import barber from "@/shared/assets/images/hero_barber.svg";
import barber2 from "@/shared/assets/images/hero_barber2.svg";
import barber3 from "@/shared/assets/images/hero_barber3.svg";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <section id={scss.Hero}>
        <div className="container">
          <div className={scss.hero}>
            <div className={scss.hero_text}>
              <h1>
                ИДИАЛЬНАЯ <br /> СТРИЖКА
              </h1>
              <h2>в один клик!</h2>
              <p>
                Запишись онлайн и наслаждайся комфортом и стилем! Наши барберы
                создадут образ, который покорит всех!
              </p>
              <div className={scss.buttons}>
                <button onClick={() => router.push("/record/")}>
                  Записаться on-line
                </button>
                <h4>Забудь о долгом ожидании!</h4>
              </div>
            </div>
            <div className={scss.hero_img}>
              <Image src={hero_logo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id={scss.Hero2}>
        <div className="container">
          <div className={scss.block}>
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>98%</h1>
                <p>Клиентов довольны результатом работы</p>
              </div>
              <Image src={barber} alt="" />
            </div>
            <hr />
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>14+</h1>
                <p>Лет на рынке мужских стрижек</p>
              </div>
              <Image src={barber2} alt="" />
            </div>
            <hr />
            <div className={scss.box}>
              <div className={scss.text}>
                <h1>35+</h1>
                <p>Барбершопов в Кыргызстане</p>
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
