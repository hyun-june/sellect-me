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

const keywordTest = [
  ["update", "새로운"],
  ["male", "남자모델"],
  ["female", "여자모델"],
];

const KeywordBox = ({ bannerKeyword, setBannerKeyword, ...props }) => {
  const [randomBox, setRandomBox] = useState([]);

  useEffect(() => {
    const randomKeyword = [...keywordList]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setRandomBox(randomKeyword);
  }, []);

  const changeBanner = (keyword) => {
    setBannerKeyword(keyword);
  };

  return (
    <div className="keyword_section">
      {keywordTest.map(([value, item], index) => {
        return (
          <div
            className={`keyword_box ${
              value === bannerKeyword ? "focus" : null
            }`}
            key={index}
            onClick={() => changeBanner(value)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default KeywordBox;
