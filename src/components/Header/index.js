import { Link } from "react-router-dom";
import { PAGE_LINKS, SOCIAL_LINKS } from "../../helpers/links";

import "./index.scss";

function Header() {
  return (
    <div className="header animate__animated animate__fadeInDown">
      <div className="container">
        <Link className="header__logotype" to="/">
          NASIRDIN
        </Link>
        <ul className="header__items">
          {PAGE_LINKS.map(({ to, title }, index) => (
            <li className="header__item" key={index}>
              <Link className="header__link" to={to} title={title}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="header__socialLinks">
          {SOCIAL_LINKS.map(({ to, title, icon }, index) => (
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
