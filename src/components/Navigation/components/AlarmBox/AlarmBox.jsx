import "./AlarmBox.css";

const AlarmBox = ({ data, onMarkAsRead }) => {
  const typeLabels = {
    notice: "공지사항임",
    request: "섭외 의뢰임",
    info: "안내 메시지",
  };
  return (
    <div>
      {data.map((item, index) => {
        if (item.read) return null;
        const alarmData = item.date.slice(5, 10).replace("-", ".");
        const typeMessage = typeLabels[item.type] || "";
        return (
          <div
            key={index}
            className="alarmbox_inner"
            onClick={() => onMarkAsRead(index)}
          >
            <div>{alarmData}</div>
            <div className="alarmbox_message">
              {item.message ? (
                <span>{item.message}</span>
              ) : (
                <span>{typeMessage}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlarmBox;
