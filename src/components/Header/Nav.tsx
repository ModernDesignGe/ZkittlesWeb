import "./Nav.css";
import logo from "../../images/Logo.png";
import searchIcon from "../../images/icons/Search.png";
import CardIcon from "../../images/icons/Cart.png";
import { useState } from "react";

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);
  return (
    <nav>
      <div className="container navContainer">
        <div
          className={`navBurger ${navActive ? "navBurgerActive" : ""}`}
          onClick={() => setNavActive(!navActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navLogo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navSearch">
          <input type="text" placeholder="Search" />
          <button>
            <img src={searchIcon} />
          </button>
        </div>
        <div className="navOptions">
          <span>Your Account</span>
          <div className="NavLineV"></div>
          <div className="CartNav">
            <img src={CardIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
}
