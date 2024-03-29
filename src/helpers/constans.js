import MCWIMG from "../img/portfolio/wallet.jpg";
import dashIMG from "../img/portfolio/dash.jpg";
import farmingIMG from "../img/portfolio/farming.jpg";
import dexIMG from "../img/portfolio/unifactory.jpg";
import cchainIMG from "../img/portfolio/cchain.png";
import nftIMG from "../img/portfolio/nft.jpg";
import gbzrVIMG from "../img/portfolio/gbzr-visit.png";
import gbzrIMG from "../img/portfolio/gbzr.png";
import ethCCIMG from "../img/portfolio/ethparis.jpg";
import ETHBCNIMG from "../img/portfolio/ETHBCN.jpg";
import devconIMG from "../img/portfolio/devcon.png";
import swapIMG from "../img/portfolio/swap.jpg";
import { FaTelegramPlane, FaInstagram, FaLinkedin, FaVoicemail } from "react-icons/fa";

export const works = [
  {
    id: "1",
    name: "GrandBazar",
    description: "",
    img: gbzrIMG,
    link: "grandbazar",
    date: "2022-09",
    whatihavedone: "",
    tools: ["HTML5", "SCSS", "JavaScript"],
    company: "GrandBazar",
    category: ["front"],
  },
  {
    id: "2",
    name: "GrandBazar Visit",
    description: "",
    img: gbzrVIMG,
    link: "grandbazar",
    date: "2022-08",
    whatihavedone: "",
    tools: ["HTML5", "SCSS", "JavaScript"],
    company: "GrandBazar",
    category: ["front"],
  },
  {
    id: "3",
    name: "Devcon Bogota Telegram bot",
    description: "",
    img: devconIMG,
    url: "devconbogotabot",
    date: "2022-10",
    whatihavedone: "",
    tools: ["node.js", "Telegraf.js"],
    company: "Swap.Online",
    category: ["node"],
  },
  {
    id: "4",
    name: "Eth Barcelona Telegram bot",
    description: "",
    img: ETHBCNIMG,
    url: "ethbarcelona",
    date: "2022-07",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["node"],
  },
  {
    id: "5",
    name: "Eth Paris Telegram bot",
    description: "",
    img: ethCCIMG,
    url: "ethparis",
    date: "2022-07",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["node"],
  },
  {
    id: "6",
    name: "Dash Onout",
    description: "",
    img: dashIMG,
    url: "dash-onout",
    date: "2022-03",
    whatihavedone: "",
    tools: ["React", "Web3.js", "Solidity", "TypeScript"],
    company: "Swap.Online",
    category: ["front", "web3", "solidity"],
  },
  {
    id: "7",
    name: "CROSS-CHAIN exchange page",
    description: "",
    img: cchainIMG,
    url: "cross-chain",
    date: "2022-03",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["front"],
  },
  {
    id: "8",
    name: "MCW (Wallet + Exchange)",
    description: "",
    img: MCWIMG,
    url: "wcm",
    date: "2022-04",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["front"],
  },
  {
    id: "9",
    name: "DeFinance (DEX)",
    description: "",
    img: dexIMG,
    url: "dex",
    date: "2022-04",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["front"],
  },
  {
    id: "10",
    name: "Swap.Online Multi Currency Wallet",
    description: "",
    img: swapIMG,
    url: "swap-online",
    date: "2022-03",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["web3"],
  },
  {
    id: "11",
    name: "FarmFactory",
    description: "",
    img: farmingIMG,
    url: "farmfactory",
    date: "2022-04",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["front"],
  },
  {
    id: "12",
    name: "NFT MARKETPLACE",
    description: "",
    img: nftIMG,
    url: "nft-marketplace",
    date: "2022-05",
    whatihavedone: "",
    tools: ["HTML", "SCSS", "JavaSctipt"],
    company: "Swap.Online",
    category: ["front"],
  },
];

export const socialLinks = [
  {
    to: "https://t.me/Nasirdin1",
    title: "Telegram: @Nasirdin1",
    icon: <FaTelegramPlane className="icon" size="26px" />,
  },
  {
    to: "https://www.instagram.com/zhaparkulov_02/",
    title: "Instagram: zhaparkulov_02",
    icon: <FaInstagram className="icon" size="26px" />,
  },
  {
    to: "https://www.linkedin.com/in/191202",
    title: "Linkedin: Nasirdin Zhaparkulov",
    icon: <FaLinkedin className="icon" size="26px" />,
  },
];

export const contacts = [
  {
    to: "https://t.me/Nasirdin1",
    title: "Telegram: nasirdin.zhaparkulov@gmail.com",
    icon: <FaTelegramPlane className="icon" size="26px" />,
  },
  {
    to: "",
    title: "",
    icon: <FaVoicemail className="icon" size="26"/>,
    discription: "",
  },
  {
    to: "https://www.linkedin.com/in/191202",
    title: "Linkedin: nasirdin.zhaparkulov@gmail.com",
    icon: <FaLinkedin className="icon" size="26px" />,
  },

]
