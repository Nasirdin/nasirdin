import "./index.scss";

function Skills() {
  const skillsArr = [
    {
      name: "HTML5",
      percent: "95",
    },
    {
      name: "CSS ( SASS, SCSS )",
      percent: "95",
    },
    {
      name: "JavaScript - TypeScript",
      percent: "85",
    },
    {
      name: "React - Redux",
      percent: "90",
    },
    {
      name: "Node.js ( Express.js, MongoDB, Mongoose )",
      percent: "50",
    },
    {
      name: "Solidity, Web3,js",
      percent: "45",
    },
    {
      name: "Bootstrap, Material UI, БЭМ, Git",
      percent: "90",
    },
    {
      name: "Gulp, WebPack",
      percent: "75",
    },
    {
      name: "REST API",
      percent: "80",
    },
    {
      name: "Jira, Confluence, Miro, WinSCP, PuTTY",
      percent: "90",
    },
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="skills__title title">Навыки</h2>
        <span className="line"></span>
        <div className="skills__content">
          <div></div>
          <ul className="skills__items">
            {skillsArr.map((el) => (
              <li className="skills__item">
                <p className="skills__name">{el.name}</p>
                <div className="skills__progress progress-bar">
                  <span className="progress-bar__line" style={{ width: `${el.percent}%` }}></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
