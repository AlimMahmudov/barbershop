"use client";
import { useEffect, useState } from "react";
import scss from "./Date.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { data } from "@/shared/data/Data";
import { useRouter } from "next/navigation";

import { CiCalendarDate } from "react-icons/ci";
import { TbRazorElectric } from "react-icons/tb";
import { IoMan } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { useLanguageStore } from "@/shared/stores/Language";

interface IFormTelegram {
  num: string;
  photo: string;
  img: string;
  title: string;
  name: string;
  price: string;
  time: string;
  nameUser: string;
  teleUser: string;
  emailUser: string;
  work: string;
}

const DateComponent = () => {
  const { translate } = useLanguageStore();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const [selectedOptions, setSelectedOptions] = useState({
    num: "",
    photo: "",
    img: "",
    title: "",
    name: "",
    price: "",
    time: "",
    nameUser: "",
    teleUser: "",
    emailUser: "",
    work: "",
  });
  const [isClient, setIsClient] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Price(s): <b>${data.price}</b>\n`;
    messageTG += `Name: <b>${data.name}</b>\n`;
    messageTG += `date: <b>${data.num}</b>\n`;
    messageTG += `time: <b>${data.time}</b>\n`;
    messageTG += `time: <b>${data.title}</b>\n`;
    messageTG += `time: <b>${data.time}</b>\n`;
    messageTG += `User Name: <b>${data.nameUser}</b>\n`;
    messageTG += `User Phone: <b>${data.teleUser}</b>\n`;
    messageTG += `User Email: <b>${data.emailUser}</b>`;
    return messageTG;
  };

  const sendMessageToTelegram = async () => {
    const selectedData: IFormTelegram = {
      price: selectedOptions.price,
      name: selectedOptions.name,
      num: selectedOptions.num,
      time: selectedOptions.time,
      title: selectedOptions.title,
      photo: selectedOptions.photo,
      img: selectedOptions.img,
      nameUser: selectedOptions.nameUser,
      teleUser: selectedOptions.teleUser,
      emailUser: selectedOptions.emailUser,
      work: selectedOptions.work,
    };

    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(selectedData),
    });
    reset();
    setSelectedOptions({
      num: "",
      photo: "",
      img: "",
      title: "",
      name: "",
      price: "",
      time: "",
      nameUser: "",
      teleUser: "",
      emailUser: "",
      work: "",
    });
    setCurrentStep(5);
  };
  const handleOptionSelect = (
    category: keyof IFormTelegram,
    option: Partial<IFormTelegram> | string
  ) => {
    console.log("Selected category:", category);
    console.log("Selected option:", option);

    if (typeof option === "string") {
      setSelectedOptions((prev) => ({
        ...prev,
        [category]: option,
      }));
    } else {
      setSelectedOptions((prev) => ({
        ...prev,
        [category]: option[category] || "",
        img: option.img || prev.img || "",
        title: option.title || prev.title || "",
        photo: option.photo || prev.photo || "",
        work: option.work || prev.work || "",
      }));
    }
  };

  const handleNextStep = () => {
    if (currentStep === 0 && selectedOptions.num) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleUserInfoSubmit = (data: IFormTelegram) => {
    setSelectedOptions((prev) => ({
      ...prev,
      nameUser: data.nameUser,
      teleUser: data.teleUser,
      emailUser: data.emailUser,
    }));
    handleNextStep();
  };

  return (
    <>
      {/* Section Date */}
      <section id={scss.Date}>
        <div className="container">
          <div className={scss.date}>
            {currentStep === 0 && isClient && (
              <div className={scss.category}>
                <h1>
                  {translate(
                    "Укажите дату",
                    "Күндү көрсөтүңүз",
                    "Specify the date"
                  )}
                </h1>
                <div className={scss.buttons}>
                  <button
                    style={{
                      backgroundColor: "#DD9700",
                      color: "#000",
                      fontSize: "24px",
                    }}
                  >
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
                <h3>{translate("Декабрь", "Декабрь", "December")}</h3>

                <div className={scss.options}>
                  {data[3]?.dates?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect("num", option.num)}
                    >
                      {option.num}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Name */}
      <section id={scss.Name}>
        <div className="container">
          <div className={scss.name}>
            {currentStep === 1 && data[0]?.names && (
              <div className={scss.category}>
                <h1>
                  {translate(
                    "выберите специалиста",
                    "Адисти тандаңыз",
                    "Choose a specialist"
                  )}
                </h1>
                <div className={scss.buttons}>
                  <button>
                    <CiCalendarDate />
                  </button>
                  <div className={scss.line}></div>
                  <button
                    style={{
                      backgroundColor: "#DD9700",
                      color: "#000",
                      fontSize: "24px",
                    }}
                  >
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

                <div className={scss.options}>
                  {data[0].names.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        handleOptionSelect("name", {
                          name: option.name,
                          photo: option.photo, // Передаем photo
                          work: option.work, // Передаем work
                        })
                      }
                      className={scss.box}
                    >
                      <Image src={option.photo} alt={option.name} />
                      <h2>{option.name}</h2>
                      <h3>{option.work}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Prices */}
      <section id={scss.Price}>
        <div className="container">
          <div className={scss.price}>
            {currentStep === 2 && data[1]?.prices && (
              <div className={scss.category}>
                <h1>
                  {translate(
                    "выберите услуги",
                    "Кызматтарды тандаңыз",
                    "Choose services"
                  )}
                </h1>
                <div className={scss.buttons}>
                  <button>
                    <CiCalendarDate />
                  </button>
                  <div className={scss.line}></div>
                  <button>
                    <IoMan />
                  </button>
                  <div className={scss.line}></div>
                  <button
                    style={{
                      backgroundColor: "#DD9700",
                      color: "#000",
                      fontSize: "24px",
                    }}
                  >
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
                <div className={scss.options}>
                  {data[1].prices.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        handleOptionSelect("price", {
                          price: option.price,
                          img: option.img,
                          title: option.title,
                        })
                      }
                      className={scss.box}
                    >
                      <Image src={option.img} alt="" />
                      <h2>{option.title}</h2>
                      <h3>{option.price}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Dates */}
      <section id={scss.Time}>
        <div className="container">
          <div className={scss.time}>
            {currentStep === 3 && data[2]?.time && (
              <div className={scss.category}>
                <h1>
                  {translate(
                    "укажите время",
                    "Убакытты көрсөтүңүз",
                    "Specify the time"
                  )}
                </h1>
                <div className={scss.buttons}>
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
                  <button
                    style={{
                      backgroundColor: "#DD9700",
                      color: "#000",
                      fontSize: "24px",
                    }}
                  >
                    <GoClock />
                  </button>
                  <div className={scss.line}></div>
                  <button>
                    <FaCheck />
                  </button>
                </div>

                <div className={scss.block}>
                  {data[2].time[0].utro && (
                    <div className={scss.options}>
                      <h2>{translate("Утро", "Таң", "Morning")}</h2>
                      {data[2].time[0].utro.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            handleOptionSelect("time", option.oclo)
                          }
                          className={scss.button}
                        >
                          {option.oclo}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Afternoon times */}
                  {data[2].time[1].day && (
                    <div className={scss.options}>
                      <h2>{translate("День", "Күн", "Day")}</h2>
                      <div className={scss.options2}>
                        {data[2].time[1].day.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleOptionSelect("time", option.oclo)
                            }
                            className={scss.button}
                          >
                            {option.oclo}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Evening times */}
                  {data[2].time[2].vech && (
                    <div className={scss.options}>
                      <h2>{translate("Вечер", "Кеч", "Evening")}</h2>
                      {data[2].time[2].vech.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            handleOptionSelect("time", option.oclo)
                          }
                          className={scss.button}
                        >
                          {option.oclo}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section User Information */}
      <section id={scss.User}>
        <div className="container">
          <div className={scss.user}>
            {currentStep === 4 && (
              <div className={scss.category}>
                <h1>
                  {translate(
                    "введите ваши данные",
                    "Маалыматтарыңызды киргизиңиз",
                    "Enter your data"
                  )}
                </h1>
                <div className={scss.buttons}>
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
                  <button
                    style={{
                      backgroundColor: "#DD9700",
                      color: "#000",
                      fontSize: "24px",
                    }}
                  >
                    <FaCheck />
                  </button>
                </div>
                <form
                  className={scss.form}
                  onSubmit={handleSubmit(handleUserInfoSubmit)}
                >
                  <div className={scss.input_box}>
                    <div className={scss.inputs}>
                      <p>{translate("Имя *", "Аты *", "Name *")}</p>
                      <input
                        type="text"
                        placeholder={translate(
                          "Введите своё имя",
                          "Атыңызды жазыңыз",
                          "Enter your name"
                        )}
                        {...register("nameUser", { required: true })}
                      />
                    </div>
                    <div className={scss.inputs}>
                      <p>{translate("Телефон *", "Телефон *", "Phone *")}</p>
                      <input
                        type="text"
                        placeholder={translate(
                          "Введите свой номер",
                          "Телефон нөмүрүңүздү жазыңыз",
                          "Enter your number"
                        )}
                        {...register("teleUser", { required: true })}
                      />
                    </div>
                    <div className={scss.inputs}>
                      <p>{translate("Email", "Электрондук почта", "Email")}</p>
                      <input
                        type="email"
                        placeholder={translate(
                          "Введите свою почту",
                          "Электрондук почтаңызды жазыңыз",
                          "Enter your email"
                        )}
                        {...register("emailUser", { required: true })}
                      />
                    </div>
                  </div>
                  <div className={scss.navigationButtons}>
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className={scss.prevButton}
                      >
                        {translate("Назад", "Артка", "Back")}
                      </button>
                    )}
                    <button type="submit" className={scss.nextButton}>
                      {translate("Next Step", "Кийинки кадам", "Next Step")}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section End (Summary) */}
      <section id={scss.End}>
        <div className="container">
          <div className={scss.end}>
            {currentStep === 5 && (
              <div className={scss.results}>
                <h1>
                  {translate(
                    "вы записаны!",
                    "Сиз катталдыңыз!",
                    "You are registered!"
                  )}
                </h1>
                <div className={scss.block}>
                  <div className={scss.box}>
                    <h2>{translate("Барбер:", "Барбер:", "Barber:")}</h2>
                    <div className={scss.box_text}>
                      <Image
                        src={selectedOptions.photo}
                        alt=""
                        width={50}
                        height={50}
                      />
                      <div className={scss.box_h1}>
                        <p>{selectedOptions.work}</p>
                        <p>{selectedOptions.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className={scss.box}>
                    <h2>{translate("Дата:", "Дата:", "Date:")}</h2>
                    <div className={scss.box_text}>
                      <div className={scss.box_h1}>
                        <p>{selectedOptions.num}/12/2024</p>
                      </div>
                    </div>
                  </div>

                  <div className={scss.box}>
                    <h2>{translate("Время:", "Убакыт:", "Time:")}</h2>
                    <div className={scss.box_text}>
                      <div className={scss.box_h1}>
                        <p>{selectedOptions.time} часов</p>
                      </div>
                    </div>
                  </div>

                  <div className={scss.box}>
                    <h2>{translate("Услуга:", "Кызмат:", "Service:")}</h2>
                    <div className={scss.box_text}>
                      <Image
                        src={selectedOptions.img}
                        alt=""
                        width={50}
                        height={50}
                      />
                      <div className={scss.box_h1}>
                        <p>{selectedOptions.title}</p>
                        <p>{selectedOptions.price} сом</p>
                      </div>
                    </div>
                  </div>
                  <div className={scss.box}>
                    <h2>
                      {translate(
                        "Ваши данные",
                        "Сиздин маалыматтарыңыз",
                        "Your data"
                      )}
                    </h2>
                    <div className={scss.box_text}>
                      <div className={scss.box_h1}>
                        <p>{selectedOptions.nameUser}</p>
                        <p>{selectedOptions.teleUser}</p>
                        {/* <p>{selectedOptions.emailUser}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={scss.buttons}>
                  <button onClick={() => router.push("/")}>
                    {translate(
                      "Отменить запись",
                      "Каттоодон баш тартуу",
                      "Cancel registration"
                    )}
                  </button>
                  <button
                    onClick={async () => {
                      await router.push("/thankYou");
                      sendMessageToTelegram();
                    }}
                  >
                    {translate(
                      "Отправить в Telegram",
                      "Telegram'ге жиберүү",
                      "Send to Telegram"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section for Next Step */}
      {currentStep < 4 && (
        <section id={scss.NextStep}>
          <div className="container">
            <div className={scss.next}>
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={scss.prevButton}
                >
                  {translate("Назад", "Артка", "Back")}
                </button>
              )}
              {currentStep < 4 && (
                <button onClick={handleNextStep} className={scss.nextButton}>
                  {translate("Следующий шаг", "Кийинки кадам", "Next Step")}
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DateComponent;
