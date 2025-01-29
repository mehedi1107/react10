import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Portfolio from "./component/Portfolio/Portfolio.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Skill from "./component/Skill/Skill.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
