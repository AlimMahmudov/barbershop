"use client";
import scss from "./Data.module.scss";

import { CiCalendarDate } from "react-icons/ci";
import { TbRazorElectric } from "react-icons/tb";
import { IoMan } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { useRouter } from "next/navigation";

const time = [
  {
    utro: [
      { oclo: "10:00" },
      { oclo: "10:30" },
      { oclo: "11:00" },
      { oclo: "11:30" },
    ],
  },
  {
    day: [
      { oclo: "12:00" },
      { oclo: "12:30" },
      { oclo: "13:00" },
      { oclo: "13:30" },
      { oclo: "14:00" },
      { oclo: "14:30" },
      { oclo: "15:00" },
      { oclo: "15:30" },
      { oclo: "16:00" },
      { oclo: "16:30" },
      { oclo: "17:00" },
      { oclo: "17:30" },
    ],
  },
  {
    vech: [
      { oclo: "18:00" },
      { oclo: "18:30" },
      { oclo: "19:00" },
      { oclo: "19:30" },
    ],
  },
];

const Data = () => {
  const router = useRouter();
  return (
    <div id={scss.Data}>
      <div className="container">
        <div className={scss.data}>
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
            {time[0].utro && (
              <div className={scss.box}>
                <h2>Утро</h2>
                <div className={scss.card}>
                  {time[0].utro.map((el, idx) => (
                    <button key={idx}>{el.oclo}</button>
                  ))}
                </div>
              </div>
            )}

            {time[1].day && (
              <div className={scss.box}>
                <h2>День</h2>
                <div className={scss.card2}>
                  {time[1].day.map((el, idx) => (
                    <button key={idx}>{el.oclo}</button>
                  ))}
                </div>
              </div>
            )}

            {time[2].vech && (
              <div className={scss.box}>
                <h2>Вечер</h2>
                <div className={scss.card}>
                  {time[2].vech.map((el, idx) => (
                    <button key={idx}>{el.oclo}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={scss.buttons}>
            <button onClick={() => router.push("/specialist/")}>Назад</button>
            <button onClick={() => router.push("/message/")}>Продолжить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
