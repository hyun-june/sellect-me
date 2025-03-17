import { useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menu = [
    { name: "Home", address: "/" },
    { name: "about", address: "/about" },
    { name: "confirm", address: "/confirm" },
    { name: "mypage/selleb", address: "/mypage/selleb" },
    { name: "mypage/sellecter", address: "/mypage/sellecter" },
    { name: "mypage/selleb/edit", address: "/mypage/selleb/edit" },
    { name: "mypage/sellecter/edit", address: "/mypage/sellecter/edit" },
    { name: "quotation", address: "/quotation" },
    { name: "signup", address: "/signup" },
  ];
  return (
    <nav className="hamburger-section">
      <span
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <div className="burger_line1"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3"></div>
      </span>
      <div className={`hamburger-menu ${menuToggle ? "open" : ""}`}>
        {menuToggle && (
          <ul className={`menu-list`}>
            {menu.map((item) => (
              <li>
                <Link to={item.address}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
