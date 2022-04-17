import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/preloader";
import Skills from "./components/Skills"
import "animate.css";
import "./index.scss";

function App() {

  const [active, setActive] = useState("");

  setTimeout(() => {
    setActive("active");
  }, 2000);
  return (
    <div className={`App ${active}`}>
      <BrowserRouter>
        <Header />
        <Home />
        {/* <About /> */}
        <Portfolio />
        <Skills />
        <Contacts />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
