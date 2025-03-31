import MenuList from "./components/MenuList/MenuList";
import "./ModelSideBar.css";
const ModelSideBar = ({ data }) => {
  return (
    <div>
      <div className="sidebar_container">
        {Object.keys(data).map((key) => (
          <MenuList key={key} title={key} list={data[key]} />
        ))}
      </div>
    </div>
  );
};

export default ModelSideBar;
