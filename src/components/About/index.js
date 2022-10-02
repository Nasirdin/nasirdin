import Img1 from "../../img/i1.jpg";
import "./index.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__img">
          <img src={Img1} alt="img" />
        </div>
        <div className="about__content">
          <h2 className="about__title title">Жапаркулов Насирдин</h2>
          <h3 className="about__profession subtitle">Front-End разработчик</h3>
          <p className="about__text">
            Привет! Меня зовут Насирдин. Я Front-End разработчик с опытом работы более 1,5 года. Учусь в колледже
            экономики и сервиса им. М.Рыскулбекова по направлению Прикладная информатика. Знаю JS, C#, Solidity и Web3
            разработку.
          </p>
          <ul className="about__items">
            <li className="about__item">Location: Бишкек, Кыргызстан</li>

            <li className="about__item">
              Email:{" "}
              <a className="about__link" href="mailto:nasirdin.zhaparkulov@gmail.com" target="_blank">
                nasirdin.zhaparkulov@gmail.com
              </a>
            </li>
            <li className="about__item">
              Instagram:{" "}
              <a className="about__link" href="http://instagram.com/zhaparkulov_02" target="_blank">
                @zhaparkulov_02
              </a>
            </li>
          </ul>
          <button className="about__btn btn">Портфолио</button>
        </div>
      </div>
    </div>
  );
}

export default About;
