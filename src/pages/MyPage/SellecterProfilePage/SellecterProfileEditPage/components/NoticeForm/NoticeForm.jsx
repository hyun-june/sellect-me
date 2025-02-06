import { useState, useEffect } from "react";
import "./NoticeForm.css";

const NoticeForm = ({ noticeText, onSave }) => {
  const [text, setText] = useState(noticeText || ``);

  const handleChange = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);
    autoResize(e.target);
    onSave(updatedText);
  };

  useEffect(() => {
    if (noticeText !== text) {
      onSave(text);
    }
  }, [text, noticeText, onSave]);

  const autoResize = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="notice_container">
      <div>
        <h4>공고 작성</h4>
        <div>
          <textarea
            value={text}
            onChange={handleChange}
            rows="10"
            placeholder="공고문 내용을 작성하세요."
          ></textarea>
        </div>
      </div>

      <div>
        <h4>미리보기</h4>
        <div className="notice_preview">
          {text || "공고문 내용을 입력하면 여기에 표시됩니다."}
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
