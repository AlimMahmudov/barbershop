"use client";
import scss from "./Message.module.scss";
import { CiCalendarDate } from "react-icons/ci";
import { TbRazorElectric } from "react-icons/tb";
import { IoMan } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  email: string;
  number: number;
}

const Message = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email Addres:   <b>${data.email}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };
  return (
    <div id={scss.Message}>
      <div className="container">
        <div className={scss.message}>
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
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputs}>
              <p>Имя *</p>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
            </div>
            <div className={scss.inputs}>
              <p>Телефон *</p>
              <input
                type="number"
                {...register("number", { required: true })}
                placeholder="Mobile Number"
              />
            </div>

            <div className={scss.inputs}>
              <p>Email</p>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your email"
              />
            </div>

            <button className={scss.SuButton} type="submit">
              Записаться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
