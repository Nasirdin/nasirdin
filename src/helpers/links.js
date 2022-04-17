import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

export const PAGE_LINKS = [
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
    to: "/contacts",
    title: "Contact",
  },
];

export const SOCIAL_LINKS = [
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

// export const CONTACT_LINKS = [
//   {
//     to: "https://t.me/Nasirdin1",
//     title: "Telegram: nasirdin.zhaparkulov@gmail.com",
//     icon: <FaTelegramPlane className="icon" size="26px" />,
//   },
// ];
