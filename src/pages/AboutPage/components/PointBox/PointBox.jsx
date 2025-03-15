import "./PointBox.css";

const points = [
  { id: 1, content: "안전한 에스크로 결제 시스템" },
  { id: 2, content: "빠르게 확인하는 V-CHAT" },
  { id: 3, content: "쉽게 찾는 셀럽 & 셀렉트" },
  { id: 4, content: "디테일한 섭외 및 견적 관리" },
];

const PointBox = ({ pointBoxIndex }) => {
  return (
    <>
      {points.map((item, index) => (
        <div
          key={index}
          className={`point_box ${
            index < pointBoxIndex ? "point_visible" : ""
          }`}
        >
          <div className="point_title">POINT 0{item.id}</div>
          <div className="point_text">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default PointBox;
