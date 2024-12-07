import scss from "./Footer.module.scss";

const Footer = () => {
  return <footer className={scss.Footer}>
    <div className="container">
      <div className={scss.footer}>
        <p>ⓒ2024 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
