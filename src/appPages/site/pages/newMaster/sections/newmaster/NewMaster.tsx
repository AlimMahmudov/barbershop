"use client";
import scss from "./NewMaster.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  number: number;
  message: string;
}

const NewMaster = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  //   const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  //   const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
  //   NEXT_PUBLIC_TG_TOKEN=
  // NEXT_PUBLIC_TG_CHAT_ID=-1002178370559

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
          <h1>ОТПРАВЬТЕ НАМ ДАННЫЕ</h1>
          <div className={scss.telegram}>
            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.inputs}>
                <p>Имя *</p>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Введите своё имя"
                />
              </div>
              <div className={scss.inputs}>
                <p>Телефон *</p>
                <input
                  {...register("number", { required: true })}
                  type="text"
                  placeholder="Введите свой номер"
                />
              </div>
              <div className={scss.inputs}>
                <p>Pезюме</p>
                <input
                  {...register("message", { required: true })}
                  type="text"
                  placeholder="Оставь резюме"
                />
              </div>
              <button type="submit">Отправить данные</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMaster;
