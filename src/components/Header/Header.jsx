import React from "react";
import s from "./Header.module.scss";
import Menu from "./Menu/Menu";
import header_img from "../../assets/images/header-img.png";
import gear from '../../assets/images/gear.svg';
import plane from '../../assets/images/plane.svg';

function Header() {
  return (
    <header className={s.header}>
      <Menu />
      <div className={s.content}>
        <div className={s.left}>
          <div className={s.titles}>
            <h1 className={s.title}>Автоматические биокамины</h1>
            <p className={s.subtitle}>
              <span className={s.subtitle__span}>от</span> 99 000₽</p>
          </div>
          <div className={s.items}>
            <div className={s.item}>
              <img className={s.item__img} src={gear} alt="Иконка шестеренка" />
              <p className={s.item__text}>Свое производство</p>
            </div>
            <div className={s.item}>
              <img className={s.item__img} src={plane} alt="Иконка самолёт" />
              <p className={s.item__text}>Доставка в любую точку мира</p>
            </div>
          </div>
        </div>
        <div className={s.img__wrapper}>
          <img
            className={s.header__img}
            src={header_img}
            alt="Длинный заженный камин"
          />
          <div className={s.img__circle}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
