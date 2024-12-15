"use client";
import Image from "next/image";
import scss from "./Discount.module.scss";
import point from "@/shared/assets/images/point.svg";
import { useLanguageStore } from "@/shared/stores/Language"; // Подключаем хранилище языков

const Discount = () => {
  const { translate } = useLanguageStore(); // Получаем функцию перевода

  return (
    <div data-aos="fade-up" id={scss.Discount}>
      <div className="container">
        <div className={scss.discount}>
          <div className={scss.text}>
            <h1>
              {translate(
                "Только до конца ноября",
                "Ноябрь айынын аягына чейин гана",
                "Only until the end of November"
              )}
            </h1>
            <h3>
              {translate(
                "Приведи друга и получите скидку!",
                "Досуңду чакырып, жеңилдик аласың!",
                "Bring a friend and get a discount!"
              )}
            </h3>
            <div className={scss.point}>
              <h2>-20%</h2>
              <p>
                {translate(
                  "Каждый кто приведет друга получит скидку в размере 20% на все виды услуг",
                  "Ар бир досун чакырган адам бардык кызматтарга 20% жеңилдик алат",
                  "Anyone who brings a friend gets a 20% discount on all services"
                )}
              </p>
            </div>
            <button>{translate("Поделиться", "Бөлүшүү", "Share")}</button>
          </div>
          <Image
            src={point}
            alt={translate("Скидка", "Жеңилдик", "Discount")}
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
