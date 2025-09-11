import { useEffect, useState } from "react";
import SideHamburgerMenu from "./components/SideHamburgerMenu/SideHamburgerMenu";
import "./StartPage.css";

const firstWord = ["모델", "배우", "쇼호스트", "인플루언서"];
const secondWord = ["출연료", "저작권", "초상권"];
const menu = [
  { name: "Home(1)", address: "/" },
  { name: "about(1)", address: "/about" },
  { name: "about(1)", address: "/about" },
  { name: "login(1)", address: "/login" },
];

const StartPage = () => {
  const [getFirstWord, setGetFirstWord] = useState(firstWord[0]);
  const [getSecondWord, setGetSecondWord] = useState(secondWord[0]);

  const getRandomWord = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  useEffect(() => {
    const randomWord = setInterval(() => {
      setGetFirstWord(getRandomWord(firstWord));
      setGetSecondWord(getRandomWord(secondWord));
    }, 2000);

    return () => clearInterval(randomWord);
  }, []);

  return (
    <div className="start_page">
      <SideHamburgerMenu menu={menu} />
      <div className="start_container">
        {/* <section className="first-grid"></section> */}
        <section className="middle-grid">
          <div className="randomText_section">
            <p>{getFirstWord} 찾으세요?</p>
            <p>아직도 {getSecondWord} 걱정하세요?</p>
            <p>이제 시간낭비 말고</p>
          </div>
          <div className="banner_text">
            <h1>Sell + Select</h1>

            <div>
              <p>당신의 가치를 높이는 성장 플랫폼</p>
              <div className="start_btn">
                <a href="/">바로 시작하기</a>
                <a href="/about">안내 보러가기</a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="last-grid"></section> */}
      </div>
    </div>
  );
};

export default StartPage;
