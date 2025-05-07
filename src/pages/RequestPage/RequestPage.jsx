import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import ProfileInfoList from "../../components/ProfileInfoList/ProfileInfoList";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { IoMdStarOutline } from "react-icons/io";
import "./RequestPage.css";
import TagButton from "./../../components/TagButton/TagButton";
import CustomTabs from "./../../components/CustomTabs/CustomTabs";

const userInfo = {
  userName: "Kim Jieun",
  pay: 120000,
  profileImg: "/images/test.jpg",
  profileSubImg: [
    "/images/test1.png",
    "/images/test2.jpg",
    "/images/test3.jpg",
  ],
  userInfoList: [
    { title: "성별", content: "FEMALE" },
    { title: "키", content: "160cm" },
    { title: "몸무게", content: "44kg" },
  ],
  userThreeSizeList: [
    { title: "가슴둘레", content: "00" },
    { title: "허리둘레", content: "00" },
    { title: "힙 둘레", content: "00" },
  ],
  userSizeList: [
    { title: "상의 사이즈", content: "00" },
    { title: "하의 사이즈", content: "30" },
    { title: "신발 사이즈", content: "250" },
  ],
  userColorList: [
    { title: "헤어컬러", content: "BROWN" },
    { title: "아이컬러", content: "RED" },
  ],
  userCountryList: [
    { title: "국가", content: "KOREA" },
    { title: "언어", content: "KOREAN" },
  ],

  tagList: ["사진", "영상", "뮤비", "홈쇼핑"],
  career: [
    "2020.01.01 OOO브랜드OOO화보촬영",
    "2021.05.30 OOO브랜드OOO화보촬영",
  ],
  tabImage: ["/images/test1.png", "/images/test2.jpg"],
};

const tabItems = [
  {
    title: "이미지",
    content: (
      <>
        {userInfo.tabImage.map((img, index) => (
          <ProfileImgBox src={img} key={index} />
        ))}
      </>
    ),
  },
  {
    title: "커리어",
    content: (
      <ul className="career">
        {userInfo.career.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
  },
];

const RequestPage = (props) => {
  const [time, setTime] = useState(0);
  const hourlyPay = (time * userInfo.pay).toLocaleString();

  const handlePayChange = (e) => {
    const selectTime = e.target.value;
    setTime(selectTime);
  };

  return (
    <MainLayout {...props}>
      <div className="request_container">
        <h3>셀럽 요청서</h3>
        <div className="request_info">
          <img src="/images/test.jpg" className="request_img" />
          <div className="request_inner">
            <div className="request_inner_info">
              <div className="request_inner_list">
                <div>프로젝트명:CF 촬영</div>
                <div>촬영시간:5시간</div>
                <div>시간 당 금액:200,000</div>
              </div>
              <div className="request_inner_list">
                <div>에스크로:200,000</div>
                <div>부가세:120,000</div>
                <div>예상 총 금액:1,320,000</div>
              </div>
            </div>
            <button>계약하기</button>
          </div>
        </div>
        <div className="request_profile">
          <h3>KIM JI EUN</h3>
          <div>
            <Button>
              <IoMdStarOutline className="star-icons" />
            </Button>
            <Button>Com-Card</Button>
            <Button>Chat</Button>
            <Link to="/quotation">
              <Button>견적 확인하기</Button>
            </Link>
          </div>
        </div>
        <section className="request_main_profile">
          <div className="request_main_profile_img">
            <ProfileImgBox src={userInfo.profileImg} />
          </div>

          <div className="request_profile_info">
            <div className="request_profile_pictures">
              {userInfo.profileSubImg.map((img, index) => (
                <ProfileImgBox src={img} key={index} />
              ))}
            </div>
            <div className="request_profile_List">
              <ProfileInfoList list={userInfo.userInfoList} />
              <ProfileInfoList list={userInfo.userThreeSizeList} />
              <ProfileInfoList list={userInfo.userSizeList} />
              <ProfileInfoList list={userInfo.userColorList} />
              <ProfileInfoList list={userInfo.userCountryList} />
            </div>
          </div>
        </section>
        <section className="request_profile_range">
          <div className="request_hourly_rangebar_inner">
            <div className="request_pay_text">
              <h5>예상 금액</h5>
              <div className="request_pay_time">
                <span>{time}HR</span>
                <span>{hourlyPay}KRW</span>
              </div>
            </div>

            <input
              type="range"
              id="request_hourlyPay_bar"
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
            <TagButton list={userInfo.tagList} />
          </div>
          <div className="request_profile_range_info">
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
    </MainLayout>
  );
};

export default RequestPage;
