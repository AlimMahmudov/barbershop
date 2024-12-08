// import scss from "./Header.module.scss";
// import logo from "@/shared/assets/images/logo.svg";
// import Image from "next/image";
// import { LuPhoneCall } from "react-icons/lu";

// const Header = () => {
//   return (
//     <header id={scss.Header}>
//       <div className="container">
//         <div className={scss.header}>
//           <div className={scss.block}>
//             <Image src={logo} alt="" />
//             <div className={scss.box}>
//               <div className={scss.teg}>
//                 <a href="">Стрижки</a>
//                 <a href="">награды</a>
//                 <a href="">Отзывы</a>
//               </div>
//               <button>
//                 <LuPhoneCall /> +996 708 000 000
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

/////////////////
"use client";
import scss from "../header/Header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useLanguageStore } from "@/shared/stores/Language";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const { translate } = useLanguageStore();

  const links = [
    {
      // name: translate("Стрижки", "Стрижки", "Стрижки"),
      name: "Стрижки",
      link: "/record/",
    },
    {
      name: "награды",
      link: "/",
    },

    {
      name: "Отзывы",
      link: "/",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
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
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.buutons}>
                <select>
                  <option value="">RU</option>
                  <option value="">KG</option>
                  <option value="">EN</option>
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
