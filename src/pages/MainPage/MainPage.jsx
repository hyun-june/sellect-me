import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import CardBox from "../../components/CardBox/CardBox";
import { useEffect, useRef, useState } from "react";
import KeywordBox from "../../components/KeywordBox/KeywordBox";
import { navigateReload } from "../../utils/navigateReload";
import "./MainPage.css";

const firstWord = ["모델", "배우", "쇼호스트", "인플루언서"];
const secondWord = ["출연료", "저작권", "초상권"];

const menu = [
  { name: "Home", address: "/" },
  { name: "about", address: "/about" },
  { name: "confirm", address: "/confirm" },
  { name: "mypage/selleb", address: "/mypage/selleb" },
  { name: "mypage/sellecter", address: "/mypage/sellecter" },
  { name: "mypage/selleb/edit", address: "/mypage/selleb/edit" },
  { name: "mypage/sellecter/edit", address: "/mypage/sellecter/edit" },
  { name: "quotation", address: "/quotation" },
  { name: "signup", address: "/signup" },
  { name: "model/fitting", address: "/model/fitting" },
  { name: "model/homeshopping", address: "/model/homeshopping" },
];

const MainPage = () => {
  const boxRef = useRef();
  const [boxVisible, setBoxVisible] = useState(false);
  const textRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [textVisible, setTextVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [getFirstWord, setGetFirstWord] = useState(firstWord[0]);
  const [getSecondWord, setGetSecondWord] = useState(secondWord[0]);

  const getRandomWord = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  useEffect(() => {
    const randomWord = setInterval(() => {
      setGetFirstWord(getRandomWord(firstWord));
      setGetSecondWord(getRandomWord(secondWord));
    }, 3000);

    return () => clearInterval(randomWord);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      const boxObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setBoxVisible(true);
            } else {
              setBoxVisible(false);
            }
          });
        },
        { threshold: 0.4 }
      );

      boxObserver.observe(boxRef.current);

      return () => {
        if (boxRef.current) {
          boxObserver.unobserve(boxRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTextVisible((prev) => {
            const newVisible = [...prev];
            const index = textRefs.findIndex(
              (textRefs) => textRefs.current === entry.target
            );
            if (entry.isIntersecting) {
              if (index !== -1) {
                newVisible[index] = true;
              }
            } else {
              const index = textRefs.findIndex(
                (textRefs) => textRefs.current === entry.target
              );
              if (index !== -1) {
                newVisible[index] = false;
              }
            }
            return newVisible;
          });
        });
      },
      { threshold: 0.8 }
    );

    textRefs.map((textRefs) => {
      if (textRefs.current) textObserver.observe(textRefs.current);
    });

    return () => {
      textRefs.map((textRefs) => {
        if (textRefs.current) textObserver.unobserve(textRefs.current);
      });
    };
  }, []);

  return (
    <MainLayout>
      <HamburgerMenu menu={menu} />
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

      <CardBox title="NEW UPDATED SELLEB" cardKeyword="NewUpdateSelleb" />

      <div
        className={`box_section scroll_animation ${
          boxVisible ? "visible" : ""
        }`}
      >
        <h4 ref={boxRef}>FIND YOUR SELLEB</h4>
        <KeywordBox />
      </div>

      <div className="randomText_section ">
        <p
          ref={textRefs[0]}
          className={`scroll_animation ${textVisible[0] ? "visible" : ""}`}
        >
          {getFirstWord} 찾으세요?
        </p>
        <p
          ref={textRefs[1]}
          className={`scroll_animation ${textVisible[1] ? "visible" : ""}`}
        >
          아직도 {getSecondWord} 걱정하세요?
        </p>
        <p
          ref={textRefs[2]}
          className={`scroll_animation ${textVisible[2] ? "visible" : ""}`}
        >
          이제 시간낭비 말고
        </p>
        <h3
          ref={textRefs[3]}
          className={`scroll_animation ${textVisible[3] ? "visible" : ""}`}
        >
          Sellect
        </h3>
        <div
          onClick={() => navigateReload("/about")}
          ref={textRefs[4]}
          className={`scroll_animation link_btn ${
            textVisible[4] ? "visible" : ""
          }`}
        >
          HOW TO USE?
        </div>
      </div>

      <CardBox title="FITTING MODEL FEMALE" cardKeyword="FittingModelFeMale" />

      <CardBox title="FITTING MODEL MALE" cardKeyword="FittingModelMale" />
    </MainLayout>
  );
};

export default MainPage;
