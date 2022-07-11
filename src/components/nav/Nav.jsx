import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <ImBook />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FaMedal />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <FaGraduationCap />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BsPhoneFill />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
