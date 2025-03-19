import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ModelSideBar from "../components/ModelSideBar/ModelSideBar";
import "./HomeShoppingPage.css";

const homeshoppingMenu = {
  모델: [
    "광고",
    "화보",
    "홈쇼핑",
    "패션쇼/워킹",
    "부분",
    "아동/시니어",
    "동물",
  ],
  배우: ["홈배우 테스트1", "홈배우 테스트2"],
  나레이터: ["홈나레이터 테스트1", "홈나레이터 테스트2"],
  "기타 방송인": ["홈방송인 테스트1", "홈방송인 테스트2"],
};

const HomeShoppingPage = () => {
  return (
    <MainLayout>
      <ModelSideBar data={homeshoppingMenu} />
    </MainLayout>
  );
};

export default HomeShoppingPage;
