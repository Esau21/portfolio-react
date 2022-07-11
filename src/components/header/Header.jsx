import React from "react";
import "./header.css";
import CTA from "./CTA";
import Edgar from "../../assets/business-3d-young-man-in-formalwear-sitting-on-the-floor-and-taking-photo.png";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edgar</h1>
        <h5 className="text-light">
          <span>
            {" "}
            <Typical
              steps={["Soy😎", 1000, "Desarrollador💻", 1000, "Senior💻", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </span>
        </h5>
        <CTA></CTA>
        <HeaderSocials />

        <div className="me">
          <img src={Edgar} alt="Perfil" />
        </div>

        <a href="#contact" className="scroll_down">
          Desplaza abajo
        </a>
      </div>
    </header>
  );
};

export default Header;
