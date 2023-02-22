import React from "react";
import "./About.css";
import { RiArrowRightDownLine } from "react-icons/ri";

function About() {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="info-title">
          <span>Персоналии</span>
          <RiArrowRightDownLine></RiArrowRightDownLine>
        </div>
        <div className="about-button">Контакты</div>
        <div className="about-button">Редакционная коллегия</div>
        <div className="about-button">Редакционный совет</div>
      </div>
      <div className="about-section">
        <div className="info-title">
          <span>Политика журнала</span>
          <RiArrowRightDownLine></RiArrowRightDownLine>
        </div>
        <div className="about-button">Цели и задачи</div>
        <div className="about-button">Разделы журнала</div>
        <div className="about-button">Периодичность</div>
        <div className="about-button">Политика свободного доступа</div>
        <div className="about-button">Архивация</div>
        <div className="about-button">Рецензирование</div>
        <div className="about-button">Публикационные сборы</div>
        <div className="about-button">Этика научных публикаций</div>
        <div className="about-button">Учредитель</div>
        <div className="about-button">
          Политика раскрытия и конфликты интересов
        </div>
        <div className="about-button">Заимствования и плагиат</div>
        <div className="about-button">
          Политика размещения препринтов и постпринтов
        </div>
        <div className="about-button">Основные документы журнала</div>
      </div>
      <div className="about-section">
        <div className="info-title">
          <span>Прием статей</span>
          <RiArrowRightDownLine></RiArrowRightDownLine>
        </div>
        <div className="about-button">Отправка статей</div>
        <div className="about-button">Правила для авторов</div>
        <div className="about-button">Авторские права</div>
        <div className="about-button">Приватность</div>
      </div>
      <div className="about-section">
        <div className="info-title">
          <span>Прочее</span>
          <RiArrowRightDownLine></RiArrowRightDownLine>
        </div>
        <div className="about-button">Издатель и спонсоры</div>
        <div className="about-button">История журнала</div>
      </div>
    </div>
  );
}

export default About;
