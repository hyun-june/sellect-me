import { useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import "./ModelSideBar.css";

const ModelSideBar = ({ data, selectedMenu, setSelectedMenu, ...props }) => {
  return (
    <div className="sidebar_container">
      {Object.keys(data).map((key) => (
        <MenuList
          key={key}
          title={key}
          list={data[key]}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      ))}
    </div>
  );
};

export default ModelSideBar;
