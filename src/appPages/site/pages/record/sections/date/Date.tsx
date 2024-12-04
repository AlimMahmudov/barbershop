import scss from "./Date.module.scss";

const Date = () => {
  return (
    <div id={scss.Date}>
      <div className="container">
        <div className={scss.date}>
          <h1>Укажите дату</h1>
        </div>
      </div>
    </div>
  );
};

export default Date;
