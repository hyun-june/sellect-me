import { useEffect, useRef, useState } from "react";
import PointBox from "./components/PointBox/PointBox";
import { navigateReload } from "../../utils/navigateReload";
import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import "./AboutPage.css";

const AboutPage = (props) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [pointBoxIndex, setPointBoxIndex] = useState(0);

  const ref = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setVisibleIndex((prev) => (prev === 0 ? 1 : prev));
    }

    if (visibleIndex >= 5 && pointBoxIndex < 4) {
      setPointBoxIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setVisibleIndex(0);
    setPointBoxIndex(0);
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [pointBoxIndex, visibleIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = ref.findIndex((ref) => ref.current === entry.target);
          if (entry.isIntersecting) {
            if (index === 1 && visibleIndex < 2) {
              setVisibleIndex(2);
            } else if (index === 2 && visibleIndex < 3) {
              setVisibleIndex(3);
            } else if (index === 3 && visibleIndex < 4) {
              setVisibleIndex(4);
            } else if (index === 4 && visibleIndex < 5) {
              setVisibleIndex(5);
              setPointBoxIndex(0);
            }
          }
        });
      },
      { threshold: 0.7 }
    );
    ref.forEach((r) => {
      if (r.current) observer.observe(r.current);
    });

    return () => {
      ref.forEach((r) => {
        if (r.current) observer.unobserve(r.current);
      });
    };
  }, [visibleIndex]);

  return (
    <MainLayout {...props}>
      <div className="aboutInfo_container">
        <h4>What is Sellect?</h4>

        <iframe
          ref={ref[0]}
          src="https://www.youtube.com/embed/-7feOG7w4Ks"
          title="💿 최유리 노래 모음 | 신곡 포함, 잔잔한 감성  | Choiyuree playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          className={`${visibleIndex >= 1 ? "about_visible" : ""}`}
        />

        <div className="info_box">
          <img
            src="/images/logo-outline-vertical-img.png"
            alt=""
            className="background_logo"
          />
          <div
            className={`inner_box ${visibleIndex >= 2 ? "about_visible" : ""}`}
          >
            <h5>Sellecter</h5>
            <p>Select를 하는 브랜드, 기업 등의 클라이언트</p>
          </div>
          <span
            ref={ref[1]}
            className={`vertical_line ${
              visibleIndex >= 2 ? "about_visible" : ""
            }`}
          ></span>
          <div
            ref={ref[2]}
            className={`aboutPoint_word ${
              visibleIndex >= 3 ? "about_visible" : ""
            }`}
          >
            Sellect
          </div>
          <span
            className={`vertical_line ${
              visibleIndex >= 4 ? "about_visible" : ""
            }`}
          ></span>
          <div
            ref={ref[3]}
            className={`inner_box ${visibleIndex >= 4 ? "about_visible" : ""}`}
          >
            <h5>Selleb</h5>
            <p>Sell + Celeb로 모델, 배우 등의 크리에이터</p>
          </div>
        </div>

        <div className="about_point_box" ref={ref[4]}>
          <PointBox pointBoxIndex={pointBoxIndex} />
        </div>
        <div onClick={() => navigateReload("/")} className="link_box">
          SELLECT Now!
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
