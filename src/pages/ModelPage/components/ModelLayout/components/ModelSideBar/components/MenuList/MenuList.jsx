import { useState } from "react";
import "./MenuList.css";

const MenuList = ({ ...props }) => {
  const { title, list } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu_list_inner">
      <div className="menu_list_title">
        {title}
        <span className="menu_list_arrow" onClick={handleMenu}>
          {isOpen ? "▶" : "▼"}
        </span>
      </div>
      <ul className={`menu_list_category ${isOpen ? "open" : ""}`}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
