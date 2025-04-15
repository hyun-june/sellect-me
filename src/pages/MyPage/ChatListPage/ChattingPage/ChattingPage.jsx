import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomBox from "../../../../components/CustomBox/CustomBox";
import MainLayout from "../../../../components/Layout/MainLayout/MainLayout";
import { IoIosArrowBack } from "react-icons/io";
import "./ChattingPage.css";

const chattingMenu = [
  { content: "PROFILE", link: "/" },
  { content: "V-CHAT", link: "/" },
  { content: "견적 상세보기", link: "/" },
  { content: "주고받은 파일" },
];

const ChattingPage = (props) => {
  const navigate = useNavigate();

  const handleMenu = (item) => {
    navigate(item.link);

    if (item.content === "주고받은 파일") {
      console.log("파일");
    }
  };

  // laravel mix
  //   const handleMenu = (item)=>{
  //     router.visit(`/${item.link}`)
  //   }

  return (
    <MainLayout {...props}>
      <div className="chatting_container">
        <section className="chatting_menu">
          <button className="prev_btn" onClick={() => window.history.back()}>
            <IoIosArrowBack />
            CHAT 나가기
          </button>
          <div className="chatting_info">
            <img src="/images/test.jpg" alt="" />
            <span>이름임</span>
            <div className="chatting_menu_list">
              {chattingMenu.map((item, index) => (
                <button key={index} onClick={() => handleMenu(item)}>
                  <CustomBox
                    key={index}
                    innerText={item.content}
                    textAlign="left"
                    className={index < 2 ? "color_blue" : ""}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="chatting_section">
          <div className="start_message">
            <span>CHAT을 시작했습니다!</span>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ChattingPage;
