import { useEffect, useRef, useState } from "react";
import FileContent from "./components/FileContent/FileContent";
import "./Chatting.css";

const Chatting = () => {
  const chattingUserData = {
    other: {
      nickname: "모코모코",
      src: "https://png.pngtree.com/png-clipart/20220112/ourmid/pngtree-cartoon-hand-drawn-default-avatar-png-image_4154232.png",
    },
    user: {
      nickname: "고양이",
      src: "https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    },
  };

  const basicProfile =
    "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800";

  const [messages, setMessages] = useState([
    { sender: "other", text: "안녕하세요!" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [fileList, setFileList] = useState([{ sender: "other", name: "pdf" }]);
  const [newFile, setNewFile] = useState(null);
  const fileInputRef = useRef(null);
  const objectURLs = useRef([]);

  useEffect(() => {
    return () => {
      objectURLs.current.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === "" && !newFile) return;

    if (newMessage.trim()) {
      const userMessage = { sender: "user", text: newMessage };
      setMessages([...messages, userMessage]);
    }

    if (newFile) {
      const fileURL = URL.createObjectURL(newFile);
      objectURLs.current.push(fileURL);
      const userFile = {
        sender: "user",
        text: newFile.name,
        file: fileURL,
        type: "file",
        fileType: newFile.type,
      };

      setMessages((prev) => [...prev, userFile]);
      setFileList((prev) => [...prev, userFile]);
      setNewFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
    setNewMessage("");
  };

  const enterMessage = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }

    if (e.key === "Backspace" && newFile) {
      setNewFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFile(file);
    }
  };

  console.log("메세지", messages);
  console.log("파일", fileList);

  return (
    <div className="chatting_container">
      <div className="start_message">
        <span>CHAT을 시작했습니다!</span>
      </div>
      <div className="message_section">
        {messages.map((message, index) => {
          const userProfile =
            chattingUserData[message.sender]?.src || basicProfile;

          const isGroup =
            index === 0 || messages[index - 1].sender !== message.sender;
          return (
            <div
              className={`message_box ${
                message.sender === "user" ? "user" : "other"
              }`}
            >
              {isGroup ? (
                <img className="profile" src={userProfile} />
              ) : (
                <div className="profile" />
              )}

              <div
                key={index}
                className={`message ${
                  message.sender === "user" ? "user" : "other"
                }`}
              >
                {message.type === "file" ? (
                  <FileContent message={message} />
                ) : (
                  <pre className="message-content">{message.text}</pre>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="send_message">
        <input
          type="file"
          id="file"
          onChange={(e) => uploadFile(e)}
          ref={fileInputRef}
        />
        <label htmlFor="file">➕</label>

        <textarea
          placeholder="메세지를 입력해주세요."
          value={newFile ? `${newFile.name}` : newMessage}
          onChange={(e) => {
            if (!newFile) {
              setNewMessage(e.target.value);
            }
          }}
          onKeyDown={(e) => enterMessage(e)}
        />

        <button onClick={sendMessage}>🔺</button>
      </div>
    </div>
  );
};

export default Chatting;
