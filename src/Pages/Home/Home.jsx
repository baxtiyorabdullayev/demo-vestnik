import React from "react";
import "./Home.css";

// react icons
import { RiArrowRightDownLine } from "react-icons/ri";

// images
import magazine from "../../assets/Images/magazine.jpg";
import editor from "../../assets/Images/editor.jpg";

function Home() {
  return (
    <div id="home-page">
      <div className="magazine-info-section">
        <img src={magazine} alt="Turan" />
        <div className="info-text">
          <div className="info-title">
            <span>О ЖУРНАЛЕ</span>
            <RiArrowRightDownLine></RiArrowRightDownLine>
          </div>
          <p className="info-description">
            «Вестник университета «Туран» - научный журнал, публикующий научные
            статьи по широкому спектру современных экономических проблем,
            вопросам развития сферы образования, туризма, проблемам обеспечения
            устойчивого развития республики, повышения качества образования.
            Редакционная коллегия, рецензенты и авторы журнала стремятся
            соблюдать высокие стандарты научной и публикационной этики:
            прозрачность взаимодействия редакции и авторов журнала, обязательное
            рецензирование всех поступающих в журнал статей независимыми
            экспертами или членами редакционной коллегии, свободный доступ к
            публикациям. Журнал «Вестник университета «Туран»:
          </p>
        </div>
      </div>
      <div className="editor-info-section">
        <img src={editor} alt="Turan" />
        <div className="info-text">
          <div className="info-title">
            <span>ГЛАВНЫЙ РЕДАКТОР</span>
            <RiArrowRightDownLine></RiArrowRightDownLine>
          </div>
          <p className="info-description">
            ТАМЕНОВА САЛТАНАТ САРСЕНБАЕВНА к.э.н., доцент Образование,
            ученая/академическая степень, звание 1977-1981 г.г. – Алма-Атинский
            институт народного хозяйства, экономист 1986- 1989г.г. –
            Алма-Атинский институт народного хозяйства, аспирантура
            Экономист-исследователь Академический и практический опыт: 1981-2002
            – преподаватель кафедры «Экономика» КазЭУ им. Т. Рыскулова,
            эксперт-консультант Института повышения квалификации 2000 - 2005 -
            эксперт-консультант, ТОО «Бизнес-консалтинг»
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
