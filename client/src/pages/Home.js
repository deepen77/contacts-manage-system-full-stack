import React from "react";
import { SectionStyle } from "../style-components/SectionStyle";
import picture1 from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

import { GetStartedBtnStyle } from "../style-components/Buttons";
import { HomeStyle } from "../style-components/HomeStyle";

const Home = () => {
  return (
    <SectionStyle>
      <HomeStyle>
        <div className="logo-welcome-wrapper">
          <img className="logo-welcome-picture" src={picture1} alt="L" />
        </div>
        <div className="welcome">
          Welcome To Admin Panel. Manage clients faster and efficient
        </div>
        <div className="welcome-next">
          Automate repetitive work so you can spend more time on sales.
        </div>
        <Link to="/signup">
          <GetStartedBtnStyle>
            Get started <span style={{ paddingLeft: "10px" }}> &#10095;</span>
          </GetStartedBtnStyle>
        </Link>
      </HomeStyle>
    </SectionStyle>
  );
};

export default Home;
