import { useEffect, useState } from "react";
import "./index.scss";

const Preloader = () => {
  const [active, setActive] = useState("");

  setTimeout(() => {
    setActive("noActive");
  }, 2000);

  return (
    <div>
      <div id="hola" className={active}>
        <div id="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
