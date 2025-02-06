import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileImgBox from "./../../../components/ProfileImgBox/ProfileImgBox";
import ProfileInfoList from "./../../../components/ProfileInfoList/ProfileInfoList";
import CustomTabs from "./../../../components/CustomTabs/CustomTabs";
import TagButton from "./../../../components/TagButton/TagButton";
import Button from "./../../../components/Button/Button";
import { IoMdStarOutline } from "react-icons/io";
import "./SellebProfilePage.css";

const profileInfoList = [
  { title: "성별", content: "FEMALE" },
  { title: "키", content: "160cm" },
  { title: "몸무게", content: "44kg" },
];

const profileThreeSizeList = [
  { title: "가슴둘레", content: "00" },
  { title: "허리둘레", content: "00" },
  { title: "힙 둘레", content: "00" },
];

const profileSizeList = [
  { title: "상의 사이즈", content: "00" },
  { title: "하의 사이즈", content: "30" },
  { title: "신발 사이즈", content: "250" },
];

const profileColorList = [
  { title: "헤어컬러", content: "BROWN" },
  { title: "아이컬러", content: "RED" },
];

const profileCountryList = [
  { title: "국가", content: "KOREA" },
  { title: "언어", content: "KOREAN" },
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

const tagList = ["사진", "영상", "뮤비", "홈쇼핑"];

const SellebProfilePage = () => {
  const [time, setTime] = useState(0);
  const handlePayChange = (e) => {
    const selectTime = e.target.value;
    setTime(selectTime);
  };

  const pay = 120000;

  const hourlyPay = (time * pay).toLocaleString();
  const user = "11";

  return (
    <div className="selleb_profile">
      <header>
        {user === "me" ? (
          <>
            <h3>My Profile</h3>
            <nav>
              <Link to="/mypage/SellebProfile/edit">
                <Button>edit</Button>
              </Link>
            </nav>
          </>
        ) : (
          <>
            <h3>KIM JI EUN</h3>
            <nav>
              <Button>
                <IoMdStarOutline className="star-icons" />
              </Button>
              <Button>Com-Card</Button>
              <Button>Chat</Button>
              <Link to="/mypage/SellebProfile/quotation">
                <Button>견적 확인하기</Button>
              </Link>
            </nav>
          </>
        )}
      </header>
      <section className="main_profile">
        <div className="main_profile_img">
          <ProfileImgBox src="/images/test.jpg" />
        </div>

        <div>
          <div className="profile_pictures">
            <ProfileImgBox src="/images/test1.png" />
            <ProfileImgBox src="/images/test2.jpg" />
            <ProfileImgBox src="/images/test3.jpg" />
          </div>
          <div className="profile_List">
            <ProfileInfoList list={profileInfoList} />
            <ProfileInfoList list={profileThreeSizeList} />
            <ProfileInfoList list={profileSizeList} />
            <ProfileInfoList list={profileColorList} />
            <ProfileInfoList list={profileCountryList} />
          </div>
        </div>
      </section>
      <section className="profile_range">
        <div className="hourly_rangebar">
          <div className="pay_text">
            <h5>예상 금액</h5>
            <div className="margin-bottom-1">
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
        <div>
          <h5>프로젝트 가능 범위</h5>
          <TagButton list={tagList} />
        </div>
        <div className="flex_column gap-3em">
          <div>
            <h5>이동 가능 지역 범위</h5>
            <span>서울</span>
          </div>
          <div>
            <h5>저작권 사용기간</h5>
            <span>1년</span>
          </div>
        </div>
      </section>
      <div className="tabs_content">
        <CustomTabs items={tabItems}></CustomTabs>
      </div>
    </div>
  );
};

export default SellebProfilePage;
