import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";

interface LinksType {
  name: string;
  link: string;
}

interface BurgerMenuProps {
  links: LinksType[];
  isOpen: boolean;
  handleLanguage: (lang: "ru" | "kg" | "en") => void; // Добавляем handleLanguage
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen, handleLanguage }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.nav}>
          {links.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
          <div className={scss.language}>
            <select
              onChange={(e) =>
                handleLanguage(e.target.value as "ru" | "kg" | "en")
              }
            >
              <option value="ru">RU</option>
              <option value="kg">KG</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
