import "./Main.css";
import Footer from "./Footer.js";
import FirstSection from "./FirstSection.js";
import SecondSection from "./SecondSection.js";
import ThirdSection from "./ThirdSection.js";
import ForthSection from "./ForthSection.js";
import FifthSection from "./FifthSection.js";
import SixthSection from "./SixthSection.js";
import Header from "./Header.js";
import SeventhSection from "./SeventhSection.js";
import EightSection from "./EightSection.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuiSom from "./pages/quisom/QuiSom.js";
function Main() {
  return (
      <div className="main">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <SeventhSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <EightSection />
      </div>
  );
}

export default Main;
