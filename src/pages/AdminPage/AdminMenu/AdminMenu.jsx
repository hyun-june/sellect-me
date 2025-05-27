import "./AdminMenu.css";
import { useOutletContext } from "react-router-dom";
const AdminMenu = () => {
  const { user } = useOutletContext();
  console.log("🚀 ~ AdminMenu ~ user:", user);
  return <div>AdminMenu</div>;
};

export default AdminMenu;
