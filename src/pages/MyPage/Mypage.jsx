import CustomBox from "../../components/CustomBox/CustomBox";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import "./Mypage.css";
const MyPage = () => {
  return (
    <MainLayout>
      <div className="mypage_container">
        <h4>MY PAGE</h4>
        <section className="mypage_inner">
          <div className="test">
            <ProfileImgBox src="/images/test.jpg" />
            <div>
              <CustomBox className="mypage_box">box</CustomBox>
            </div>
          </div>
          <div>
            <CustomBox className="mypage_boox" textAlign="left">
              box
            </CustomBox>
          </div>
          <div>아이콘</div>
        </section>

        <section className="dddd">ddddddddddd</section>
      </div>
    </MainLayout>
  );
};

export default MyPage;
