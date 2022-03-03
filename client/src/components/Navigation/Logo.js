import React from 'react'
import { Link } from "react-router-dom";
import { LogoStyle } from "../../style-components/Navbar";
//import picture from "../../assets/single-images/cms-logo.png";
import picture1 from "../../assets/svg/logo.svg";

const Logo = () => {


  const scrollUp = () => {
    window.scrollTo(0, 0);
  };


    return (
      <LogoStyle>
        <Link to="/">
          <div onClick={scrollUp} className="logo-wrapper">
            <img className="logo-picture" src={picture1} alt="L" />
            <span> CMS</span>
          </div>
        </Link>
      </LogoStyle>
    );
}

export default Logo


