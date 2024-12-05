"use client";
import { useState } from "react";
import scss from "./Date.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

const data = [
  { number: [{ num: "1" }, { num: "2" }, { num: "3" }, { num: "4" }] },
  { names: [{ name: "alim" }, { name: "asim" }, { name: "abdy" }] },
  { prices: [{ price: "300" }, { price: "400" }, { price: "500" }] },
  { dates: [{ oclo: "10:30" }, { oclo: "11:00" }, { oclo: "11:30" }] },
];

interface IFormTelegram {
  prices: string[];
  name: string;
  number: string;
  dates: string;
  nameUser: string;
  teleUser: string;
  emailUser: string;
}
const Date = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const [selectedOptions, setSelectedOptions] = useState({
    number: "",
    name: "",
    prices: [],
    dates: "",
    nameUser: "",
    teleUser: "",
    emailUser: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Price(s): <b>${data.prices.join(", ")}</b>\n`;
    messageTG += `Name: <b>${data.name}</b>\n`;
    messageTG += `Number: <b>${data.number}</b>\n`;
    messageTG += `Date: <b>${data.dates}</b>\n`;
    messageTG += `User Name: <b>${data.nameUser}</b>\n`;
    messageTG += `User Phone: <b>${data.teleUser}</b>\n`;
    messageTG += `User Email: <b>${data.emailUser}</b>`;
    return messageTG;
  };

  const sendMessageToTelegram = async () => {
    const selectedData: IFormTelegram = {
      prices: selectedOptions.prices,
      name: selectedOptions.name,
      number: selectedOptions.number,
      dates: selectedOptions.dates,
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
      number: "",
      name: "",
      prices: [],
      dates: "",
      nameUser: "",
      teleUser: "",
      emailUser: "",
    });
    setCurrentStep(5); // Переход на section End
  };

  const handleOptionSelect = (category: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: category === "prices" ? [...prev.prices, value] : value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1); // Перейти к следующему шагу
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

  return (
    <>
      {/* Section Number */}
      <section id={scss.Number}>
        <div className="container">
          <div className={scss.number}>
            {currentStep === 0 && data[0]?.number && (
              <div className={scss.category}>
                <h2>Number</h2>
                <div className={scss.options}>
                  {data[0].number.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect("number", option.num)}
                      className={scss.button}
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
            {currentStep === 1 && data[1]?.names && (
              <div className={scss.category}>
                <h2>Names</h2>
                <div className={scss.options}>
                  {data[1].names.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect("name", option.name)}
                      className={scss.button}
                    >
                      {option.name}
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
            {currentStep === 2 && data[2]?.prices && (
              <div className={scss.category}>
                <h2>Prices</h2>
                <div className={scss.options}>
                  {data[2].prices.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect("prices", option.price)}
                      className={scss.button}
                    >
                      {option.price}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Dates */}
      <section id={scss.Date}>
        <div className="container">
          <div className={scss.date}>
            {currentStep === 3 && data[3]?.dates && (
              <div className={scss.category}>
                <h2>Dates</h2>
                <div className={scss.options}>
                  {data[3].dates.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect("dates", option.oclo)}
                      className={scss.button}
                    >
                      {option.oclo}
                    </button>
                  ))}
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
              <form onSubmit={handleSubmit(handleUserInfoSubmit)}>
                <h2>User Information</h2>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("nameUser", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  {...register("teleUser", { required: true })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("emailUser", { required: true })}
                />
                <button type="submit">Submit</button>
              </form>
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
                  <p>Number: {selectedOptions.number}</p>
                  <p>Name: {selectedOptions.name}</p>
                  <p>Prices: {selectedOptions.prices.join(", ")}</p>
                  <p>Dates: {selectedOptions.dates}</p>
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
            <button onClick={handleNextStep} className={scss.nextButton}>
              Next Step
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Date;
