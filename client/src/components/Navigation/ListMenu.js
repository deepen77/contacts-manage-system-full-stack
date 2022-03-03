import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../UserContext";
import { ListMenuStyle } from "../../style-components/Navbar";

import { logout } from "../../api/user";
import { SignUpBtnStyle, PanelBtnStyle, HomeBtnStyle, LoginBtnStyle, LogoutBtnStyle, LoggedInBtnStyle } from "../../style-components/Buttons";
import picture1 from "../../assets/svg/logo.svg";

const ListMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  hamburgerStatus,
  setHamburgerStatus,
}) => {

  const { userctx, setUserctx } = useContext(UserContext);

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    history.push("/");
    logout()
      .then((res) => {
        toast.success(res.message);
        // set user to null
        setUserctx(null);
        // redirect the user to login
        //history.push("/login");

      })
      .catch((err) => console.error(err));
  };

  const handleToggleStatus = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 900) {
      setHamburgerStatus(!hamburgerStatus);
      setShowMobileMenu(!showMobileMenu);
    }
  };

  // let activeStyle = {
  //   backgroundColor: "#e2e8f0",
  // };

  return (
    <ListMenuStyle>
      <ul className={`${showMobileMenu ? "open" : ""}`}>
        {window.innerWidth < 900 ? (
          <Link to="/">
            <li style={{paddingBottom:40}} key="LOGO" onClick={handleToggleStatus}>
              <img src={picture1} alt={picture1} />
            </li>
          </Link>
        ) : null}

        <li key="HOME" onClick={handleToggleStatus}>
          <Link
            to="/"
            // style={({ isActive }) =>
            //   isActive && window.innerWidth > 750 ? activeStyle : undefined
            // }
          >
            <HomeBtnStyle>Home</HomeBtnStyle>
          </Link>
        </li>
        <li key="ADMIN-PANEL" onClick={handleToggleStatus}>
          <Link
            to="/panel"
            // style={({ isActive }) =>
            //   isActive && window.innerWidth > 750 ? activeStyle : undefined
            // }
          >
            <PanelBtnStyle>Panel</PanelBtnStyle>
          </Link>
        </li>
        {!userctx ? (
          <>
            <li key="SIGN-UP" onClick={handleToggleStatus}>
              <Link
                to="/signup"
                // style={({ isActive }) =>
                //   isActive && window.innerWidth > 750 ? activeStyle : undefined
                // }
              >
                <SignUpBtnStyle>
                  Sign Up <span style={{ paddingLeft: "10px" }}> &#10095;</span>
                </SignUpBtnStyle>
              </Link>
            </li>
            <li key="LOGIN" onClick={handleToggleStatus}>
              <Link
                to="/login"
                // style={({ isActive }) =>
                //   isActive && window.innerWidth > 750 ? activeStyle : undefined
                // }
              >
                <LoginBtnStyle>Login</LoginBtnStyle>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li key="LOGGED-IN">
              <LoggedInBtnStyle>
                Logged in as{" "}
                {userctx.charAt(0).toUpperCase() + userctx.slice(1)}
              </LoggedInBtnStyle>
            </li>
            <li key="LOGGED-OUT">
              <LogoutBtnStyle onClick={handleLogout}>Logout</LogoutBtnStyle>
            </li>
          </>
        )}
      </ul>
    </ListMenuStyle>
  );
};

export default ListMenu;
