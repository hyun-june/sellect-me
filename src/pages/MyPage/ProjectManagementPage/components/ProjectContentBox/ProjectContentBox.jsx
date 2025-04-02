import { useState } from "react";
import "./ProjectContentBox.css";

const ProjectContentBox = ({
  name,
  description,
  date,
  status,
  key,
  memo,
  id,
  src = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const statusMessage = {
    send: "",
    approve: "확인",
    processing: "입금 전",
    done: "입금완료",
  };
  // 여기서 확인 버튼을 누르면 진행 중으로 상태를 변경해야 할 것 같음
  const handleMemo = () => {
    if (!memo || memo.length === 0) {
      return alert("메모가 없습니다.");
    }
    const uniqueKey = `${status}-${id}`;
    setIsOpen((prev) => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  };

  return (
    <div>
      <div className="project_content_box">
        {src ? (
          <img className="content_box_img" src={src} alt="" />
        ) : (
          <span className="content_box_img" />
        )}

        <span className="content_box_name">{name}</span>
        <span>{description}</span>
        <span className="content_box_date">{date}</span>
        <span className="content_box_status">{statusMessage[status]}</span>
        <button
          onClick={handleMemo}
          className={`content_box_memo ${
            isOpen[`${status}-${id}`] ? "memo_active" : ""
          }`}
        >
          메모
        </button>
      </div>

      {isOpen[`${status}-${id}`] && (
        <div className="content_box_memo_inner open">
          {memo.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectContentBox;
