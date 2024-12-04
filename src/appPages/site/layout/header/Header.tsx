import scss from "./Header.module.scss";
import logo from "@/shared/assets/images/logo.svg";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.block}>
            <Image src={logo} alt="" />
            <div className={scss.box}>
              <div className={scss.teg}>
                <a href="">Стрижки</a>
                <a href="">награды</a>
                <a href="">Отзывы</a>
              </div>
              <button>
                <LuPhoneCall /> +996 708 000 000
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
