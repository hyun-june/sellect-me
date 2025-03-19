import { useEffect, useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import "./ModelSideBar.css";

const ModelSideBar = ({ data }) => {
  const [sideBarPosition, setSideBarPosition] = useState(0);

  const handelScroll = () => {
    const barPosition = 50 + window.scrollY;
    setSideBarPosition(barPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <div>
      <div className="sidebar_container" style={{ top: sideBarPosition }}>
        {Object.keys(data).map((key) => (
          <MenuList key={key} title={key} list={data[key]} />
        ))}
      </div>
    </div>
  );
};

export default ModelSideBar;
