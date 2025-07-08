import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CustomCalendar.css";

const CustomCalendar = ({ ...props }) => {
  const { label, id, setValue, value } = props;
  const [calendarDate, setCalendarDate] = useState();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date.getDay() === 0) {
        return "sunday";
      }
      return "not_sunday";
    }
    return null;
  };

  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleDateChange = (id, date) => {
    const formattedDate = formatDate(date);
    setCalendarDate((prev) => ({
      ...prev,
      [id]: formattedDate,
    }));

    setValue(id, formattedDate);
    setCalendarOpen(false);
  };

  useEffect(() => {
    if (!value) {
      setCalendarDate((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    } else {
      setCalendarDate((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  }, [value, id]);

  return (
    <div className="customCalendar_container">
      <div className="customCalendar_label_section">
        <label>{label}</label>
        <p onClick={() => setCalendarOpen((prev) => !prev)}>
          {calendarDate?.[id] ? calendarDate[id] : <span>날짜 선택</span>}
        </p>
        <button onClick={() => setCalendarOpen((prev) => !prev)} type="button">
          <span>{calendarOpen ? "▲" : "▼"} </span>
        </button>
      </div>
      {calendarOpen && (
        <Calendar
          tileClassName={tileClassName}
          calendarType="Hebrew"
          onChange={(date) => handleDateChange(id, date)}
          formatDay={(locale, date) => date.getDate()}
          value={value ? new Date(value) : null}
        />
      )}
    </div>
  );
};

export default CustomCalendar;
