import { useNavigate } from "react-router-dom";
import CustomBox from "../../../../components/CustomBox/CustomBox";
import MainLayout from "../../../../components/Layout/MainLayout/MainLayout";
import { IoIosArrowBack } from "react-icons/io";
import Chatting from "../../../../components/Chatting/Chatting";
import "./ChattingPage.css";

const chattingMenu = [
  { content: "PROFILE", link: "/" },
  { content: "V-CHAT", link: "/" },
  { content: "견적 상세보기", link: "/" },
  { content: "주고받은 파일" },
];

// 유저 정보
const chatUserData = {
  other: {
    nickname: "모코모코",
    src: "https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png",
  },
  user: {
    nickname: "고양이",
    src: "https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
  },
};

// 이전 대화
const prevMessage = [
  { sender: "other", text: "안녕하세요!" },
  { sender: "other", text: "안녕하세요!" },
];

// 이전 파일 정보
const prevFile = {
  sender: "user",
  text: "테스트파일.pdf",
  file: "url",
  type: "file",
  fileType: "pdf",
};

const ChattingPage = (props) => {
  const navigate = useNavigate();

  const handleMenu = (item) => {
    navigate(item.link);

    if (item.content === "주고받은 파일") {
      console.log("파일");
    }
  };

  return (
    <MainLayout {...props}>
      <div className="chattingPage_container">
        <section className="chatting_menu">
          <button className="prev_btn" onClick={() => window.history.back()}>
            <IoIosArrowBack />
            CHAT 나가기
          </button>
          <div className="chatting_info">
            <img src={chatUserData.other.src} alt="" />
            <span>{chatUserData.other.nickname}</span>
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
          <Chatting
            userData={chatUserData}
            prevData={prevMessage}
            prevFile={prevFile}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default ChattingPage;
