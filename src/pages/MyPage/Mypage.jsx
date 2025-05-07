import CustomBox from "../../components/CustomBox/CustomBox";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph/LineGraph";
import { useEffect, useRef, useState } from "react";
import CustomDropdown from "./../../components/CustomDropdown/CustomDropdown";
import "./Mypage.css";

const boxListLeft = {
  selleb: [
    { title: "프로필 관리", link: "/mypage/selleb" },
    { title: "CHAT", link: "/mypage/chatting" },
    { title: "V-CHAT", link: "/v-chat" },
  ],
  sellecter: [
    { title: "프로필 관리", link: "/mypage/sellecter" },
    { title: "CHAT", link: "/mypage/chatting" },
    { title: "V-CHAT", link: "/v-chat" },
  ],
};
const boxListRight = {
  selleb: [
    { title: "프로젝트 관리", link: "/mypage/projectManage" },
    { title: "관심있는 셀렉터", link: "/mypage/favorites" },
    { title: "섭외요청 확인", link: "/" },
  ],
  sellecter: [
    { title: "프로젝트 관리", link: "/mypage/projectManage" },
    { title: "관심있는 셀럽", link: "/mypage/favorites" },
    { title: "V-CHAT 이용권", link: "/v-chat/ticket" },
  ],
};
const mypageMenu = [
  { name: "공지사항", address: "/" },
  { name: "고객센터", address: "/" },
  { name: "계정설정", address: "/" },
  { name: "로그아웃", address: "/" },
];

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

const MyPage = (props) => {
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

  const dateData = ["2025", "2024"];
  const [selectedYear, setSelectedYear] = useState(dateData[0]);
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const graphData = {
    2025: {
      1: "5",
      2: "9",
      3: "11",
      4: "0",
      5: "0",
      6: "0",
      7: "0",
      8: "0",
      9: "0",
      10: "10",
      11: "0",
      12: "0",
    },
    2024: {
      1: "2",
      2: "3",
      3: "6",
      4: "0",
      5: "0",
      6: "0",
      7: "0",
      8: "0",
      9: "0",
      10: "0",
      11: "0",
      12: "0",
    },
  };

  useEffect(() => {
    console.log("선택된 연도:", selectedYear);
  }, [selectedYear]);

  // const date = new Date();
  // const dateDropDown = [];

  // for (let i = 0; i < dateData.length; i++) {
  //   const month = date.getMonth() + 1 - i;
  //   const year = date.getFullYear();

  //   const prevMonth = month > 0 ? month : 12 + month;
  //   const prevYear = month > 0 ? year : year - 1;

  //   dateDropDown.push(`${prevYear}년 `);
  // }

  const user = "selleb";

  return (
    <MainLayout {...props}>
      <div className="mypage_container">
        <h4>MY PAGE</h4>
        <section className="mypage_inner">
          <div className="mypage_inner_left">
            <ProfileImgBox src="/images/test.jpg" />
            <div>
              {boxListLeft[user]?.map((item, index) => (
                <a href={item.link} key={index} className="mypage_left_box">
                  <CustomBox>{item.title}</CustomBox>
                </a>
              ))}

              {/* 프로필 관리를 누르면 본인 프로필 페이지로 이동하면 될듯 */}
            </div>
          </div>
          <div className="mypage_inner_right">
            {boxListRight[user].map((item, index) => (
              <a href={item.link} key={index} className="mypage_right_box">
                <CustomBox>{item.title}</CustomBox>
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
          <div className="graph_dropdown">
            <h5>내 활동 그래프</h5>

            <CustomDropdown list={dateData} onChange={handleYearChange} />
          </div>

          <div
            // ref={scrollRef}
            className="scroll-container"
            // onMouseDown={handleMouseDown}
            // onMouseLeave={handleMouseLeave}
            // onMouseUp={handleMouseUp}
            // onMouseMove={handleMouseMove}
          >
            <LineGraph
              graphData={graphData[selectedYear]}
              selectedData={selectedYear}
            />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default MyPage;
