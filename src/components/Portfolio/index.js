import { useState } from "react";
import { works } from "../../helpers/constans";
import "./index.scss";

function Portfolio() {
  const [workTab, setWorkTab] = useState("all");
  const navBtn = [
    {
      name: "Все",
      tag: "all",
    },
    {
      name: "Front-End",
      tag: "front",
    },
    {
      name: "Node js",
      tag: "node",
    },
    {
      name: "Web3",
      tag: "web3",
    },
    {
      name: "Solidity",
      tag: "solidity",
    },
  ];
  const changeWorkTag = (e) => {
    e.preventDefault();
    setWorkTab(e.target.id);
  };

  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio__title title">Портфолио</h2>
        <span className="line"></span>
        <ul className="portfolio__btns">
          {navBtn.map((el) => (
            <li className="portfolio__item" key={el.tag}>
              <button
                className={`portfolio__btn ${workTab === el.tag ? "active" : ""}`}
                id={el.tag}
                onClick={changeWorkTag}
              >
                {el.name}
              </button>
            </li>
          ))}
        </ul>
        <ul className="portfolio__works">
          {works.map((work) =>
            work.category.map((category) =>
              category == workTab ? (
                <li className="portfolio__work work">
                  <img className="work__img" src={work.img} />
                  <h4 className="work__name">{work.name}</h4>
                </li>
              ) : workTab === "all" ? (
                <li className="portfolio__work work">
                  <img className="work__img" src={work.img} />
                  <h4 className="work__name">{work.name}</h4>
                </li>
              ) : (
                ""
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
