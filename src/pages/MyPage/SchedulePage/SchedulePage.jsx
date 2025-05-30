import { useState } from "react";
import { Calendar } from "react-calendar";
import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import "react-calendar/dist/Calendar.css";
import "./SchedulePage.css";

const SchedulePage = (props) => {
  const [value, setValue] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [memoInput, setMemoInput] = useState("");
  const [memoData, setMemoData] = useState({
    "2025-05-14": "운동함",
    "2025-05-15": ["스터디참여", "ddddddddddddddddd", "fffff"],
  });

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date.getDay() === 0) {
        return "sunday";
      }
      return "not_sunday";
    }
    return null;
  };

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;

    const memoText = memoData[formatDate(date)];

    return (
      <div className="calendar_memo">
        {Array.isArray(memoText)
          ? memoText.map((item, idx) => <div key={idx}>{item}</div>)
          : memoText && <div>{memoText}</div>}
      </div>
    );
  };

  const formatDate = (date) => {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1).padStart(2, "0");
    const day = String(date?.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const MAX_MEMO_LENGTH = 40;

  const handleAddMemo = () => {
    if (!value || !memoInput.trim()) return;

    const dateKey = formatDate(value);
    const currentMemos = memoData[dateKey] || [];

    if (currentMemos.length >= 3) {
      alert("최대 3개의 메모만 추가할 수 있습니다.");
      return;
    }

    setMemoData((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), memoInput.trim()],
    }));

    setMemoInput("");
  };

  const totalMemoLength = memoData[formatDate(value)]
    ? memoData[formatDate(value)].reduce((sum, memo) => sum + memo.length, 0)
    : 0;

  const currentMemoLength = totalMemoLength + memoInput.length;

  const handleDeleteMemo = (dateKey, index) => {
    setMemoData((prev) => {
      const updated = [...(prev[dateKey] || [])];
      updated.splice(index, 1);
      if (updated.length === 0) {
        const { [dateKey]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [dateKey]: updated,
      };
    });
  };

  const handleMemoInputChange = (e) => {
    const newMemo = e.target.value;
    if (totalMemoLength + newMemo.length <= MAX_MEMO_LENGTH) {
      setMemoInput(newMemo);
    }
  };

  const handleClickDay = (date) => {
    setValue(date);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setMemoInput("");
    setShowModal(false);
  };

  return (
    <MainLayout {...props}>
      <div className="schedule_container">
        <h3>MY PAGE - CALENDAR</h3>

        <Calendar
          tileClassName={tileClassName}
          tileContent={tileContent}
          value={value}
          calendarType="Hebrew"
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => date.getDate()}
          formatMonthYear={(locale, date) => `${date.getMonth() + 1}`}
          onClickDay={handleClickDay}
        />
      </div>
      {showModal && value && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <h3>{formatDate(value)} 메모</h3>

            <div className="memo_lists">
              {Array.isArray(memoData[formatDate(value)]) &&
                memoData[formatDate(value)].map((memo, idx) => (
                  <div key={idx} className="memo_item">
                    <span>{`${idx + 1}. ${memo}`}</span>
                    <button
                      onClick={() => handleDeleteMemo(formatDate(value), idx)}
                    >
                      삭제
                    </button>
                  </div>
                ))}
            </div>

            <div>
              <input
                type="text"
                value={memoInput}
                onChange={handleMemoInputChange}
                placeholder="메모를 입력하세요."
                maxLength={MAX_MEMO_LENGTH - 1}
              />
              <div>
                {currentMemoLength}/{MAX_MEMO_LENGTH}자
              </div>
            </div>
            <div className="modal_btn_section">
              <button
                onClick={handleAddMemo}
                disabled={
                  currentMemoLength > MAX_MEMO_LENGTH ||
                  memoData[formatDate(value)]?.length >= 3
                }
              >
                추가
              </button>
              <button onClick={handleModalClose}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default SchedulePage;
