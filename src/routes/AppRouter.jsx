import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import { useEffect } from "react";
import ScrollToTop from "./../components/ScrollToTop/ScrollToTop";
import ConFirmPage from "../pages/ConFirmPage/ConFirmPage";
import MyPage from "../pages/MyPage/Mypage";
import SellebProfilePage from "./../pages/MyPage/SellebProfilePage/SellebProfilePage";
import SellecterProfilePage from "./../pages/MyPage/SellecterProfilePage/SellecterProfilePage";
import SellebProfileEditPage from "./../pages/MyPage/SellebProfilePage/SellebProfileEditPage/SellebProfileEditPage";
import SellecterProfileEditPage from "./../pages/MyPage/SellecterProfilePage/SellecterProfileEditPage/SellecterProfileEditPage";
import QuotationPage from "./../pages/QuotationPage/QuotationPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignUpSellebPage from "./../pages/SignUpPage/SignUpSellebPage/SignUpSellebPage";
import SignUpSellecterPage from "./../pages/SignUpPage/SignUpSellecterPage/SignUpSellecterPage";
import ModelPage from "../pages/ModelPage/ModelPage";
import ProjectManagementPage from "../pages/MyPage/ProjectManagementPage/ProjectManagementPage";
import FavoritesPage from "../pages/MyPage/FavoritesPage/FavoritesPage";
import BankPage from "../pages/MyPage/BankPage/BankPage";
import PayMentPage from "../pages/MyPage/BankPage/PayMentPage/PayMentPage";
import SchedulePage from "../pages/MyPage/SchedulePage/SchedulePage";
import ChatListPage from "./../pages/MyPage/ChatListPage/ChatListPage";
import ChattingPage from "../pages/MyPage/ChatListPage/ChattingPage/ChattingPage";
import VchatPage from "../pages/VchatPage/VchatPage";
import VchatTicketPage from "../pages/VchatTicketPage/VchatTicketPage";
import ServicePage from "../pages/ServicePage/ServicePage";

const AppRouter = () => {
  const location = useLocation();
  // 새로고침
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      window.location.href = location.pathname;
    }
  }, [location]);

  return (
    <Routes>
      {/* <ScrollToTop/> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/confirm" element={<ConFirmPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/selleb" element={<SellebProfilePage />} />
      <Route path="/mypage/selleb/edit" element={<SellebProfileEditPage />} />
      <Route path="/mypage/sellecter" element={<SellecterProfilePage />} />
      <Route
        path="/mypage/sellecter/edit"
        element={<SellecterProfileEditPage />}
      />
      <Route path="/mypage/favorites" element={<FavoritesPage />} />
      <Route path="/mypage/projectManage" element={<ProjectManagementPage />} />
      <Route path="/mypage/bank" element={<BankPage />} />
      <Route path="/mypage/bank/payment" element={<PayMentPage />} />
      <Route path="/mypage/schedule" element={<SchedulePage />} />
      <Route path="/mypage/chatlist" element={<ChatListPage />} />
      <Route path="/mypage/chatting" element={<ChattingPage />} />
      <Route path="/v-chat" element={<VchatPage />} />
      <Route path="/v-chat/ticket" element={<VchatTicketPage />} />

      <Route path="/quotation" element={<QuotationPage />} />

      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/selleb" element={<SignUpSellebPage />} />
      <Route path="/signup/sellecter" element={<SignUpSellecterPage />} />

      <Route path="/model">
        <Route path="fitting" element={<ModelPage />} />
        <Route path="homeshopping" element={<ModelPage />} />
      </Route>

      <Route path="/service" element={<ServicePage />} />
    </Routes>
  );
};

export default AppRouter;
