import CustomBox from "../../components/CustomBox/CustomBox";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import HamburgerMenu from "./../../components/HamburgerMenu/HamburgerMenu";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph/LineGraph";
import "./Mypage.css";

const boxListLeft = ["프로필 관리", "CHAT", "V-CHAT"];
const boxListRight = ["프로젝트 관리", "관심있는 셀럽", "V-CHAT 이용권"];
const mypageMenu = [
  { name: "공지사항", address: "/" },
  { name: "고객센터", address: "/" },
  { name: "계정설정", address: "/" },
  { name: "로그아웃", address: "/" },
];

const MyPage = () => {
  return (
    <MainLayout>
      <div className="mypage_container">
        <h4>MY PAGE</h4>
        <section className="mypage_inner">
          <div className="mypage_inner_left">
            <ProfileImgBox src="/images/test.jpg" />
            <div>
              {boxListLeft.map((item, index) => (
                <a href="/" key={index}>
                  <CustomBox className="mypage_left_box">{item}</CustomBox>
                </a>
              ))}

              {/* 프로필 관리를 누르면 본인 프로필 페이지로 이동하면 될듯 */}
            </div>
          </div>
          <div className="mypage_inner_right">
            {boxListRight.map((item, index) => (
              <a href="/" key={index}>
                <CustomBox className="mypage_right_box" textAlign="left">
                  {item}
                </CustomBox>
              </a>
            ))}
          </div>
          <div className="mypage_menuList">
            <HamburgerMenu menu={mypageMenu} />
            <div style={{ color: "black", fontSize: "2em" }}>
              <FaRegCalendarCheck />
            </div>
            <div style={{ color: "black", fontSize: "2em" }}>
              <FaSackDollar />
            </div>
          </div>
        </section>

        <section className="mypage_graph_section">
          <h5>내 활동 그래프</h5>
          <div>
            <LineGraph />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default MyPage;
