import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

// import Rodot from "./img/gif-mouse.gif";

import "./index.scss";
// import { useEffect, useState } from "react";
import Experience from "./components/Experience";

function App() {
  // let robotGoActive = true;
  // const robotGo = (el) => {
  //   let elTarget = el.target;
  //   if (!robotGoActive) {
  //     window.removeEventListener("mouseover", (e) => {
  //     });
  //   } else {
  //     window.addEventListener("mouseover", (e) => {
  //       let clientX = e.clientX;
  //       let clientY = e.clientY;
  //     });
  //   }
  // };



  return (
    <div className="App">
      <BrowserRouter>
        {/* <img
          className="robot"
          onClick={(el) => {
            robotGo(el);
            robotGoActive = !robotGoActive;
            console.log('====================================');
            console.log(robotGoActive);
            console.log('====================================');
          }}
          id="robot"
          src={Rodot}
          alt="rodot-gif"
        /> */}
        <Header />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio/>
        <Contacts/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
