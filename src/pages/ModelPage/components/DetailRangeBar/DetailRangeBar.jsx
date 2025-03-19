import { useState } from "react";
import "./DetailRangeBar.css";
import { useForm } from "react-hook-form";

const DetailRangeBar = ({ ...props }) => {
  const { title, setValue } = props;
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    setValue(title, e.target.value);
  };

  return (
    <div className="detail_range_container">
      <label>title</label>
      <div className="range_inner">
        <div className="range_minmax">
          <span>150</span>
          <span>200</span>
        </div>
        <input
          type="range"
          min="0"
          max="300"
          step="5"
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
