import { FaQuestion } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import "./ServiceAi.css";
import { useState } from "react";

const ServiceAi = () => {
  const [isShowChat, setIsShowChat] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleAiChat = () => {
    setIsShowChat((prev) => !prev);
  };

  const handleMessage = () => {
    if (newMessage.trim() === "") return;
    setMessageList((prev) => [...prev, newMessage]);
    setNewMessage("");
  };

  const enterMessage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessage();
    }
  };

  return (
    <>
      <div className="service_sideNav" onClick={handleAiChat}>
        <span className="service_ai">
          <FaQuestion />
        </span>
        <span>AI 채팅봇</span>
      </div>
      {isShowChat && (
        <div className="ai_modal">
          <p>
            안녕하세요 Sellect AI봇입니다. <br />
            무엇을 도와드릴까요
          </p>
          <div className="ai_chatting">
            <span className="service_ai">
              <FaQuestion />
            </span>
            <div className="ai_chatting_inner">
              {messageList.map((message, index) => (
                <span className="message_item" key={index}>
                  {message}
                </span>
              ))}
            </div>
            <div className="ai_send_message">
              <input
                type="text"
                placeholder="문의할 내용을 전송해 주세요."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => enterMessage(e)}
              />
              <span className="ai_send_icon" onClick={handleMessage}>
                <FiSend />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceAi;
