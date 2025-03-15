import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import { useEffect } from "react";
import ScrollToTop from "./../components/ScrollToTop/ScrollToTop";

const AppRouter = () => {
  const location = useLocation();
  // 새로고침
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      console.log(performance);
      window.location.href = location.pathname;
    }
  }, [location]);

  return (
    <Routes>
      {/* <ScrollToTop/> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRouter;
