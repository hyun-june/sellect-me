import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import "./VchatPage.css";
import Chatting from "../../components/Chatting/Chatting";
import Button from "./../../components/Button/Button";
import { useEffect, useState } from "react";

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
const VchatPage = (props) => {
  const [timer, setTimer] = useState(5); //여기가 설정 시간

  useEffect(() => {
    if (timer === 0) return;

    const minusTime = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(minusTime);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(minusTime);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleVchat = (e) => {
    const action = e.currentTarget.value;
    console.log("클릭한 버튼:", action);
  };

  return (
    <MainLayout {...props}>
      <div className="vchat_container">
        <div className="vchat_header">
          <p>V-CHAT를 시작했습니다!</p>
          <p>모든 통화내용 및 화면은 SELLECT에 기록됩니다.</p>

          <span>남은시간 {formatTime(timer)}</span>
        </div>

        <div className="vchat_video_section">
          <div className="vchat_video_inner">
            <img src="/images/test.jpg" alt="" />
            <div>
              <span>Selleb</span>
              <span>카메라 마이크</span>
            </div>
          </div>
          <span className="chat_vertical_line"></span>
          <div className="vchat_video_inner">
            <img src="/images/test1.png" alt="" />
            <div>
              <span>Selleb</span>
              <span>카메라 마이크</span>
            </div>
          </div>
        </div>
        <div className="vchat_chatting_section">
          <div className="vchat_chatting">
            <Chatting userData={chatUserData} />
          </div>
          <div className="vchat_btn_section">
            {timer === 0 && (
              <div className="vchat_alarm_box">이용 시간이 종료되었습니다.</div>
            )}

            {timer > 0 && timer <= 60 && (
              <div className="vchat_alarm_box">이용 시간이 1분 남았습니다.</div>
            )}

            <Button className="vchat_btn" value="extend" onClick={handleVchat}>
              연장하기
            </Button>
            <Button className="vchat_btn" value="report" onClick={handleVchat}>
              문제 해결
            </Button>
            <Button className="vchat_btn" value="exit" onClick={handleVchat}>
              V-CHAT 나가기
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VchatPage;
