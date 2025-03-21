import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ModelDetailSideBar from "../components/ModelDetailSideBar/ModelDetailSideBar";
import ModelSideBar from "../components/ModelSideBar/ModelSideBar";
import "./FittingModelPage.css";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import ModelCard from "../components/ModelCard/ModelCard";
import Button from "../../../components/Button/Button";
import { useEffect, useState } from "react";

const fittingMenu = {
  모델: [
    "피팅모델",
    "방송/CF/뮤비 모델",
    "잡지/지면/화보 모델",
    "패션쇼/워킹 모델",
    "부분모델",
    "특수 피팅 모델",
    "레이싱/라운드 모델",
    "시니어 모델",
    "아동 모델",
  ],
  배우: ["배우 테스트1", "배우 테스트2"],
  나레이터: ["나레이터 테스트1", "나레이터 테스트2"],
  "기타 방송인": ["방송인 테스트1", "방송인 테스트2"],
};

const cardData = [
  {
    src: "https://cdn.pixabay.com/photo/2021/03/26/15/21/beautiful-6126170_1280.jpg",
    name: "철수",
  },
  {
    src: "https://media.istockphoto.com/id/2059137136/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%97%90%EC%84%9C-%EA%B2%80%EC%9D%80-%EC%96%91%EB%B3%B5%EC%9D%84-%EC%9E%85%EC%9D%80-%EA%B8%88%EB%B0%9C-%EC%97%AC%EC%9E%90-%ED%8C%A8%EC%85%98-%EB%AA%A8%EB%8D%B8.jpg?s=2048x2048&w=is&k=20&c=NsTqYOw9emraS_r68wB5x6ZSiFa5f8BPDk9DBqB1eec=",
    name: "미미",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    name: "영희",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    name: "기봉",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    name: "남수",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    name: "하하",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    name: "기봉",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    name: "남수",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    name: "하하",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/03/26/15/21/beautiful-6126170_1280.jpg",
    name: "철수",
  },
  {
    src: "https://media.istockphoto.com/id/2059137136/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%97%90%EC%84%9C-%EA%B2%80%EC%9D%80-%EC%96%91%EB%B3%B5%EC%9D%84-%EC%9E%85%EC%9D%80-%EA%B8%88%EB%B0%9C-%EC%97%AC%EC%9E%90-%ED%8C%A8%EC%85%98-%EB%AA%A8%EB%8D%B8.jpg?s=2048x2048&w=is&k=20&c=NsTqYOw9emraS_r68wB5x6ZSiFa5f8BPDk9DBqB1eec=",
    name: "미미",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
    name: "영희",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    name: "기봉",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    name: "남수",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    name: "하하",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
    name: "기봉",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
    name: "남수",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
    name: "하하",
  },
];

const filterList = ["업데이트순", "거리순", "가격 낮은 순"];

const FittingModelPage = () => {
  const [cardCount, setCardCount] = useState(12);
  const [sideBarPosition, setSideBarPosition] = useState(0);

  const handelScroll = () => {
    const settingBar = window.scrollY;
    const barPosition = 800 > settingBar ? settingBar : settingBar - 50;

    setSideBarPosition(barPosition);

    setSideBarPosition(barPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const handleMore = () => {
    setCardCount((prev) => prev + 3);
  };
  // 사이드바를 다피면 top요소가 부모요소를 넘치면서 무한스크롤이 되버림 -> 다른 방법 생각 or 수정해야함
  return (
    <MainLayout>
      <div className="model_container">
        <div className="model_sidebar" style={{ top: sideBarPosition }}>
          <ModelSideBar data={fittingMenu} />
          <ModelDetailSideBar menuType="addColor" />
        </div>
        <div className="model_main_section">
          <h3>FITTING MODEL</h3>
          <div className="model_filter">
            <span>1,004 selleb</span>
            <CustomDropdown className="model_dropdown" list={filterList} />
          </div>
          <div className="model_card_section">
            {cardData.slice(0, cardCount).map((card, index) => (
              <ModelCard img={card.src} name={card.name} index={index} />
            ))}
          </div>
          {cardCount < cardData.length && (
            <div className="load_more_btn">
              <Button theme="black" onClick={handleMore}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default FittingModelPage;
