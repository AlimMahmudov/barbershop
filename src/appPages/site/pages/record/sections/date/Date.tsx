"use client";
import { useEffect, useState } from "react";
import scss from "./Date.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
// import ReactDatePicker from "react-datepicker";
// import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { data } from "@/shared/data/Data";

interface IFormTelegram {
  prices: string[];
  name: string;
  date: string;
  time: string;
  nameUser: string;
  teleUser: string;
  emailUser: string;
}

const DateComponent = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const [selectedOptions, setSelectedOptions] = useState({
    date: "",
    name: "",
    prices: [],
    time: "",
    nameUser: "",
    teleUser: "",
    emailUser: "",
  });
  const [isClient, setIsClient] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Устанавливаем, что код рендерится на клиенте
    setIsClient(true);
  }, []);

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Price(s): <b>${data.prices.join(", ")}</b>\n`;
    messageTG += `Name: <b>${data.name}</b>\n`;
    messageTG += `date: <b>${data.date}</b>\n`;
    messageTG += `time: <b>${data.time}</b>\n`;
    messageTG += `User Name: <b>${data.nameUser}</b>\n`;
    messageTG += `User Phone: <b>${data.teleUser}</b>\n`;
    messageTG += `User Email: <b>${data.emailUser}</b>`;
    return messageTG;
  };

  const sendMessageToTelegram = async () => {
    const selectedData: IFormTelegram = {
      prices: selectedOptions.prices,
      name: selectedOptions.name,
      date: selectedOptions.date,
      time: selectedOptions.time,
      nameUser: selectedOptions.nameUser,
      teleUser: selectedOptions.teleUser,
      emailUser: selectedOptions.emailUser,
    };

    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: messageModel(selectedData),
    });
    reset();
    setSelectedOptions({
      date: "",
      name: "",
      prices: [],
      time: "",
      nameUser: "",
      teleUser: "",
      emailUser: "",
    });
    setCurrentStep(5);
  };

  const handleOptionSelect = (category: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: category === "prices" ? [...prev.prices, value] : value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 0 && selectedOptions.date) {
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
    handleNextStep(); // Переход на следующий шаг после ввода данных
  };

  //   const handleDateChange = (date: any) => {
  //     if (date && Array.isArray(date)) {
  //       setSelectedOptions((prev) => ({
  //         ...prev,
  //         date: date[0].toISOString().split("T")[0],
  //       }));
  //     } else if (date) {
  //       setSelectedOptions((prev) => ({
  //         ...prev,
  //         date: date.toISOString().split("T")[0],
  //       }));
  //     }
  //   };
  return (
    <>
      {/* Section Date */}
      <section id={scss.Date}>
        <div className="container">
          <div className={scss.date}>
            {currentStep === 0 && isClient && (
              <div className={scss.category}>
                <h1>Укажите дату</h1>
                <div className={scss.buttons}>
                  <button style={{ backgroundColor: "#DD9700", color: "#000" }}>
                    1
                  </button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                </div>
                {/* <Calendar
                    onChange={handleDateChange}
                    value={
                      selectedOptions.date
                        ? new Date(selectedOptions.date)
                        : new Date()
                    }
                    className={scss.calendar}
                  /> */}
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
                <h1>выберите специалиста</h1>
                <div className={scss.buttons}>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button style={{ backgroundColor: "#DD9700", color: "#000" }}>
                    1
                  </button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                </div>

                <div className={scss.options}>
                  {data[0].names.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleOptionSelect("name", option.name)}
                      className={scss.box}
                    >
                      <Image src={option.img} alt="" />
                      <h2>{option.name}</h2>
                      <h3>{option.work}</h3>
                    </div>
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
                <h1>выберите услуги</h1>
                <div className={scss.buttons}>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button style={{ backgroundColor: "#DD9700", color: "#000" }}>
                    1
                  </button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                </div>
                <div className={scss.options}>
                  {data[1].prices.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleOptionSelect("prices", option.price)}
                      className={scss.box}
                    >
                      <Image src={option.img} alt="" />
                      <h2>{option.name}</h2>
                      <h3>{option.price}</h3>
                    </div>
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
                <h1>укажите время</h1>
                <div className={scss.buttons}>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button style={{ backgroundColor: "#DD9700", color: "#000" }}>
                    1
                  </button>
                  <div className={scss.line}></div>
                  <button>1</button>
                </div>

                <div className={scss.block}>
                  {data[2].time[0].utro && (
                    <div className={scss.options}>
                      <h2>Утро</h2>
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
                      <h2>День</h2>
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
                      <h2>Вечер</h2>
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
                <h1>введите ваши данные</h1>
                <div className={scss.buttons}>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button>1</button>
                  <div className={scss.line}></div>
                  <button style={{ backgroundColor: "#DD9700", color: "#000" }}>
                    1
                  </button>
                </div>
                <form
                  className={scss.form}
                  onSubmit={handleSubmit(handleUserInfoSubmit)}
                >
                  <div className={scss.input_box}>
                    <div className={scss.inputs}>
                      <p>Имя *</p>
                      <input
                        type="text"
                        placeholder="Введите своё имя"
                        {...register("nameUser", { required: true })}
                      />
                    </div>
                    <div className={scss.inputs}>
                      <p>Телефон *</p>
                      <input
                        type="text"
                        placeholder="Введите свой номер"
                        {...register("teleUser", { required: true })}
                      />
                    </div>
                    <div className={scss.inputs}>
                      <p>Email</p>
                      <input
                        type="email"
                        placeholder="Введите свою почту"
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
                        Назад
                      </button>
                    )}
                    <button type="submit" className={scss.nextButton}>
                      Next Step
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
                <h2>Итог:</h2>
                <div>
                  <p>date: {selectedOptions.date}</p>
                  <p>Name: {selectedOptions.name}</p>
                  <p>Prices: {selectedOptions.prices.join(", ")}</p>
                  <p>time: {selectedOptions.time}</p>
                  <p>UserName: {selectedOptions.nameUser}</p>
                  <p>UserTel: {selectedOptions.teleUser}</p>
                  <p>UserEmail: {selectedOptions.emailUser}</p>
                </div>
                <button onClick={sendMessageToTelegram}>
                  Отправить в Telegram
                </button>
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
                  Назад
                </button>
              )}
              {currentStep < 4 && (
                <button onClick={handleNextStep} className={scss.nextButton}>
                  Next Step
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
