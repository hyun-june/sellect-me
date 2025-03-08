import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import { Container } from "react-bootstrap";
import BoxTitle from "../../components/BoxTitle/BoxTitle";
import { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import KeywordBox from "../../components/KeywordBox/KeywordBox";

const pictureData = [
  "https://cdn.pixabay.com/photo/2021/03/26/15/21/beautiful-6126170_1280.jpg",
  "https://media.istockphoto.com/id/2059137136/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%97%90%EC%84%9C-%EA%B2%80%EC%9D%80-%EC%96%91%EB%B3%B5%EC%9D%84-%EC%9E%85%EC%9D%80-%EA%B8%88%EB%B0%9C-%EC%97%AC%EC%9E%90-%ED%8C%A8%EC%85%98-%EB%AA%A8%EB%8D%B8.jpg?s=2048x2048&w=is&k=20&c=NsTqYOw9emraS_r68wB5x6ZSiFa5f8BPDk9DBqB1eec=",
  "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/11/04/18/woman-6537397_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/03/22/16/07/woman-6115105_1280.jpg",
];

const MainPage = () => {
  const firstRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (firstRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
            // else {
            //   setIsVisible(false);
            // }
          });
        },
        { threshold: 0 }
      );

      observer.observe(firstRef.current);

      return () => {
        observer.unobserve(firstRef.current);
      };
    }
  }, []);

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
              <h3>
                Sell + <br /> Select
              </h3>
              <p>당신의 가치를 높이는 성장 플랫폼</p>
            </div>
          </div>
        </div>

        <BoxTitle title="NEW UPDATED SELLEB" cardData={pictureData} />

        <div className="sectionLine"></div>

        <div className={`test ${isVisible ? "visible" : ""}`}>
          <h4 ref={firstRef}>FIND YOUR SELLEB</h4>
          <KeywordBox />
        </div>
      </Container>
    </MainLayout>
  );
};

export default MainPage;
