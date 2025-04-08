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
    approve: "",
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

  const handleDone = (e) => {
    const type = e.currentTarget.dataset.type;

    if (type.includes("selleb")) {
      console.log("셀럽 확인하기", type);
    } else if (type.includes("sellecter")) {
      console.log("셀렉터 결제하기", type);
    }
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
          {status.includes("approve") ? "확인" : "메모"}
        </button>
      </div>
      {isOpen[`${status}-${id}`] && (
        <div className="content_box_memo_inner open">
          <div className="content_memo_form">
            {memo.map((item) => (
              <div className="content_memo" key={item.id}>
                {item.label && <p className="memo_label">{item.label}</p>}
                <p className="memo_label_content">{item.content}</p>
              </div>
            ))}

            {status.includes("approve") && (
              <button
                onClick={handleDone}
                data-type={
                  status.includes("selleb")
                    ? "selleb_approve"
                    : status.includes("sellecter")
                    ? "sellecter_approve"
                    : ""
                }
              >
                {status.includes("selleb")
                  ? "완료 요청하기"
                  : status.includes("sellecter")
                  ? "결제하기"
                  : ""}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectContentBox;
