import CustomTabs from "./../../components/CustomTabs/CustomTabs";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import AdminUser from "./components/AdminUser/AdminUser";
import AdminChat from "./components/AdminChat/AdminChat";
import AdminAccounting from "./components/AdminAccounting/AdminAccounting";
import AdminService from "./components/AdminService/AdminService";
import AdminMenu from "./components/AdminMenu/AdminMenu";
import "./AdminPage.css";

const tabItems = [
  {
    title: "대시보드",
    content: <AdminDashboard />,
  },
  {
    title: "회원관리",
    content: <AdminUser />,
  },
  ,
  {
    title: "CHAT",
    content: <AdminChat />,
  },
  {
    title: "정산관리",
    content: <AdminAccounting />,
  },
  {
    title: "고객센터",
    content: <AdminService />,
  },
  {
    title: "메뉴관리",
    content: <AdminMenu />,
  },
];

const menu = [
  { name: "Home(1)", address: "/" },
  { name: "about(1)", address: "/about" },
];

const AdminPage = () => {
  return (
    <div className="admin_container">
      <div className="admin_tabs">
        <a href="/" className="admin_logo">
          <img src="/images/logo-outline.png" alt="" />
        </a>
        <CustomTabs items={tabItems} />
      </div>

      <div className="admin_hamburger">
        <HamburgerMenu menu={menu} />
      </div>
      <a href="/" className="admin_site_link">
        사이트 바로가기
      </a>
    </div>
  );
};

export default AdminPage;
