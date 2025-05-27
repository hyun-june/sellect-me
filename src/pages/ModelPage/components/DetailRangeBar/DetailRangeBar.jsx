import { useState } from "react";
import "./DetailRangeBar.css";

const DetailRangeBar = ({ ...props }) => {
  const { title, setValue, min, max, step, unit } = props;
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    setValue(title, e.target.value);
  };

  const changeNum = (num) => {
    return parseInt(num, 10).toLocaleString();
  };

  return (
    <div className="detail_range_container">
      <div className="detail_title">
        <label>{title}</label>
        <span>
          {changeNum(rangeValue)}
          {unit} 이상
        </span>
      </div>

      <div className="range_inner">
        <div className="range_minmax">
          <span>{changeNum(min)}</span>
          <span>{changeNum(max)}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          className="select_range"
          id={title}
          value={rangeValue}
          onChange={handleRangeValue}
        />
      </div>
    </div>
  );
};

export default DetailRangeBar;
