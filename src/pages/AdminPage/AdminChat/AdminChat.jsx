import { useOutletContext } from "react-router-dom";
import "./AdminChat.css";

const AdminChat = () => {
  const { user } = useOutletContext();
  console.log("🚀 ~ AdminChat ~ user:", user);

  return <div>AdminChat</div>;
};

export default AdminChat;
