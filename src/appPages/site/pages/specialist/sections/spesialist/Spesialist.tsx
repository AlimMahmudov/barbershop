import scss from "./Spesialist.module.scss";
import man from "@/shared/assets/images/man.svg";
import man2 from "@/shared/assets/images/man2.svg";
import man3 from "@/shared/assets/images/man3.svg";
import man4 from "@/shared/assets/images/man4.svg";
import man5 from "@/shared/assets/images/man5.svg";
import Image from "next/image";

import { CiCalendarDate } from "react-icons/ci";
import { TbRazorElectric } from "react-icons/tb";
import { IoMan } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const names = [
  { photo: man, name: "Макс Корж", work: "Топ-барбер" },
  { photo: man2, name: "Али тулиев", work: "барбер" },
  { photo: man3, name: "данияр калиев", work: "Бренд-барбер" },
  { photo: man4, name: "Артем Белов", work: "барбер" },
  { photo: man5, name: "Нурлан Pаимов", work: "барбер" },
];

const Spesialist = () => {
  return (
    <div id={scss.Spesialist}>
      <div className="container">
        <div className={scss.spesialist}>
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
            {names.map((el, index) => (
              <button key={index} className={scss.card}>
                <Image src={el.photo} alt="" />
                <h1>{el.name}</h1>
                <p>{el.work}</p>
              </button>
            ))}
          </div>
          <div className={scss.buttons}>
            <button>Назад</button>
            <button>Продолжить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spesialist;
