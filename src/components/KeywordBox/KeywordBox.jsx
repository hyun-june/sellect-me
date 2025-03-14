import { useEffect, useState } from "react";
import "./KeywordBox.css";

const keywordList = [
  "피팅모델",
  "배우",
  "CF모델",
  "행사",
  "댄서",
  "인플루언서",
  "특수피팅모델",
  "부분모델",
  "동물모델",
  "키워드1",
  "키워드2",
  "키워드3",
  "키워드4",
];

const KeywordBox = () => {
  const [randomBox, setRandomBox] = useState([]);

  useEffect(() => {
    const randomKeyword = [...keywordList]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setRandomBox(randomKeyword);
  }, []);

  return (
    <div className="keyword_section">
      {randomBox.map((item, index) => {
        return (
          <div className="keyword_box" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default KeywordBox;
