import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import ServiceFAQPage from "../pages/ServicePage/ServiceFAQPage/ServiceFAQPage";
import AccountSettingPage from "./../pages/AccountSettingsPage/AccountSettingPage";
import TermsPage from "../pages/Terms/TermsPage/TermsPage";
import PrivacyPage from "../pages/Terms/PrivacyPage/PrivacyPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import RequestPage from "../pages/RequestPage/RequestPage";
import AdminLayout from "./../Layouts/AdminLayout/AdminLayout";
import AdminAccount from "../pages/AdminPage/AdminAccount/AdminAccount";
import AdminChat from "./../pages/AdminPage/AdminChat/AdminChat";
import AdminMenu from "./../pages/AdminPage/AdminMenu/AdminMenu";
import AdminDashboard from "./../pages/AdminPage/AdminDashboard/AdminDashboard";
import AdminUser from "./../pages/AdminPage/AdminUser/AdminUser";
import AdminUserDetail from "./../pages/AdminPage/AdminUser/AdminUserDetail/AdminUserDetail";
import AdminService from "./../pages/AdminPage/AdminService/AdminService";

const AppRouter = () => {
  const location = useLocation();
  // 새로고침
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      window.location.href = location.pathname;
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
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
        <Route
          path="/mypage/projectManage"
          element={<ProjectManagementPage />}
        />
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

        <Route
          path="/model"
          element={<Navigate to="/model/fitting" replace />}
        />
        <Route path="/model/fitting" element={<ModelPage />} />
        <Route path="/model/homeshopping" element={<ModelPage />} />

        <Route path="/service" element={<ServicePage />} />
        <Route path="/service/notice" element={<ServicePage />} />
        <Route path="/service/faq" element={<ServicePage />} />
        <Route path="/service/faq/detail" element={<ServiceFAQPage />} />
        <Route path="/setting" element={<AccountSettingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/request" element={<RequestPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/user/:nickname" element={<AdminUserDetail />} />
          <Route path="chat" element={<AdminChat />} />
          <Route path="account" element={<AdminAccount />} />
          <Route path="service" element={<AdminService />} />
          <Route path="menu" element={<AdminMenu />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
