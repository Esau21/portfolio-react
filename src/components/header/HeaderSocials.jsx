import React from "react";
import { BsYoutube } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.youtube.com/channel/UCBD2rwTGFFRmsDbleAsA9vA" target="_blank">
        <BsYoutube style={{color: '#FF414D'}} />
      </a>
      <a href="https://github.com/Esau21" target="_blank">
        <VscGithub style={{color: '#FFC107'}} />
      </a>
      <a href="https://www.instagram.com/zelaya.21_/" target="_blank">
        <GrInstagram style={{color: '#BF1363'}} />
      </a>
    </div>
  );
};

export default HeaderSocials;
