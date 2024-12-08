import scss from "../header/Header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLanguageStore } from "@/shared/stores/Language";

const Header = () => {
  const { translate, setLanguage } = useLanguageStore();

  const handleLanguage = (lang: "ru" | "kg" | "en") => {
    setLanguage(lang);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: translate("Стрижки", "Чач кыркуу", "Haircuts"),
      link: "/record/",
    },
    {
      name: translate("Награды", "Сыйлыктар", "Awards"),
      link: "/",
    },
    {
      name: translate("Отзывы", "Пикирлер", "Reviews"),
      link: "/",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <Image src={logo} alt="img" />
            </Link>
            <div className={scss.nav}>
              {links.map((item, index) => (
                <Link key={index} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {isMobile ? (
            <>
              <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu />
              </button>
              <BurgerMenu
                links={links}
                isOpen={isOpen}
                handleLanguage={handleLanguage} // Передаем handleLanguage
              />
            </>
          ) : (
            <>
              <div className={scss.buutons}>
                <select
                  onChange={(e) =>
                    handleLanguage(e.target.value as "ru" | "kg" | "en")
                  }
                >
                  <option value="ru">RU</option>
                  <option value="kg">KG</option>
                  <option value="en">EN</option>
                </select>
                <button>
                  <LuPhoneCall /> +996 708 000 000
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
