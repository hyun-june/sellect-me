import { useState } from "react";
import "./CustomTabs.css";

const CustomTabs = ({ defaultIdx = 0, items = [], ...props }) => {
  const [tabIdx, setTabIdx] = useState(defaultIdx);

  return (
    <div className="customTabs-container" {...props}>
      <ul className="customTabs-header">
        {items?.map(({ title }, i) => (
          <li
            key={i}
            className={tabIdx === i ? "active" : ""}
            onClick={() => setTabIdx(i)}
          >
            <span>{title}</span>
          </li>
        ))}
      </ul>
      <div className="customTabs-inner">{items[tabIdx]?.content}</div>
    </div>
  );
};

export default CustomTabs;
