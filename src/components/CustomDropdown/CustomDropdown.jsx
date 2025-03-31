import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./CustomDropdown.css";

const CustomDropdown = ({ ...props }) => {
  const { label, list, onChange } = props;

  const [selectDropdown, setSelectDropdown] = useState(list[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectDropdown(value);
    setIsOpen(false);
    onChange(value);
  };

  useEffect(() => {
    console.log(selectDropdown);
  }, [selectDropdown]);

  return (
    <div {...props}>
      {label ? <label>{label}</label> : ""}
      <div className="dropdown_container">
        <div onClick={handleDropdown} className="dropdown_select">
          {selectDropdown}
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <ul className={`dropdown_list ${isOpen ? "open" : ""}`}>
          {list.map((item, index) => (
            <li
              className={`${item === selectDropdown ? "selected" : ""}`}
              key={index}
              onClick={() => handleSelect(item)}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
