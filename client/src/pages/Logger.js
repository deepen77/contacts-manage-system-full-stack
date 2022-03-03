import React, { useContext} from "react";
import { SectionStyle } from "../style-components/SectionStyle";
//import picture from "../assets/single-images/cms-logo.png";
import picture1 from "../assets/svg/logo.svg";
import { Link, Redirect } from "react-router-dom";

import { UserContext } from "../UserContext";
import { GetStartedBtnStyle } from "../style-components/Buttons";
import { LoggerStyle } from "../style-components/LoggerStyle";
import exclamation from "../assets/svg/exclamation.svg";
import "react-toastify/dist/ReactToastify.css";

const Logger = () => {


     const { userctx } = useContext(UserContext);

  return (
    <SectionStyle>
      {userctx ? (
        <LoggerStyle>
          <div className="logo-welcome-wrapper">
            <img className="logo-welcome-picture" src={picture1} alt="L" />
          </div>
          {userctx === "alan" ? (
            <>
              <div className="welcome">{`Hi ${
                userctx.charAt(0).toUpperCase() + userctx.slice(1)
              }`}</div>

              <div className="welcome-next">
                You have access to menage our contacts
              </div>
              <Link to="/panel">
                <GetStartedBtnStyle>Panel access &gt;</GetStartedBtnStyle>
              </Link>
            </>
          ) : (
            <>
              <h1 className="welcome">
                {`Sorry ${userctx.charAt(0).toUpperCase() + userctx.slice(1)}.`}
                <br /> You have no acces to the panel
              </h1>
              <h2 className="welcome-next">
                <img src={exclamation} alt={exclamation} />
                This is demonstration site and only one special user has access
                to panel <br />
                Please use the following details to login as super Admin:
              </h2>
              <div className="super-admin">
                <span>email: </span> alan@gmail.com
                <br />
                <span>login: </span> Qwerty1!
              </div>
            </>
          )}
        </LoggerStyle>
      ) : (
        <Redirect to="/" />
      )}
    </SectionStyle>
  );
};

export default Logger;
