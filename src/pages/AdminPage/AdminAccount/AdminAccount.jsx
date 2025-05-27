import { useOutletContext } from "react-router-dom";
import "./AdminAccount.css";

const AdminAccount = () => {
  const { user } = useOutletContext();
  console.log("🚀 ~ AdminAccount ~ user:", user);

  return <div>AdminAccounting</div>;
};

export default AdminAccount;
