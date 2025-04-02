import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ModelCard from "../../ModelPage/components/ModelLayout/components/ModelCard/ModelCard";
import "./FavoritesPage.css";

const favoritesCard = [
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
const FavoritesPage = () => {
  const user = "selleb";
  return (
    <MainLayout>
      <div className="favorite_container">
        <h4>관심 있는 {user === "selleb" ? "셀렉터" : "셀럽"}</h4>
        <div className="favorite_card_section">
          {favoritesCard?.map((card, index) => (
            <ModelCard img={card.src} name={card.name} key={index} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default FavoritesPage;
