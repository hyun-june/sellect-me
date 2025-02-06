import MainButton from "./components/MainButton";
import MainCard from "./components/MainCard";
import { Container } from "react-bootstrap";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import "./App.css";

// 메인 페이지 입니다.
function App() {
  return (
    <MainLayout>
      <HamburgerMenu />
      <div>
        <img
          className="bannerImg"
          src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
          alt=""
        />
      </div>

      <Container>
        <div>
          <span className="textBox">NEW UPDATED SELLEB</span>
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
}

export default App;
