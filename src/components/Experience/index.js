import "./index.scss";

function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <h2 className="experience__title title">Опыт работы</h2>
        <span className="line"></span>
        <div className="experience__content">
          <ul className="experience__works experience__works_one">
            <li className="experience__work work">
              <h3 className="work__title">Front-End разработчик</h3>
              <p className="work__company">GrandBazar / ОАЕ, Дубай</p>
              <div className="work__description description">
                <p className="description__title">Обязанности:</p>
                <p className="description__text"> Верстка новых HTML страниц и ведение разработки Front-end части</p>
                <p className="description__title">Инструменты:</p>
                <p className="description__text">JavaScript, React, HTML5, SCSS, CSS, Bootstrap</p>
              </div>
            </li>
            <li className="experience__work work">
              <p className="work__date">Фев 2022 - Сен 2022</p>
            </li>
          </ul>
          <ul className="experience__line">
            <li className="experience__work work">
              <div className="experience__dot"></div>
            </li>
            <li className="experience__work work">
              <div className="experience__dot"></div>
            </li>
          </ul>

          <ul className="experience__works experience__works_two">
            <li className="experience__work work">
              <p className="work__date">Авг 2022 - настоящее время</p>
            </li>
            <li className="experience__work work">
              <h3 className="work__title">Front-End & Blockchain разработчик</h3>
              <p className="work__company">Swap.Online / Россия, Москва</p>
              <div className="work__description description">
                <p className="description__title">Обязанности:</p>
                <p className="description__text">Ведение разработки Front-end части и разработка новых DApp-сайтов</p>
                <p className="description__title">Инструменты:</p>
                <p className="description__text">TypeScript, React, Solidity, Web3.js, Node.js</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
