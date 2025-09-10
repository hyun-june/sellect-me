import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import CardBox from "../../components/CardBox/CardBox";

import KeywordBox from "../../components/KeywordBox/KeywordBox";

import "./MainPage.css";
import SlideBanner from "./components/SlideBanner/SlideBanner";
import { useState } from "react";

const menu = [
  { name: "Home(1)", address: "/" },
  { name: "start", address: "/start" },
  { name: "about(1)", address: "/about" },
  { name: "login(1)", address: "/login" },
  { name: "model/fitting(1)", address: "/model/fitting" },
  { name: "model/homeshopping(1)", address: "/model/homeshopping" },
  { name: "mypage/selleb(1)", address: "/mypage/selleb" },
  { name: "mypage/sellecter(1)", address: "/mypage/sellecter" },
  { name: "quotation(1)", address: "/quotation" },
  { name: "request(1)", address: "/request" },
  { name: "confirm(1)", address: "/confirm" },
  { name: "signup(1)", address: "/signup" },
  { name: "mypage(1)", address: "/mypage" },
  { name: "mypage/selleb/edit(1)", address: "/mypage/selleb/edit" },
  { name: "mypage/sellecter/edit(1)", address: "/mypage/sellecter/edit" },
  { name: "mypage/favorites(1)", address: "/mypage/favorites" },
  { name: "mypage/projectManage(1)", address: "/mypage/projectManage" },
  { name: "mypage/bank(1)", address: "/mypage/bank" },
  { name: "mypage/bank/payment(1)", address: "/mypage/bank/payment" },
  { name: "mypage/schedule(1)", address: "/mypage/schedule" },
  { name: "mypage/chatlist(1)", address: "/mypage/chatlist" },
  { name: "mypage/chatting(1)", address: "/mypage/chatting" },
  { name: "v-chat(1)", address: "/v-chat" },
  { name: "/v-chat/ticket(1)", address: "/v-chat/ticket" },
  { name: "/service(1)", address: "/service" },
  { name: "/service/notice(1)", address: "/service/notice" },
  { name: "/service/faq(1)", address: "/service/faq" },
  { name: "/service/faq/detail(1)", address: "/service/faq/detail" },
  { name: "/setting(1)", address: "/setting" },
  { name: "/terms(1)", address: "/terms" },
  { name: "/privacy(1)", address: "/privacy" },
  { name: "/admin", address: "/admin" },
  { name: "/board", address: "/board" },
];

const MainPage = (props) => {
  const [bannerKeyword, setBannerKeyword] = useState("update");

  return (
    <MainLayout {...props}>
      {/* <HamburgerMenu menu={menu} /> */}

      <div className="box_section">
        <h4>FIND YOUR SELLEB</h4>
        <KeywordBox
          setBannerKeyword={setBannerKeyword}
          bannerKeyword={bannerKeyword}
        />
      </div>
      <SlideBanner bannerKeyword={bannerKeyword} />

      <CardBox title="FITTING MODEL FEMALE" cardKeyword="FittingModelFeMale" />

      <CardBox title="FITTING MODEL MALE" cardKeyword="FittingModelMale" />
    </MainLayout>
  );
};

export default MainPage;
