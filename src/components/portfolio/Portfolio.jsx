import React from "react";
import "./portfolio.css";
import { FaGithub } from "react-icons/fa";
import img1 from '../../assets/php.png';
import img2 from '../../assets/python.png';
import img3 from '../../assets/lara.png';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes.</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-image">
              <img src={img1} alt="portfolio1" />
          </div>
          <h3>Sistema Alumnos</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Esau21/Parcial-3" className="btn" target="_blank">
            <FaGithub style={{ color: "#FFC300", marginBottom: "-3px" }} />{" "}
            Github
          </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
              <img src={img2} alt="portfolio1" />
          </div>
          <h3>Ejercicios Python</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Esau21/Ejercicios-Python" className="btn" target="_blank">
            <FaGithub style={{ color: "#FFC300", marginBottom: "-3px" }} />{" "}
            Github
          </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
              <img src={img3} alt="portfolio1" />
          </div>
          <h3>Sistema Ventas</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Esau21/SISTEMA-INVENTARIO" className="btn" target="_blank">
            <FaGithub style={{ color: "#FFC300", marginBottom: "-3px" }} />{" "}
            Github
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
