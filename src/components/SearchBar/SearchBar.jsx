import { useEffect, useState, useCallback } from "react";
import { VscSearch } from "react-icons/vsc";
import "./SearchBar.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const getRandomKeyword = useCallback(() => {
    const keywordList = [
      "여자 한복 모델",
      "외국 여자 모델",
      "남자 한복 모델",
      "외국 남자 모델",
    ];
    return `추천 검색어 : ${
      keywordList[Math.floor(Math.random() * keywordList.length)]
    }`;
  }, []);

  useEffect(() => {
    setKeyword(getRandomKeyword());

    const randomKeyword = setInterval(() => {
      setKeyword(getRandomKeyword());
    }, 3000);

    return () => clearInterval(randomKeyword);
  }, [getRandomKeyword]);

  return (
    <div className="inputNav">
      <VscSearch className="navIcon" />
      <input type="text" placeholder={keyword} />
    </div>
  );
};

export default SearchBar;
