import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import LineGraph from "../../components/LineGraph/LineGraph";
import { useEffect, useState } from "react";

import CustomDropdown from "./../../components/CustomDropdown/CustomDropdown";
import "./Mypage.css";

const MyPage = (props) => {
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

  const user = "selleb";
  const username = "김고라니";

  const month = new Date().getMonth() + 1;

  const calendarMemo = [
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
    { date: "2025-09-10", memo: "이게 10일" },
    { date: "2025-09-11", memo: "이게 11일" },
  ];

  const ChatPageData = {
    1: {
      name: "김땡땡",
      des: "프로젝트 파일 보내드립니다.",
      date: "10.24",
    },
    2: {
      src: "/images/test.jpg",
      name: "김복자",
      des: "테스트 파일 보내드립니다.",
      date: "10.20",
    },
  };

  const ChatBox = ({ src, name, des, date }) => {
    return (
      <a href="/mypage/chatting" className="chat_content_box">
        <div className="chat_inner">
          {src ? (
            <img className="chat_box_img" src={src} alt={name} />
          ) : (
            <span className="chat_box_img" />
          )}

          <div className="chat_box_info">
            <span className="chat_box_name">{name}</span>
            <span className="des">{des}</span>
          </div>
        </div>

        <span className="chat_box_date">{date}</span>
      </a>
    );
  };

  return (
    <MainLayout {...props}>
      <div className="mypage_container">
        <section className="mypage_profile_banner">
          <div className="mypage_banner_info">
            <h3>{username}</h3>
            <p>
              현재 {username}님은 {user}입니다.
            </p>
            <p>가입일: 2025.09.11</p>
          </div>
          <div className="mypage_banner_count">
            <div className="mypage_banner_item">
              <span>완료</span>
              <strong>10</strong>
            </div>
          </div>
        </section>

        <section className="mypage_view">
          <div>
            <ProfileImgBox src="/images/test.jpg" />
            <div className="mypage_profile_link">
              <a href="/mypage/selleb">내 프로필</a>
              <a href="/mypage/selleb">V-CHAT</a>
            </div>
          </div>
          <div className="mypage_preview">
            <div className="mypage_preview_item">
              <div className="mypage_preview_title">
                <a href="mypage/schedule">
                  <h5>Calendar</h5>
                </a>
                <strong>{month}월</strong>
              </div>

              {calendarMemo.length > 0 ? (
                calendarMemo.map(({ date, memo }, index) => (
                  <div
                    className={`mypage_calendar ${index === 0 ? "first" : ""}`}
                    key={index}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <p>{memo} </p>
                  </div>
                ))
              ) : (
                <p>등록된 일정이 없습니다.</p>
              )}
            </div>

            <div className="mypage_preview_item">
              <a href="mypage/chatlist">
                <h5>Chat</h5>

                {Object.entries(ChatPageData).map(([key, item]) => (
                  <ChatBox
                    key={key}
                    src={item.src}
                    name={item.name}
                    des={item.des}
                    date={item.date}
                  />
                ))}
              </a>
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
