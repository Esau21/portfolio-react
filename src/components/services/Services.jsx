import React from "react";
import "./services.css";
import { FcGraduationCap } from "react-icons/fc";

const Services = () => {
  return (
    <section id="services">
      <h5>Learn More</h5>
      <h2>Educación</h2>

      <div className="container services__container">
        {/*  primer articulo */}
        <article className="service">
          <div className="service__head">
            <h3>EDUCACIÓN BÁSICA-PRIMARIA</h3>
          </div>
          <ul className="service__list">
            <li>
              <FcGraduationCap className="service__list-icon" />
              <p>2004-2016</p>
            </li>
            <li>
              <p>
                En en rango de esas fechas pude culminar mis estudios, en
                Educación básica y Educación primaria de kinder 4 a noveno
                grado, En el Centro Escolar Domingo Faustino Sarmiento, del
                Departamento de San Salvador, Municipio de San Marcos.
              </p>
            </li>
          </ul>
        </article>
        {/*  segundo articulo */}
        <article className="service">
          <div className="service__head">
            <h3>EDUCACIÓN MEDIA</h3>
          </div>
          <ul className="service__list">
            <li>
              <FcGraduationCap className="service__list-icon" />
              <p>2017-2018</p>
            </li>
            <li>
              <p>
                En el rango de esas fechas pude culminar mi, Eduación media que
                seria Bachillerato General con diplomado en Marketing Digital,
                En el Complejo Educativo Católico NSR, Departamento de San
                Salvador, Municipio de San Marcos.
              </p>
            </li>
          </ul>
        </article>
        {/*  segundo articulo */}
        <article className="service">
          <div className="service__head">
            <h3>EDUCACIÓN SUPERIOR</h3>
          </div>
          <ul className="service__list">
            <li>
              <FcGraduationCap className="service__list-icon" />
              <p>2019-2022</p>
            </li>
            <li>
              <p>
                Actualmente estoy en mi Educación Superior, cursando mi 8° ciclo
                de universidad, En la Carrera de Ciencias de la Computación, En
                la Universidad Luterana Salvadoreña Departamento de San
                Salvador, Muncipio de San Marcos.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
