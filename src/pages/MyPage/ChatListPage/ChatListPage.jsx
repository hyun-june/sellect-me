import { Link } from "react-router-dom";
import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import "./ChatListPage.css";

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

const ChatListPage = (props) => {
  // chatbox component
  const ChatBox = ({ src, name, des, date }) => {
    return (
      <Link to="/mypage/chatting" className="chat_content_box">
        {src ? (
          <img className="chat_box_img" src={src} alt={name} />
        ) : (
          <span className="chat_box_img" />
        )}
        <span className="chat_box_name">{name}</span>
        <span>{des}</span>
        <span className="chat_box_date">{date}</span>
      </Link>
    );
  };

  return (
    <MainLayout {...props}>
      <div className="chat_container">
        <h3>CHAT</h3>
        <section>
          {Object.entries(ChatPageData).map(([key, item]) => (
            <ChatBox
              key={key}
              src={item.src}
              name={item.name}
              des={item.des}
              date={item.date}
            />
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export default ChatListPage;
