import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import "./VchatPage.css";
import CardBox from "./../../components/CardBox/CardBox";

const VchatPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="vchat_container">
        <div className="vchat_header">
          <p>V-CHAT를 시작했습니다!</p>
          <p>모든 통화내용 및 화면은 SELLECT에 기록됩니다.</p>

          <span>남은시간 00:59</span>
        </div>

        <div className="vchat_video_section">
          <div className="vchat_video_inner">
            <img src="/images/test.jpg" alt="" />
            <div>
              <span>Selleb</span>
              <span>카메라 마이크</span>
            </div>
          </div>
          <div className="vchat_video_inner">
            <img src="/images/test1.png" alt="" />
            <div>
              <span>Selleb</span>
              <span>카메라 마이크</span>
            </div>
          </div>
        </div>
        <div className="vchat_chatting_section">
          <div>채팅</div>
          <div>버튼들</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VchatPage;
