import { useState } from "react";
import "./index.scss";

function Home() {
  const [amnimateHimgle, setAnimateHingle] = useState("");
  const [amnimateHeadShake, setAnimateHeadShake] = useState("");

  const addEffectHinge = () => {
    setAnimateHingle("animate__hinge");
    setTimeout(() => {
      setAnimateHingle("");
    }, 2000);
  };
  const addEffectHeadShanke = () => {
    setAnimateHeadShake("animate__bounceOutUp");
    setTimeout(() => {
      setAnimateHeadShake("");
    }, 2000);
  };

  return (
    <div className="home">
      <div className="container">
        <h1
          className={`home__title animate__animated animate__backInRight ${amnimateHimgle}`}
          onClick={addEffectHinge}
        >
          Hello, my name is<span>Nasirdin</span>.
        </h1>
        <p
          className={`home__subtitle animate__animated animate__bounceInUp ${amnimateHeadShake}`}
          onClick={addEffectHeadShanke}
        >
          I am <span>Front-End</span> and junior <span>Blockchain</span>{" "}
          Developer
        </p>
        <p
          className={`home__subtitle animate__animated animate__bounceInUp ${amnimateHeadShake}`}
          onClick={addEffectHeadShanke}
        >
          Feel free to take a look at my latest projects on the{" "}
          <a href="#">web portfolio page.</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
