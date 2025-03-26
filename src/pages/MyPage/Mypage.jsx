import CustomBox from "../../components/CustomBox/CustomBox";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph/LineGraph";
import "./Mypage.css";

import { useRef, useState } from "react";

const boxListLeft = [
  { title: "프로필 관리", link: "/mypage/selleb" },
  { title: "CHAT", link: "/" },
  { title: "V-CHAT", link: "/" },
];
const boxListRight = [
  { title: "프로젝트 관리", link: "/" },
  { title: "관심있는 셀럽", link: "/" },
  { title: "V-V-CHAT 이용권", link: "/" },
];
const mypageMenu = [
  { name: "공지사항", address: "/" },
  { name: "고객센터", address: "/" },
  { name: "계정설정", address: "/" },
  { name: "로그아웃", address: "/" },
];

const graphData = ["5", "9", "11", "2", "3", "6"];
// 주석 풀면 드래그로 차트이동
// const graphData = [
//   "5",
//   "9",
//   "11",
//   "2",
//   "3",
//   "6",
//   "5",
//   "9",
//   "11",
//   "2",
//   "3",
//   "6",
// ];

const MyPage = () => {
  // const scrollRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - scrollRef.current.offsetLeft);
  //   setScrollLeft(scrollRef.current.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   const x = e.pageX - scrollRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   scrollRef.current.scrollLeft = scrollLeft - walk;
  // };
  return (
    <MainLayout>
      <div className="mypage_container">
        <h4>MY PAGE</h4>
        <section className="mypage_inner">
          <div className="mypage_inner_left">
            <ProfileImgBox src="/images/test.jpg" />
            <div>
              {boxListLeft.map((item, index) => (
                <a href={item.link} key={index}>
                  <CustomBox className="mypage_left_box">
                    {item.title}
                  </CustomBox>
                </a>
              ))}

              {/* 프로필 관리를 누르면 본인 프로필 페이지로 이동하면 될듯 */}
            </div>
          </div>
          <div className="mypage_inner_right">
            {boxListRight.map((item, index) => (
              <a href={item.link} key={index}>
                <CustomBox className="mypage_right_box" textAlign="left">
                  {item.title}
                </CustomBox>
              </a>
            ))}
          </div>
          <div className="mypage_menuList">
            <HamburgerMenu menu={mypageMenu} />
            <div className="mypage_icons">
              <FaRegCalendarCheck />
            </div>
            <div className="mypage_icons">
              <FaSackDollar />
            </div>
          </div>
        </section>

        <section className="mypage_graph_section">
          <h5>내 활동 그래프</h5>
          <div
          // ref={scrollRef}
          // className="scroll-container"
          // onMouseDown={handleMouseDown}
          // onMouseLeave={handleMouseLeave}
          // onMouseUp={handleMouseUp}
          // onMouseMove={handleMouseMove}
          >
            <LineGraph graphData={graphData} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default MyPage;
