import { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menu = [
    { name: "Home", address: "/" },
    { name: "login", address: "/login" },
    { name: "register", address: "/register" },
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
                <a href={item.address}>{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
