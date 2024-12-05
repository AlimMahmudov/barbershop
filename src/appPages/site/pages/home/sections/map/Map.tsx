import Image from "next/image";
import scss from "./Map.module.scss";
import logo from "@/shared/assets/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

const Map = () => {
  return (
    <div id={scss.Map}>
      <div className="container">
        <div className={scss.map}>
          <div className={scss.text}>
            <div className={scss.logo}>
              <Image src={logo} alt="" />
              <div className={scss.logo_text}>
                <h1>Bro Barber</h1>
                <p>#1 Барбер в Бишкеке</p>
              </div>
            </div>
            <button>Записаться</button>
          </div>
          <div className={scss.maps}>
            <iframe
              // src=""
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2923.8385432180917!2d74.68737077621344!3d42.8762518711497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2skg!4v1733313635658!5m2!1sru!2skg"
              loading="lazy"
            ></iframe>
            <div className={scss.map_text}>
              <h1>записывайтесь мы всегда вас ждем</h1>
              <p>
                <LuPhoneCall /> +996 708 000 000
              </p>
              <p>
                Кыргызстан, Бишкек, улица Лучшая 35 <br /> Ежедневно с 08:00 до
                20:00
              </p>
              <div className={scss.icons}>
                <h2>
                  <FaInstagram />
                </h2>
                <h2>
                  <SlSocialTwitter />
                </h2>
                <h2>
                  <FaFacebook />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
