import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import "./AboutInfoPage.css";

const AboutInfoPage = () => {
  const sections = [
    { id: 1, element: "iframe" },
    { id: 2, element: "infoBox" },
    { id: 3, element: "innerBox1" },
    { id: 4, element: "pointText" },
    { id: 5, element: "innerBox2" },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);
  let wheelTime = null;

  const handleWheel = (e) => {
    if (wheelTime) clearTimeout(wheelTime);

    wheelTime = setTimeout(() => {
      if (e.deltaY > 0 && visibleIndex < sections.length - 1) {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelTime) clearTimeout(wheelTime);
    };
  }, [visibleIndex]);

  console.log(visibleIndex);

  return (
    <MainLayout>
      <Container className="aboutInfo_main">
        <h4>What is Sellect?</h4>
        {visibleIndex >= 1 ? "" : <span>마우스 휠을 내려주세요.</span>}
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/-7feOG7w4Ks"
          title="💿 최유리 노래 모음 | 신곡 포함, 잔잔한 감성  | Choiyuree playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          className={`${visibleIndex >= 1 ? "about_visible" : ""}`}
        />

        <div className="info_box">
          <img src="/images/logo-outline-vertical-img.png" alt="" />
          <div
            className={`inner_box ${visibleIndex >= 2 ? "about_visible" : ""}`}
          >
            <h5>Sellecter</h5>
            <p>Select를 하는 브랜드, 기업 등의 클라이언트</p>
          </div>
          <span
            className={`vertical_line ${
              visibleIndex >= 2 ? "about_visible" : ""
            }`}
          ></span>
          <div
            className={`point_text ${visibleIndex >= 3 ? "about_visible" : ""}`}
          >
            Sellect
          </div>
          <span
            className={`vertical_line ${
              visibleIndex >= 4 ? "about_visible" : ""
            }`}
          ></span>
          <div
            className={`inner_box ${visibleIndex >= 4 ? "about_visible" : ""}`}
          >
            <h5>Selleb</h5>
            <p>Sell + Celeb로 모델, 배우 등의 크리에이터</p>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AboutInfoPage;
