import Image from "next/image";
import scss from "./Discount.module.scss";
import point from "@/shared/assets/images/point.svg";

const Discount = () => {
  return (
    <div id={scss.Discount}>
      <div className="container">
        <div className={scss.discount}>
          <div className={scss.text}>
            <h1>Только до конца ноября</h1>
            <h3>Приведи друга и получите скидку!</h3>
            <div className={scss.point}>
              <h2>-20%</h2>
              <p>
                Каждый кто приведет друга получит скидку в размере 20% на все
                виды услуг
              </p>
            </div>
            <button>Поделиться</button>
          </div>
          <Image src={point} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
