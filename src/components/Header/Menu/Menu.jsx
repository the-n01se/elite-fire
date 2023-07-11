import React from "react";
import logo from '../../../assets/images/logo.svg';
import phone from '../../../assets/images/phone.svg';

import s from './Menu.module.scss';

function Menu() {
  return (
    <nav className={s.menu}>
      <a href="#" className={s.logo__link}>
        <img
          src={logo}
          alt="Логотип Автоматические Биокамины"
          className={s.logo__img}
        />
        <span className={s.logo__title}>Автоматические биокамины</span>
      </a>
      <ul className={s.menu__list}>
        <li className={s.list__item}>
          <a href="#" className={s.list__link}>
            Продукция
          </a>
        </li>
        <li className={s.list__item}>
          <a href="#" className={s.list__link}>
            Конструктор
          </a>
        </li>
        <li className={s.list__item}>
          <a href="#" className={s.list__link}>
            Опыт
          </a>
        </li>
        <li className={s.list__item}>
          <a href="#" className={s.list__link}>
            Контакты
          </a>
        </li>
        <li className={s.list__item}>
          <a href="#" className={s.list__phone}>
            <img
              src={phone}
              alt="Иконка телефона в кнопке звонка"
              className={s.list__phone_img}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
