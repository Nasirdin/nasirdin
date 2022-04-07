import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./index.scss";

function Header() {
  const pageLinks = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About me",
    },
    {
      to: "/skills",
      title: "Skills",
    },
    {
      to: "/portfolio",
      title: "Portfolio",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ];

  const socialLinks = [
    {
      to: "https://t.me/Nasirdin1",
      title: "Telegram: nasirdin.zhaparkulov@gmail.com",
      icon: <FaTelegramPlane className="icon" size="26px" />,
    },
    {
      to: "https://www.instagram.com/zhaparkulov_02/",
      title: "Instagram: nasirdin.zhaparkulov@gmail.com",
      icon: <FaInstagram className="icon" size="26px" />,
    },
    {
      to: "https://www.linkedin.com/in/191202",
      title: "Linkedin: nasirdin.zhaparkulov@gmail.com",
      icon: <FaLinkedin className="icon" size="26px" />,
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <Link className="header__logotype" to="/">
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
