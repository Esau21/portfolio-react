import React from "react";
import "./footer.css";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Edgar Zelaya
      </a>

      <ul className="flinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#services">Educación</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#contact">Contactame</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://www.youtube.com/channel/UCBD2rwTGFFRmsDbleAsA9vA"
          target="_blank"
        >
          <IoLogoYoutube style={{ color: "#FA1616" }} />
        </a>
        <a href="https://github.com/Esau21" target="_blank">
          <BsGithub style={{ color: "#FFC93C" }} />
        </a>
        <a href="https://www.instagram.com/zelaya.21_/" target="_blank">
          <GrInstagram style={{ color: "#F43B86" }} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Copyright Esau Moran. Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
