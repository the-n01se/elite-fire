import React from "react";

import s from "./Features.module.scss";

import features_img from "../../assets/images/features-img.png";
import fire from "../../assets/images/fire.svg";
import h2o from "../../assets/images/h2o.svg";
import close from "../../assets/images/close.svg";

function Features() {
  return (
    <section className={s.features}>
      <h2 className={s.title}>Настоящий высокий огонь у вас дома</h2>
      <p className={s.descr}>
        Благодаря специальной технологии горения биоэтанола мы добились горения
        потрясающей красоты
      </p>
      <div className={s.img__wrapper}>
        <img
          src={features_img}
          alt="Верхняя часть камина с ярким, высоким огнем"
          className={s.features__img}
        />
        <div className={s.img__circle}></div>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={fire} alt="Иконка огонь" className={s.item__img} />
          <p className={s.item__text}>Пламя яркое, высотой до 20 сантиметров</p>
        </li>
        <li className={s.item}>
          <img src={h2o} alt="Иконка капли воды" className={s.item__img} />
          <p className={s.item__text}>Работает такой камин на биотопливе</p>
        </li>
        <li className={s.item}>
          <img src={close} alt="Иконка крестик" className={s.item__img} />
          <p className={s.item__text}>Он не дымит и не пахнет</p>
        </li>
      </ul>
    </section>
  );
}

export default Features;
