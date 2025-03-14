import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutInfoPage from "../pages/AboutPage/AboutInfoPage/AboutInfoPage";
import AboutVisionPage from "../pages/AboutPage/AboutVisionPage/AboutVisionPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about/info" element={<AboutInfoPage />} />
      <Route path="/about/vision" element={<AboutVisionPage />} />
    </Routes>
  );
};

export default AppRouter;
