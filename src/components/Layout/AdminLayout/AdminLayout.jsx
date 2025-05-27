import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import "./AdminLayout.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const adminTabMenu = [
  { title: "대시보드", link: "dashboard" },
  { title: "회원관리", link: "user" },
  { title: "CHAT", link: "chat" },
  { title: "정산관리", link: "account" },
  { title: "고객센터", link: "service" },
  { title: "메뉴관리", link: "menu" },
];

const menu = [
  { name: "Home(1)", address: "/" },
  { name: "about(1)", address: "/about" },
];

const AdminLayout = ({ ...props }) => {
  const location = useLocation();
  const url = location.pathname.replace("/admin", "");

  const user = [
    { id: 1, nickname: "user123", name: "김철수", userType: "selleb" },
    { id: 2, nickname: "user456", name: "박영희", userType: "sellecter" },
  ];

  // 여기서 유저 데이터를 받아와서 outlet에 넘겨주기

  return (
    <div className="admin_container">
      <div className="admin_tabs">
        <a href="/" className="admin_logo">
          <img src="/images/logo-outline.png" alt="" />
        </a>
        <div className="admin_tabs_menu">
          {adminTabMenu.map((item, index) => (
            <Link
              key={index}
              to={`/admin/${item.link}`}
              className={url.startsWith(`/${item.link}`) ? "current" : ""}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="admin_inner">
        <Outlet context={{ user }} />
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

export default AdminLayout;
