import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImgBox from "./../../../components/ProfileImgBox/ProfileImgBox";
import ProfileInfoList from "./../../../components/ProfileInfoList/ProfileInfoList";
import CustomTabs from "./../../../components/CustomTabs/CustomTabs";
import TagButton from "./../../../components/TagButton/TagButton";
import Button from "./../../../components/Button/Button";
import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import LikeButton from "./../../../components/LikeButton/LikeButton";
import "./SellebProfilePage.css";

const profileInfoList = [
  { title: "Gender", content: "FEMALE" },
  { title: "Height", content: "160cm" },
  { title: "Weight", content: "44kg" },
];

const profileThreeSizeList = [
  { title: "Chest", content: "00" },
  { title: "Waist", content: "00" },
  { title: "Hip size", content: "00" },
];

const profileSizeList = [
  { title: "Top size", content: "00" },
  { title: "Bottom size", content: "30" },
  { title: "Shoe size", content: "250" },
];

const profileColorList = [
  { title: "Hair Color", content: "BROWN" },
  { title: "Eye Color", content: "RED" },
];

const profileCountryList = [
  { title: "Nationality", content: "Korea, Republic of" },
  { title: "Language", content: "KOREAN" },
];

const tabItems = [
  {
    title: "이미지",
    content: [
      <ProfileImgBox src="/images/test1.png" />,
      <ProfileImgBox src="/images/test2.jpg" />,
    ],
  },
  {
    title: "커리어",
    content: (
      <ul className="career">
        <li>2020.01.01 OOO브랜드OOO화보촬영</li>
        <li>2021.05.30 OOO브랜드OOO화보촬영</li>
      </ul>
    ),
  },
];

const copyRightTest = 0;
const currentTest = ["서울", "대구"];

const tagList = [
  "사진",
  "영상",
  "뮤비",
  "홈쇼핑",
  "기타",
  "기타타",
  "어떻게되는지",
];

const SellebProfilePage = ({ ...props }) => {
  const [time, setTime] = useState(1);

  const handlePayChange = (e) => {
    // if (user === "me") {
    const selectTime = e.target.value;
    setTime(selectTime);
    // }
    return;
  };

  const pay = 120000;

  const hourlyPay = (time * pay).toLocaleString();
  const user = "11";

  return (
    <MainLayout {...props}>
      <div className="selleb_profile">
        <div className="selleb_profile_header">
          {user === "me" ? (
            <>
              <h3>My Profile</h3>
              <div>
                <Link to="/mypage/selleb/edit">
                  <Button>edit</Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h3>KIM OOO OOO</h3>
              <div>
                <LikeButton />
                <Button>Com-Card</Button>
                <Button>Chat</Button>
                <Link to="/quotation">
                  <Button>견적 확인하기</Button>
                </Link>
              </div>
            </>
          )}
        </div>
        <section className="selleb_main_profile">
          <div className="selleb_main_profile_img">
            <ProfileImgBox src="/images/test.jpg" />
          </div>

          <div className="selleb_info">
            <div className="selleb_profile_pictures">
              <ProfileImgBox src="/images/test1.png" />
              <ProfileImgBox src="/images/test2.jpg" />
              <ProfileImgBox src="/images/test3.jpg" />
              <ProfileImgBox src="/images/test3.jpg" />
            </div>
            <div className="selleb_profile_List">
              <ProfileInfoList list={profileInfoList} />
              <ProfileInfoList list={profileThreeSizeList} />
              <ProfileInfoList list={profileSizeList} />
              <ProfileInfoList list={profileColorList} />
              <ProfileInfoList list={profileCountryList} />
            </div>
          </div>
        </section>

        <section className="profile_range">
          <div className="hourly_rangebar_inner">
            <div className="pay_text">
              <h5>예상 금액</h5>
              <div className="pay_time">
                <span>{time}HR</span>
                <span>{hourlyPay}KRW</span>
              </div>
            </div>

            <input
              type="range"
              id="hourlyPay_bar"
              min="2"
              max="12"
              step="1"
              value={time}
              onChange={handlePayChange}
            />
            <div>
              <label>2hr</label>
              <label>12hr</label>
            </div>
          </div>
          <div className="selleb_work_scope">
            <h5>프로젝트 가능 범위</h5>
            <TagButton list={tagList} />
          </div>
          <div className="profile_range_info">
            <div>
              <h5>이동 가능 지역 범위</h5>
              <span>{currentTest.join(", ")}</span>
            </div>
            <div>
              <h5>저작권 사용기간</h5>
              <span>{copyRightTest > 0 ? `${copyRightTest}년` : "-"}</span>
            </div>
          </div>
        </section>
        <div className="tabs_content">
          <CustomTabs items={tabItems}></CustomTabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default SellebProfilePage;
