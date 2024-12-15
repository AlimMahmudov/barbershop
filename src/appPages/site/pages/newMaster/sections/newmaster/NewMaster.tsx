"use client";
import scss from "./NewMaster.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useLanguageStore } from "@/shared/stores/Language";

interface IFormTelegram {
  name: string;
  number: number;
  message: string;
}

const NewMaster = () => {
  const { translate } = useLanguageStore();
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${"7350084863:AAGNHWJpQ7qif2WAAinzTBqVX3nwE-0sgbk"}/sendMessage`,
      {
        chat_id: -1002178370559,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };

  return (
    <div id={scss.New}>
      <div className="container">
        <div className={scss.new}>
          <h1>
            {translate(
              "ОТПРАВЬТЕ НАМ ДАННЫЕ",
              "МАЛЫМ ДАННЫЛАРДЫ ЖИБЕРИҢИЗ",
              "SEND US YOUR DATA"
            )}
          </h1>
          <div className={scss.telegram}>
            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.inputs}>
                <p>{translate("Имя *", "Аты *", "Name *")}</p>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder={translate(
                    "Введите своё имя",
                    "Атыңызды жазыңыз",
                    "Enter your name"
                  )}
                />
              </div>
              <div className={scss.inputs}>
                <p>{translate("Телефон *", "Телефон *", "Phone *")}</p>
                <input
                  {...register("number", { required: true })}
                  type="text"
                  placeholder={translate(
                    "Введите свой номер",
                    "Телефон нөмүрүңүздү жазыңыз",
                    "Enter your number"
                  )}
                />
              </div>
              <div className={scss.inputs}>
                <p>{translate("Pезюме", "Резюме", "Resume")}</p>
                <input
                  {...register("message", { required: true })}
                  type="text"
                  placeholder={translate(
                    "Оставь резюме",
                    "Резюме жазыңыз",
                    "Leave a resume"
                  )}
                />
              </div>
              <button type="submit">
                {translate(
                  "Отправить данные",
                  "Далилдерди жиберүү",
                  "Submit Data"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMaster;
