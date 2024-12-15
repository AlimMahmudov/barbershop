"use client";
import scss from "./Sertifikat.module.scss";
import { LuPhoneCall } from "react-icons/lu";
import sertifikats from "@/shared/assets/images/sertifikat.svg";
import Image from "next/image";
import { useLanguageStore } from "@/shared/stores/Language"; // Подключение хранилища языков

const Sertifikat = () => {
  const { translate } = useLanguageStore(); // Получаем функцию перевода из хранилища

  return (
    <div id={scss.Sertifikat}>
      <div className="container">
        <div className={scss.sertifikat}>
          <div className={scss.box}>
            <h1>
              {translate(
                "Подарочный сертификат",
                "Белеке сертификат",
                "Gift Certificate"
              )}
            </h1>
            <h2>
              {translate(
                "Не знаешь, что подарить близкому человеку? Подари ему стиль!",
                "Жакын адамыңа эмне белек береримди билбейсиңби? Ага стиль тартуула!",
                "Don’t know what to gift your loved one? Give them style!"
              )}
            </h2>
            <p>
              {translate(
                "Сертификат в наш барбершоп – это отличный выбор для любого мужчины.",
                "Биздин барбершоптун сертификаты – бул ар кандай эркек үчүн мыкты тандоо.",
                "A gift certificate to our barbershop is a great choice for any man."
              )}
            </p>
            <p>
              {translate(
                "Пусть он расслабится, насладится атмосферой и получит новый стильный образ.",
                "Ал эс алсын, атмосферадан ырахат алсын жана жаңы стилдүү имиджди алсын.",
                "Let him relax, enjoy the atmosphere, and get a new stylish look."
              )}
            </p>
            <div className={scss.buttons}>
              <h3>
                {translate(
                  "Наш сертификат – это не просто подарок, это инвестиция в имидж",
                  "Биздин сертификат – бул жөн гана белек эмес, бул имиджге болгон инвестиция.",
                  "Our certificate is not just a gift, it’s an investment in image"
                )}
              </h3>
              <button>
                <LuPhoneCall /> +996 708 000 000
              </button>
            </div>
          </div>
          <Image
            data-aos="zoom-in"
            src={sertifikats}
            alt={translate(
              "Изображение подарочного сертификата",
              "Подардык сертификаттын сүрөтү",
              "Image of gift certificate"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
