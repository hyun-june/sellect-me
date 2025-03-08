import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import { Container } from "react-bootstrap";
import MainCard from "../../components/MainCard/MainCard";
import MainButton from "./../../components/MainButton";
import "./MainPage.css";

const MainPage = () => {
  return (
    <MainLayout>
      <Container>
        <HamburgerMenu />
        <div>
          <div className="main_video">
            <video
              src="https://cdn.pixabay.com/video/2021/07/09/80817-573496287_large.mp4"
              type="video/mp4"
              autoPlay
              playsInline
              muted
              loop
            />

            <div className="banner_text">
              <span className="banner_text_first">
                Sell + <br /> Select
              </span>
              <span className="banner_text_second">
                당신의 가치를 높이는 성장 플랫폼
              </span>
            </div>
          </div>
        </div>

        <div className="main_sub_section">
          <div className="sub_section_textbox">NEW UPDATED SELLEB</div>
          <span>
            <a href="/">More +</a>
          </span>
        </div>
        <MainCard />
        <div className="sectionLine"></div>
        <MainButton />
      </Container>
    </MainLayout>
  );
};

export default MainPage;
