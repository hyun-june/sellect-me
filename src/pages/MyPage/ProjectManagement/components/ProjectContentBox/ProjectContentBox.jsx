import { useState } from "react";
import "./ProjectContentBox.css";

const ProjectContentBox = ({
  name = "AAA",
  description = "AAACF 촬영",
  date = "10.21",
  src = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMemo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="project_content_box">
        {src ? (
          <img className="content_box_img" src={src} />
        ) : (
          <span className="content_box_img" />
        )}

        <span className="content_box_name">{name}</span>
        <span>{description}</span>
        <span>{date}</span>
        <button
          onClick={handleMemo}
          className={`content_box_memo ${isOpen ? "memo_active" : ""}`}
        >
          메모
        </button>
      </div>
      {/* 
      {isOpen && (
        <div className={`content_box_memo_inner ${isOpen ? "open" : ""}`}>
          <p>LLL 매트리스 제품 화보 촬영</p>
          <p>파주 000 스튜디오</p>
          <p>09:00~15:00</p>
          <p>
            의상 : 흰 상의 + 청바지 + 흰 운동화 / 플라워 패턴 원피스 + 베이지
            단화 / 흰 잠옷 원피스
          </p>
        </div>
      )} */}
      <div className={`content_box_memo_inner ${isOpen ? "open" : ""}`}>
        <p>LLL 매트리스 제품 화보 촬영</p>
        <p>파주 000 스튜디오</p>
        <p>09:00~15:00</p>
        <p>
          의상 : 흰 상의 + 청바지 + 흰 운동화 / 플라워 패턴 원피스 + 베이지 단화
          / 흰 잠옷 원피스
        </p>
      </div>
    </div>
  );
};

export default ProjectContentBox;
