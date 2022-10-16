import { Link } from "react-router-dom";
import { socialLinks } from "../../helpers/constans";
import "./index.scss";

function Header() {
  let headerPosition = "reletive";
  window.addEventListener("wheel", (event) => {
    if (event.wheelDelta > 0) {
      headerPosition = "fixed";
    } else {
      headerPosition = "reletive";
    }
  });

  const pageLinks = [
    {
      to: "/",
      title: "Главная",
    },
    {
      to: "/about",
      title: "Обо мне",
    },
    {
      to: "/skills",
      title: "Навыки",
    },
    {
      to: "/portfolio",
      title: "Портфолио",
    },
    {
      to: "/contact",
      title: "Контакты",
    },
  ];

  return (
    <div className="header" style={{ position: `${headerPosition}` }}>
      <div className="container">
        <Link className="header__logo" to="/">
          Nasirdin
        </Link>
        <ul className="header__items">
          {pageLinks.map(({ to, title }, index) => (
            <li className="header__link" key={index}>
              <Link to={to} title={title}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="header__socialLinks">
          {socialLinks.map(({ to, title, icon }, index) => (
            <li className="header__socialLink" key={index}>
              <a href={to} rel="noreferrer" target="_blank" title={title}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
