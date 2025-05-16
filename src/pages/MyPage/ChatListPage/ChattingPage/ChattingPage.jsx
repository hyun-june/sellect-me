import { useNavigate } from "react-router-dom";
import CustomBox from "../../../../components/CustomBox/CustomBox";
import MainLayout from "../../../../components/Layout/MainLayout/MainLayout";
import { IoIosArrowBack } from "react-icons/io";
import Chatting from "../../../../components/Chatting/Chatting";
import "./ChattingPage.css";
import { useEffect, useState } from "react";

const user = "selleb";

const chattingMenu = [
  { content: "PROFILE", link: "mypage" },
  { content: "V-CHAT", link: "v-chat" },
  {
    content: `${{ selleb: "견적", sellecter: "제안서" }[user] || ""} 상세보기`,
    link: "quotation",
  },
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
const prevFile = [
  {
    sender: "user",
    fileName: "테스트파일.pdf",
    fileURL: "url",
    type: "file",
    fileType: "pdf",
  },
];

const ChattingPage = (props) => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState(prevFile);
  const [isShowFileList, setIsShowFileList] = useState(false);

  const handleFileData = (file) => {
    setFileData(file);
  };

  useEffect(() => {
    if (fileData.length === 0) {
      setIsShowFileList(false);
    }
  }, [fileData]);
  const handleMenu = (item) => {
    if (item.content === "주고받은 파일") {
      return setIsShowFileList((prev) => !prev);
    }
    navigate(`/${item.link}`);
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
                    textAlign="left"
                    className={index < 2 ? "color_blue" : ""}
                  >
                    {item.content}
                  </CustomBox>
                </button>
              ))}

              {/* {isShowFileList && (
                <div className="chatting_fileList">
                  {fileData.map((item, index) => (
                    <a
                      href={item?.fileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      {item?.fileName}
                    </a>
                  ))}
                </div>
              )} */}

              <div
                className={`chatting_fileList ${
                  isShowFileList ? "showFile" : "hideFile"
                }`}
              >
                {fileData.map((item, index) => (
                  <a
                    href={item?.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    {item?.fileName}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="chatting_section">
          <Chatting
            userData={chatUserData}
            prevData={prevMessage}
            prevFile={prevFile}
            updateFileData={handleFileData}
            inputType="file"
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default ChattingPage;
