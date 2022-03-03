import { HamburgerStyle } from "../../style-components/Hamburger";

const Hamburger = ({hamburgerStatus, setHamburgerStatus, setShowMobileMenu, showMobileMenu,}) => {

    const handleToggleStatus = () => {

        if (window.innerWidth < 900) {
      setHamburgerStatus(!hamburgerStatus)
      setShowMobileMenu(!showMobileMenu);

        }
    };

  return (
    <HamburgerStyle>
      <div
        onClick={handleToggleStatus}
        className={`${hamburgerStatus ? "is-active" : ""}`}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    </HamburgerStyle>
  );
};

export default Hamburger;
