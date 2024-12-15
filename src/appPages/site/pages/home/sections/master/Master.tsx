"use client";
import { useRef } from "react";
import scss from "./Master.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import barber from "@/shared/assets/images/barber.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/shared/stores/Language";

const Master = () => {
  const { translate } = useLanguageStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const router = useRouter();

  const data = [
    {
      id: 1,
      name: translate("Макс Корж", "Макс Корж", "Max Korzh"),
      barber: translate("Топ-барбер", "Топ-барбер", "Top barber"),
      img: barber,
    },
    {
      id: 2,
      name: translate("Макс Корж", "Макс Корж", "Max Korzh"),
      barber: translate("Топ-барбер", "Топ-барбер", "Top barber"),
      img: barber,
    },
    {
      id: 3,
      name: translate("Макс Корж", "Макс Корж", "Max Korzh"),
      barber: translate("Топ-барбер", "Топ-барбер", "Top barber"),
      img: barber,
    },
    {
      id: 4,
      name: translate("Макс Корж", "Макс Корж", "Max Korzh"),
      barber: translate("Топ-барбер", "Топ-барбер", "Top barber"),
      img: barber,
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <h1>
            {translate(
              "Команда профессионалов",
              "Кесипкөй команда",
              "Team of professionals"
            )}
          </h1>
          <h2>
            {translate(
              "Наша команда – это сплоченный коллектив ",
              "Биздин команда бул ынтымактуу жамаат ",
              "Our team is a close-knit group of "
            )}
            <span>{translate("опытных", "тажрыйбалуу", "experienced")}</span>{" "}
            {translate(
              "барберов, каждый из которых – настоящий мастер своего дела.",
              "барберлер, ар бири өз ишинин чыныгы чебери.",
              "barbers, each of whom is a true master of their craft."
            )}
          </h2>
          <div className={scss.block}>
            <div
              data-aos="fade-up"
              className={scss.review_scroll}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {data.map((el) => (
                <div key={el.id} className={scss.box}>
                  <div className={scss.box_text}>
                    <div className={scss.box_h1}>
                      <h1>{el.name}</h1>
                      <p>{el.barber}</p>
                    </div>
                    <h2>
                      <FaInstagram />
                    </h2>
                  </div>
                  <Image data-aos="fade-up" src={el.img} alt="" />
                </div>
              ))}
            </div>
            <div
              onClick={() => router.push("/newMaster")}
              className={scss.want}
            >
              <div className={scss.want_box}>
                <h1>
                  {translate(
                    "Хочешь к нам в команду?",
                    "Биздин командага кошулгуң келеби?",
                    "Want to join our team?"
                  )}
                </h1>
                <p>
                  {translate(
                    "Присылай резюме",
                    "Резюмеңизди жибериңиз",
                    "Send your resume"
                  )}
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
