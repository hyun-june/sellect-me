import { useState } from "react";
import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import ProfileImgBox from "../../components/ProfileImgBox/ProfileImgBox";
import ProfileInfoList from "../../components/ProfileInfoList/ProfileInfoList";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import LikeButton from "../../components/LikeButton/LikeButton";
import TagButton from "./../../components/TagButton/TagButton";
import CustomTabs from "./../../components/CustomTabs/CustomTabs";
import "./RequestPage.css";

const userInfo = {
  name: "Kim Jieun",
  userType: "selleb",
  pay: 120000,
  profileImg: "/images/test.jpg",
  profileSubImg: [
    "/images/test1.png",
    "/images/test2.jpg",
    "/images/test3.jpg",
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
  tabItem: [
    {
      title: "이미지",
      content: ["/images/test1.png", "/images/test2.jpg"],
    },
    {
      title: "커리어",
      content: [
        "2020.01.01 OOO브랜드OOO화보촬영",
        "2021.05.30 OOO브랜드OOO화보촬영",
      ],
    },
  ],
};
const tagList = ["사진", "영상", "뮤비", "홈쇼핑", "배우"];
const companyInfo = {
  name: "SELLECT",
  userType: "sellecter",
  profileImg: "/images/test.jpg",
  profileSubImg: [
    "/images/test1.png",
    "/images/test2.jpg",
    "/images/test3.jpg",
  ],

  companyInfo: [
    { title: "회사명", content: "SELLECT" },
    { title: "대표자", content: "김지은" },
    {
      title: "주소",
      content: "서울시 강서구 마곡동 888-2",
    },
    { title: "사업번호", content: "000-00-000000" },
  ],

  projectInfo: [
    {
      title: "홈페이지",
      content: "www.sellect.com",
    },
    { title: "프로젝트 범위", content: <TagButton list={tagList} /> },
  ],

  career: [
    "2020.01.01 OOO브랜드OOO화보촬영",
    "2021.05.30 OOO브랜드OOO화보촬영",
  ],
  tabItem: [
    {
      title: "프로젝트",
      content: `안녕하세요 OOO입니다.
OOO에서 창의적이고 유능한 셀럽 분들을 모집합니다.

* 자격요건
- 성별 : 여
- 나이 : 20~25
  
많은 지원 바랍니다.`,
    },
    {
      title: "커리어",
      content: [
        "2023.01.01 OOO브랜드OOO화보촬영",
        "2025.05.30 OOO브랜드OOO화보촬영",
      ],
    },
  ],
};

const user = "sellecter";

const RequestPage = (props) => {
  const [time, setTime] = useState(0);
  const hourlyPay = (time * userInfo.pay).toLocaleString();

  const handlePayChange = (e) => {
    const selectTime = e.target.value;
    setTime(selectTime);
  };

  const selectData =
    user === "selleb" ? userInfo : user === "sellecter" ? companyInfo : null;

  const tabItems = (() => {
    if (user === "selleb") {
      return [
        {
          title: "이미지",
          content: (
            <>
              {selectData.tabItem
                ?.find((item) => item.title === "이미지")
                ?.content?.map((img, index) => (
                  <ProfileImgBox src={img} key={index} />
                ))}
            </>
          ),
        },
        {
          title: "커리어",
          content: (
            <ul className="career">
              {selectData.tabItem
                ?.find((item) => item.title === "커리어")
                ?.content?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          ),
        },
      ];
    } else if (user === "sellecter") {
      return [
        {
          title: "프로젝트",
          content: (
            <pre className="request_project_content">
              {selectData?.tabItem?.find((item) => item.title === "프로젝트")
                ?.content || "데이터가 없습니다"}
            </pre>
          ),
        },
        {
          title: "커리어",
          content: (
            <ul className="career">
              {selectData.tabItem
                ?.find((item) => item.title === "커리어")
                ?.content?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
          ),
        },
      ];
    }
    if (!selectData?.tabItem) return [];
    return [];
  })();

  return (
    <MainLayout {...props}>
      <div className="request_container">
        <h3>{user === "selleb" ? "셀럽" : "셀렉터"} 요청서</h3>
        <div className="request_info">
          <div className="request_form">
            <img src="/images/test.jpg" />
            <span> {selectData.name}</span>
          </div>

          <div className="request_inner">
            <div className="request_inner_info">
              <div className="request_inner_list">
                <div>
                  <strong>프로젝트명: </strong> <span>CF 촬영</span>
                </div>
                <div>
                  <strong>촬영시간: </strong> <span>5시간</span>
                </div>
                <div>
                  <strong>시간 당 금액: </strong> <span>200,000</span>
                </div>
              </div>
              <div className="request_inner_list">
                <div>
                  <strong>에스크로: </strong>
                  <span>200,000</span>
                </div>
                <div>
                  <strong>부가세: </strong>
                  <span>120,000</span>
                </div>
                <div>
                  <strong>예상 총 금액: </strong>
                  <span>1,320,000</span>
                </div>
              </div>
            </div>
            <button>계약하기</button>
          </div>
        </div>
        {user === "selleb" ? (
          <>
            <section className="request_main_profile">
              <div className="request_main_profile_img">
                <ProfileImgBox src={selectData?.profileImg} />
              </div>

              <div className="request_profile_info">
                <div className="request_profile_pictures">
                  {selectData?.profileSubImg?.map((img, index) => (
                    <ProfileImgBox src={img} key={index} />
                  ))}
                </div>
                <div className="request_profile_List">
                  <ProfileInfoList list={selectData.userInfoList} />
                  <ProfileInfoList list={selectData.userThreeSizeList} />
                  <ProfileInfoList list={selectData.userSizeList} />
                  <ProfileInfoList list={selectData.userColorList} />
                  <ProfileInfoList list={selectData.userCountryList} />
                </div>
              </div>
            </section>
            <div className="request_profile">
              <h3>{selectData.name}</h3>
              <div className="request_profile_btn">
                <LikeButton />
                <Button>Com-Card</Button>
                <Button>Chat</Button>
                <Link to="/quotation">
                  <Button>견적 확인하기</Button>
                </Link>
              </div>
            </div>
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
                <TagButton list={selectData.tagList} />
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
          </>
        ) : user === "sellecter" ? (
          <div>
            <section className="request_main_profile_sellecter">
              <div>
                <ProfileImgBox src={selectData?.profileImg} />
              </div>
              <div className="request_sellecter_profile_info">
                <ProfileInfoList list={selectData?.companyInfo} />
                <ProfileInfoList list={selectData?.projectInfo} />
              </div>
            </section>
            <div className="request_profile">
              <h3>{selectData.name}</h3>
              <div className="request_profile_btn">
                <LikeButton />
                <Button>Chat</Button>
                <Link to="/quotation">
                  <Button>프로젝트 신청하기</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="tabs_content">
          <CustomTabs items={tabItems}></CustomTabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestPage;
