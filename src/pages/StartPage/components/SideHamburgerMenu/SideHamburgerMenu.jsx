import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideHamburgerMenu.css";

const SideHamburgerMenu = ({ ...props }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { menu } = props;

  return (
    <nav
      className={`side_hamburger-section ${menuToggle ? "open" : ""}`}
      {...props}
    >
      <span
        className={!menuToggle ? "side_burger__menu" : "side_x__menu"}
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <div className="side_burger_line1"></div>
        <div className="side_burger_line2"></div>
        <div className="side_burger_line3"></div>
      </span>

      {menuToggle && (
        <div className={`side_hamburger-menu  ${menuToggle ? "open" : ""}`}>
          <ul className="side_menu-list">
            {menu.map((item, index) => (
              // <li key={index}>
              //   <a href={item.address}>{item.name} </a>
              // </li>

              <li>
                <Link to={item.address}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SideHamburgerMenu;
