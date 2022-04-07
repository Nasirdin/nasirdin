import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sections from "./components/Sections";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sections />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
