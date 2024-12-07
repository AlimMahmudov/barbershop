import scss from "./Sertifikat.module.scss";
import { LuPhoneCall } from "react-icons/lu";
import sertifikats from "@/shared/assets/images/sertifikat.svg";
import Image from "next/image";

const Sertifikat = () => {
  return (
    <div id={scss.Sertifikat}>
      <div className="container">
        <div className={scss.sertifikat}>
          <div className={scss.box}>
            <h1>подарочный сертификат</h1>
            <h2>
              Не знаешь, что подарить близкому человеку? Подари ему стиль!{" "}
            </h2>
            <p>
              Сертификат в наш барбершоп – это отличный выбор для любого
              мужчины.
            </p>
            <p>
              Пусть он расслабится, насладится атмосферой и получит новый
              стильный образ.
            </p>
            <div className={scss.buttons}>
              <h3>
                Наш сертификат – это не просто подарок, это инвестиция в имидж
              </h3>
              <button>
                <LuPhoneCall /> +996 708 000 000
              </button>
            </div>
          </div>
          <Image data-aos="zoom-in" src={sertifikats} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
