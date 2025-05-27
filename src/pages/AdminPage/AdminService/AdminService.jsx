import { useOutletContext } from "react-router-dom";
import "./AdminService.css";

const AdminService = () => {
  const { user } = useOutletContext();
  console.log("🚀 ~ AdminService ~ user:", user);

  return <div>AdminService</div>;
};

export default AdminService;
