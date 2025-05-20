import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import LoginLinks from "../LoginLinks";
import { FaBell } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import { useState } from "react";
import AlarmBox from "./components/AlarmBox/AlarmBox";

const testAlarm = [
  { date: "2025-05-18", type: "notice", read: false },
  { date: "2025-05-17", type: "request", read: false },
  {
    date: "2025-05-17",
    type: "info",
    message: "프로필이미지 변경 기한이 30일 남았습니다!",
    read: false,
  },
  { date: "2025-05-18", type: "notice", read: false },
  { date: "2025-05-17", type: "request", read: false },
  {
    date: "2025-05-17",
    type: "info",
    message: "프로필이미지 변경 기한이 30일 남았습니다!",
    read: false,
  },
];

const Navigation = () => {
  const [openAlarm, setOpenAlarm] = useState(false);

  const [alarms, setAlarms] = useState(testAlarm);
  const location = useLocation();
  const showSearchBarPages = ["/"]; // 배열 안에 경로 입력하면 searchbar 표시됨

  const user = "min"; //user가 있으면 ? 로그인 상태니까 알람을 보여주고, 없으면 로그인을 보여줌

  const unreadCount = alarms.filter((a) => !a.read).length;

  const handleMarkAsRead = (index) => {
    setAlarms((prev) =>
      prev.map((a, i) => (i === index ? { ...a, read: true } : a))
    );
  };

  const handleOpenAlarm = () => {
    if (unreadCount === 0) {
      return;
    }
    setOpenAlarm(!openAlarm);
  };

  return (
    <>
      <Navbar>
        <div className="navContainer">
          <Navbar.Brand href="/">
            <img className="logoImg" src="/images/logo-outline.png" alt="" />
          </Navbar.Brand>

          {showSearchBarPages.includes(location.pathname) && <SearchBar />}
          <Navbar.Collapse className="navbar_alarm_login">
            {user ? (
              <div className="nav_alarm">
                <FaBell className="alarm_icon" onClick={handleOpenAlarm} />
                {unreadCount > 0 && (
                  <span className="alarm_count">{unreadCount}</span>
                )}
                {openAlarm ? (
                  <div className="alarm_modal">
                    <AlarmBox data={alarms} onMarkAsRead={handleMarkAsRead} />
                  </div>
                ) : null}
              </div>
            ) : (
              <LoginLinks />
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
