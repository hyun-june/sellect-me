import "./KeywordBox.css";

const keyword = [
  "피팅모델",
  "배우",
  "CF모델",
  "행사",
  "댄서",
  "인플루언서",
  "특수피팅모델",
  "부분모델",
  "동물모델",
];

const KeywordBox = () => {
  const randomKeyword = [...keyword]
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
  return (
    <div className="keyword_section">
      {randomKeyword.map((item, index) => {
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
