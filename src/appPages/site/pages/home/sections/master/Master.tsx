import scss from "./Master.module.scss";

const Master = () => {
  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <h1>Команда профессионалов</h1>
          <h2>
            Наша команда – это сплоченный коллектив <span>опытных</span>
            барберов, каждый из которых – настоящий мастер своего дела.
          </h2>
        </div>
        <div className={scss.block}>
          <div className={scss.box}>
            <div className={scss.name}>
              <h1></h1>
              <p></p>
            </div>
            <div className={scss.logo}>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
