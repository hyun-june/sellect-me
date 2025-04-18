import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import Chatting from "../../components/Chatting/Chatting";
import Button from "./../../components/Button/Button";
import { useEffect, useRef, useState } from "react";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsCameraVideoOff } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import "./VchatPage.css";

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
const user = "selleb";
const VchatPage = (props) => {
  const localVideoRef = useRef(null);
  const [localStream, setLocalStream] = useState(null); // 내 상태
  const [remoteStream, setRemoteStream] = useState(null); // 상대방 상태

  const [timer, setTimer] = useState(5); //여기가 설정 시간
  const [vchatStatus, setVchatStatus] = useState({
    selleb: {
      cam: false,
      mic: false,
    },
    sellecter: {
      cam: false,
      mic: false,
    },
  });

  useEffect(() => {
    if (timer === 0) return;
    const getMedia = async () => {
      let stream = null;

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (localVideoRef?.current) {
          localVideoRef.current.srcObject = stream;
        }

        setLocalStream(stream);

        stream.getVideoTracks().forEach((track) => {
          track.enabled = false;
        });

        stream.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });

        console.log(`${user}의 미디어 스트림이 초기화되었습니다.`);
      } catch (err) {
        console.log("스트림 에러:", err);
        alert("카메라 또는 마이크 접근에 실패했습니다. 권한을 확인해주세요.");
      }
    };
    getMedia();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [user]);

  useEffect(() => {
    if (timer === 0) {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
        console.log("시간이 끝나서 종료됨");
      }
    }
  }, [timer]);

  const guideMessage = (status) => (status ? "끄기" : "켜기");

  useEffect(() => {
    if (!localStream) return;

    const currentUserStatus = vchatStatus[user];
    // 비디오 트랙
    localStream.getVideoTracks().forEach((track) => {
      track.enabled = currentUserStatus.cam;
    });

    // 오디오 트랙
    localStream.getAudioTracks().forEach((track) => {
      track.enabled = currentUserStatus.mic;
    });

    console.log(`${user}의 미디어 상태 업데이트:`, currentUserStatus);
  }, [vchatStatus, localStream, user]);

  const handleCamMic = (e) => {
    const controller = e.currentTarget.value;

    setVchatStatus((prev) => {
      const updatedStatus = { ...prev };
      const [auth, type] = controller.split("_");

      if (auth === user) {
        updatedStatus[auth][type] = !prev[auth][type];
      } else {
        console.log(`다른 사용자(${auth})의 ${type}을 제어합니다.`);
        updatedStatus[auth][type] = !prev[auth][type];
      }
      return updatedStatus;

      // if (controller === "selleb_cam") {
      //   updatedStatus.selleb.cam = !prev.selleb.cam;
      // } else if (controller === "selleb_mic") {
      //   updatedStatus.selleb.mic = !prev.selleb.mic;
      // } else if (controller === "sellecter_cam") {
      //   updatedStatus.sellecter.cam = !prev.sellecter.cam;
      // } else if (controller === "sellecter_mic") {
      //   updatedStatus.sellecter.mic = !prev.sellecter.mic;
      // }
    });
  };

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
    const vchatMenu = e.currentTarget.value;
    console.log("클릭한 버튼:", vchatMenu);
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
            {/* <img src="/images/test.jpg" alt="" /> */}
            <video ref={localVideoRef} autoPlay playsInline />
            <div className="vchat_video_button">
              <span>Selleb</span>
              <div>
                <div className="video_button_item">
                  <button value="selleb_cam" onClick={handleCamMic}>
                    {vchatStatus.selleb.cam ? (
                      <GoDeviceCameraVideo />
                    ) : (
                      <BsCameraVideoOff />
                    )}
                  </button>
                  <span className="btn_guide">
                    {`카메라 ${guideMessage(vchatStatus.selleb.cam)}`}
                  </span>
                </div>
                <div className="video_button_item">
                  <button value="selleb_mic" onClick={handleCamMic}>
                    {vchatStatus.selleb.mic ? (
                      <CiMicrophoneOn />
                    ) : (
                      <CiMicrophoneOff />
                    )}
                  </button>
                  <span className="btn_guide">
                    {`마이크 ${guideMessage(vchatStatus.selleb.mic)}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="chat_vertical_line"></span>
          <div className="vchat_video_inner">
            <img src="/images/test1.png" alt="" />

            <div className="vchat_video_button">
              <span>Sellecter</span>
              <div>
                <div className="video_button_item">
                  <button value="sellecter_cam" onClick={handleCamMic}>
                    {vchatStatus.sellecter.cam ? (
                      <GoDeviceCameraVideo />
                    ) : (
                      <BsCameraVideoOff />
                    )}
                  </button>
                  <span className="btn_guide">
                    {`카메라 ${guideMessage(vchatStatus.sellecter.cam)}`}
                  </span>
                </div>
                <div className="video_button_item">
                  <button value="sellecter_mic" onClick={handleCamMic}>
                    {vchatStatus.sellecter.mic ? (
                      <CiMicrophoneOn />
                    ) : (
                      <CiMicrophoneOff />
                    )}
                  </button>
                  <span className="btn_guide">
                    {`마이크 ${guideMessage(vchatStatus.sellecter.mic)}`}
                  </span>
                </div>
              </div>
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

            <Button
              className="vchat_menu_btn"
              value="연장하기"
              onClick={handleVchat}
            >
              연장하기
            </Button>
            <Button
              className="vchat_menu_btn"
              value="문제해결"
              onClick={handleVchat}
            >
              문제 해결
            </Button>
            <Button
              className="vchat_menu_btn"
              value="나가기"
              onClick={handleVchat}
            >
              V-CHAT 나가기
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VchatPage;
