import React from "react";
import "./experience.css";
import { RiShieldCheckFill } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiLaragon } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Habilidades</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon"/>
              <div>
                <h4>
                  <DiHtml5 style={{ color: "#FF5B00", marginBottom: "-3px" }} />{" "}
                  HTML5
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <DiCss3 style={{ color: "#332FD0", marginBottom: "-3px" }} />{" "}
                  CSS3
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <DiJavascript1
                    style={{ color: "#F6F54D", marginBottom: "-3px" }}
                  />{" "}
                  JavaScript
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <BsFillBootstrapFill
                    style={{ color: "#7900FF", marginBottom: "-3px" }}
                  />{" "}
                  Bootstrap
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <FaReact style={{ color: "#4D77FF", marginBottom: "-3px" }} />{" "}
                  React Js
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <SiLaragon
                    style={{
                      color: "#5463FF",
                      marginBottom: "-3px",
                      width: "1rem",
                    }}
                  />{" "}
                  PHP
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <SiLaravel
                    style={{ color: "#FF1700", marginBottom: "-3px" }}
                  />{" "}
                  Laravel
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <SiPython
                    style={{ color: "#F6F54D", marginBottom: "-3px" }}
                  />{" "}
                  Python
                </h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  <GrMysql style={{ color: "#FFF", marginBottom: "-3px" }} /> My
                  SQL
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
