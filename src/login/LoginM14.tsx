import scss from "./LoginM14.module.scss";
import { FC } from "react";

const LoginM14: FC = () => {
  return (
    <>
      <div className={scss.preLoader}>
        <p className={scss.title_loader}>
          <span>Bro Barber</span>
        </p>
        <span className={scss.loader}></span>
      </div>
    </>
  );
};
export default LoginM14;
