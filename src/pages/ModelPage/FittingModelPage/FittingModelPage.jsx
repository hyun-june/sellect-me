import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import ModelDetailSideBar from "../components/ModelDetailSideBar/ModelDetailSideBar";
import ModelSideBar from "../components/ModelSideBar/ModelSideBar";
import "./FittingModelPage.css";
import { IoIosArrowDown } from "react-icons/io";

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

const FittingModelPage = () => {
  return (
    <MainLayout>
      <div className="model_container">
        <div className="model_sidebar">
          <ModelSideBar data={fittingMenu} />
          <ModelDetailSideBar />
        </div>
        <div className="model_main_section">
          <h3>FITTING MODEL</h3>
          <div className="model_filter">
            <span>1,004 selleb</span>
            <span>
              업데이트순 <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FittingModelPage;
