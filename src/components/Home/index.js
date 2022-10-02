import "./index.scss";
import Gif1 from "../../img/gif1.gif";

function Home() {
  let titleActive = true;

  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <p className="home__hi">Привет!</p>
          <h1 className="home__title">Я <span>Насирдин</span>, <br/>Я <span>Front-End</span>  разработчик</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
