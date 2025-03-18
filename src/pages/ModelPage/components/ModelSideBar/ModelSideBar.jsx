import { useEffect, useState } from "react";

import "./ModelSideBar.css";
import MenuList from "./components/MenuList/MenuList";

const modelMenu = {
  모델: [
    "피팅모델",
    "방송/CF/뮤비 모델",
    "잡지/지면/화보 모델",
    "패션쇼/워킹 모델",
    "부분모델",
    "특수 피팅 모델",
    "레이싱/라운드 모델",
    "시니어 모델",
    "아동 모델",
  ],
  배우: ["배우 테스트1", "배우 테스트2"],
  나레이터: ["나레이터 테스트1", "나레이터 테스트2"],
  기타: ["방송인 테스트1", "방송인 테스트2"],
};

const ModelSideBar = () => {
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
    <div className="sidebar_container" style={{ top: sideBarPosition }}>
      <MenuList title="모델" list={modelMenu.모델} />
      <MenuList title="배우" list={modelMenu.배우} />
      <MenuList title="나레이터" list={modelMenu.나레이터} />
      <MenuList title="기타 방송인" list={modelMenu.기타} />
    </div>
  );
};

export default ModelSideBar;
