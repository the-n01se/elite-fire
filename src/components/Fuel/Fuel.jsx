import React from "react";

import s from "./Fuel.module.scss";
import fuel__img from "../../assets/images/fuel-img.png";
import hose from "../../assets/images/hose.svg";
import power from "../../assets/images/power-button.svg";

function Fuel() {
  return (
    <section className={s.fuel}>
      <div className={s.content}>
        <h2 className={s.title}>Заправка</h2>
        <div className={s.texts}>
          <p className={s.text}>
            Внутри не просто труба. Спроектированный нами бак, самого большого
            обьема среди всех производителей
          </p>
          <p className={s.text}>В наши топливные блоки встроен мощный насос.</p>
        </div>
        <div className={s.right_block}>
          <div className="right_block__wrapper">
            <div className={s.item + " " + s.item_1}></div>
            <div className={s.item + " " + s.item_2}></div>
            <div className={s.item + " " + s.item_3}>
              <div className={s.item__circle}></div>
              <div className={s.item__titles}>
                <p className={s.item__title}>3,5 минуты</p>
                <p className={s.item__subtitle}>и бак наполнен на 100%</p>
              </div>
            </div>
            <div className={s.img__circle}></div>
            <img
              src={fuel__img}
              alt="Бак для заправки камина крупным планом"
              className={s.fuel__img}
            />
          </div>
        </div>
        <div className={s.bottom_block}>
          <div className={s.icons}>
            <img src={hose} alt="Иконка подкова" className={s.item__icon} />
            <span className={s.item__icon_line}></span>
            <img
              src={power}
              alt="Иконка кнопка включения и выключения"
              className={s.item__icon}
            />
          </div>
          <div className={s.bottom_block__texts}>
            <p className={s.bottom_block__text}>Достаточно вставить шланги</p>
            <p className={s.bottom_block__text}>Нажать кнопку</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fuel;
