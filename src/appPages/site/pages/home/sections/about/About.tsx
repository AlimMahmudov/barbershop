import scss from "./About.module.scss";
import img from "@/shared/assets/images/About_img.svg";
import img2 from "@/shared/assets/images/About_img2.svg";
import img3 from "@/shared/assets/images/About_img3.svg";
import img4 from "@/shared/assets/images/About_img4.svg";
import Image from "next/image";
import { useLanguageStore } from "@/shared/stores/Language";

const About = () => {
  const { translate } = useLanguageStore();

  const data = [
    {
      image: img,
      text: translate(
        "Мастера с золотыми руками",
        "Алтын колдуу чеберлер",
        "Masters with golden hands"
      ),
      discription: translate(
        "Мы следим за последними трендами и постоянно повышаем свою квалификацию.",
        "Биз акыркы тенденцияларды байкап, дайыма квалификациябызды жогорулатып турабыз.",
        "We keep up with the latest trends and constantly improve our skills."
      ),
    },
    {
      image: img2,
      text: translate(
        "Широкий спектр услуг",
        "Кызматтардын кеңири спектри",
        "Wide range of services"
      ),
      discription: translate(
        "У нас вы можете не только подстричься, но и оформить бороду, уложить волосы.",
        "Бизде сиз чач кырктырып эле тим болбостон, сакал жасалгалоо жана чачты тариздөө кызматтарын да алсаңыз болот.",
        "Here you can not only get a haircut but also style your beard and hair."
      ),
    },
    {
      image: img3,
      text: translate(
        "Атмосфера релакса",
        "Жайлуулук атмосферасы",
        "Atmosphere of relaxation"
      ),
      discription: translate(
        "Это место, где вы можете отдохнуть от суеты и насладиться процессом преображения.",
        "Бул жер сиз ызы-чуудан эс алып, өзгөрүү процессинен ырахат ала турган жер.",
        "This is a place where you can escape the hustle and enjoy the transformation process."
      ),
    },
    {
      image: img4,
      text: translate(
        "Гарантия качества",
        "Сапатка кепилдик",
        "Quality assurance"
      ),
      discription: translate(
        "Мы уверены в качестве наших услуг и предоставляем гарантию на все выполненные работы.",
        "Биз кызматтарыбыздын сапатына ишенебиз жана бардык аткарылган иштерге кепилдик беребиз.",
        "We are confident in the quality of our services and provide a guarantee for all completed work."
      ),
    },
  ];

  return (
    <div data-aos="fade-up" id={scss.About}>
      <div className="container">
        <div className={scss.about}>
          <div className={scss.text}>
            <h1>{translate("О НАС", "БИЗ ЖӨНҮНДӨ", "ABOUT US")}</h1>
            <h2>
              {translate("Мы открылись ", "Биз ачылдык ", "We opened ")}
              <span className={scss.span}>
                {translate("в 2010 году", "2010-жылы", "in 2010")}
              </span>{" "}
              {translate(
                "в Бишкеке и уверенно ",
                "Бишкекте жана ишенимдүү ",
                "in Bishkek and confidently "
              )}
              <span className={scss.span2}>
                {translate(
                  "стали лучшими",
                  "эң мыкты болдук",
                  "became the best"
                )}
              </span>{" "}
              {translate("в этой отрасли.", "бул тармакта.", "in this field.")}
            </h2>
          </div>
          <div className={scss.block}>
            {data.map((el, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 200}
                key={index}
                className={scss.box}
              >
                <div className={scss.images}>
                  <Image src={el.image} alt="img" />
                </div>
                <h2>{el.text}</h2>
                <p>{el.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
