import { useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ ...props }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { menu } = props;

  return (
    <nav className="hamburger-section" {...props}>
      <span
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <div className="burger_line1"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3"></div>
      </span>
      <div className={`hamburger-menu  ${menuToggle ? "open" : ""}`}>
        {menuToggle && (
          <ul className="menu-list">
            {menu.map((item) => (
              <li>
                <a href={item.address}>{item.name} </a>
              </li>

              // <li>
              //   <Link to={item.address}>{item.name}</Link>
              // </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;
