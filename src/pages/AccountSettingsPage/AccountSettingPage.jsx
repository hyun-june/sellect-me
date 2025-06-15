import { useState } from "react";
import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import CustomBox from "./../../components/CustomBox/CustomBox";
import "./AccountSettingPage.css";

const settingData = ["내 정보", "알림 설정", "회원 탈퇴"];
const reasonData = [
  "셀럽이 많이 없어요.",
  "셀렉터가 많이 없어요.",
  "비매너 이용자를 만났어요.",
  "서비스 퀄리티가 별로에요.",
  "대체 가능한 서비스를 찾았어요.",
  "에스크로 수수료가 너무 부담돼요.",
  "이벤트, 쿠폰, 적립금 등의 혜택이 적어요",
  "기타",
];

const defaultUserData = {
  name: "김땡이",
  email: "eee@email.com",
  phone: "01022223333",
  bank: "국민은행",
  account_bank: "국민은행",
  account_number: "0000-33-333333-30",
  login_ID: "dddddd",
  login_password: "fffff",
  newPassword1: "",
  newPassword2: "",
  offer_app_push: false,
  offer_sms_push: false,
  offer_email_push: false,
  marketing_app_push: false,
  marketing_sms_push: false,
  marketing_email_push: false,
};

const AccountSettingPage = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userData, setUserData] = useState(defaultUserData);
  const [formData, setFormData] = useState(defaultUserData);
  const [userReason, setUserReason] = useState([]);
  const [userConsent, setUserConsent] = useState(false);
  const [userConsentBtn, setUserConsentBtn] = useState(false);

  const handleTab = (index) => {
    setTabIndex(index);
  };

  const editInfo = (e) => {
    e.preventDefault();
    if (tabIndex === 0) {
      if (formData.newPassword1 !== formData.newPassword2) {
        return console.log("비밀번호가 일치하지 않음");
      }

      setUserData(formData);
      console.log("저장된 데이터:", formData);
    } else if (tabIndex === 1) {
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAlarmChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({ ...prev, [id]: checked }));
  };

  const AccountButton = () => {
    return (
      <div className="account_btn">
        <button type="button" onClick={() => console.log("edit clicked")}>
          edit
        </button>
        <button type="submit" onClick={editInfo}>
          save
        </button>
      </div>
    );
  };

  const ReasonForLeaving = ({ item, index }) => {
    const handleCheck = (e) => {
      if (e.target.checked) {
        setUserReason((prev) => [...prev, item]);
      } else {
        setUserReason((prev) => prev.filter((reason) => reason !== item));
      }
    };
    return (
      <label htmlFor={`reason - ${index}`}>
        <input
          type="checkbox"
          checked={userReason.includes(item)}
          className="reason_check_input"
          id={`reason - ${index}`}
          onChange={(e) => {
            handleCheck(e);
          }}
        />
        {item}
      </label>
    );
  };

  const handleQuit = () => {
    if (!userConsent) {
      alert("동의 체크");
      return;
    }

    if (userReason.length === 0) {
      alert("사유 체크");
      return;
    }
    setUserConsentBtn(true);
    console.log("이유", userReason);

    if (userConsentBtn) {
      console.log("진짜 탈퇴");
    }
  };

  return (
    <MainLayout {...props}>
      <div className="account_title">
        <span></span>
        <h3>
          계정 설정 {">"}
          {tabIndex === 0
            ? "내 정보"
            : tabIndex === 1
            ? "알림 설정"
            : tabIndex === 2
            ? "회원 탈퇴"
            : ""}
        </h3>
      </div>
      <div className="account_container">
        <div>
          {settingData.map((item, index) => (
            <CustomBox key={index} onClick={() => handleTab(index)}>
              {item}
            </CustomBox>
          ))}
        </div>
        <div className="account_inner">
          <img
            src="/images/logo-outline-vertical-img.png"
            alt=""
            className="background_logo"
          />

          {tabIndex === 0 && (
            <form onSubmit={editInfo}>
              <AccountButton />
              <div className="account_myInfo">
                <div className="account_label">
                  <label htmlFor="name">이름</label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="account_label">
                  <label htmlFor="email">이메일</label>
                  <input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="account_label">
                  <label htmlFor="phone">휴대폰</label>
                  <input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="account_label">
                  <label htmlFor="account_bank">
                    계좌 정보: 개인계좌 / 사업자 계좌
                  </label>
                  <input
                    id="account_bank"
                    value={formData.account_bank}
                    placeholder="은행"
                    onChange={handleChange}
                  />
                  <input
                    id="account_number"
                    placeholder="계좌번호"
                    value={formData.account_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="account_label">
                  <label htmlFor="login">로그인 정보</label>
                  <input
                    id="login_ID"
                    value={formData.login_ID}
                    onChange={handleChange}
                  />
                  <input
                    id="login_password"
                    value={formData.login_password}
                    onChange={handleChange}
                  />
                </div>
                <div className="account_label">
                  <label htmlFor="change_password">비밀번호 변겅하기</label>
                  <input
                    id="change_password"
                    value={formData.newPassword1}
                    placeholder="새 비밀번호"
                    type="password"
                    onChange={handleChange}
                  />
                  <input
                    id="change_password1"
                    value={formData.newPassword2}
                    placeholder="한 번 더 입력"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          )}
          {tabIndex === 1 && (
            <form onSubmit={editInfo}>
              <AccountButton />
              <div className="account_push_setting">
                <p>제안 도착 시 알림</p>
                <div>
                  <label htmlFor="offer_app_push">
                    앱 푸시
                    <input
                      type="checkbox"
                      id="offer_app_push"
                      checked={formData.offer_app_push}
                      onChange={handleAlarmChange}
                    />
                  </label>

                  <label htmlFor="offer_sms_push">
                    SMS
                    <input
                      type="checkbox"
                      id="offer_sms_push"
                      checked={formData.offer_sms_push}
                      onChange={handleAlarmChange}
                    />
                  </label>
                  <label htmlFor="offer_email_push">
                    이메일
                    <input
                      type="checkbox"
                      id="offer_email_push"
                      checked={formData.offer_email_push}
                      onChange={handleAlarmChange}
                    />
                  </label>
                </div>
              </div>
              <div className="account_push_setting">
                <p>마케팅 정보 수신 동의</p>
                <div>
                  <label htmlFor="marketing_app_push">
                    앱 푸시
                    <input
                      type="checkbox"
                      id="marketing_app_push"
                      checked={formData.marketing_app_push}
                      onChange={handleAlarmChange}
                    />
                  </label>

                  <label htmlFor="marketing_sms_push">
                    SMS
                    <input
                      type="checkbox"
                      id="marketing_sms_push"
                      checked={formData.marketing_sms_push}
                      onChange={handleAlarmChange}
                    />
                  </label>
                  <label htmlFor="marketing_email_push">
                    이메일
                    <input
                      type="checkbox"
                      id="marketing_email_push"
                      checked={formData.marketing_email_push}
                      onChange={handleAlarmChange}
                    />
                  </label>
                </div>
              </div>
            </form>
          )}
          {tabIndex === 2 && (
            <div className="setting_tab_2">
              {!userConsentBtn && (
                <>
                  <div className="tab2_reason_section">
                    <div>
                      <h5>셀렉트에 가입한 계정을 확인해주세요.</h5>
                      <p>이메일 주소: xxxx12@naver.com</p>
                      <p>
                        Sellect 서비스에 가입한 계정의 정보는 탈퇴 시 지체없이
                        파기됩니다.
                        <br />
                        보다 자세한 개인정보 제공항목은 이용약관에서 확인하실 수
                        있습니다.
                      </p>
                    </div>
                    <div>
                      <h5>셀렉트를 떠나는 이유를 알려주세요.</h5>
                      <p>향후 셀렉트의 발전에 큰 도움이 됩니다.</p>
                      <div className="reason_list">
                        {reasonData.map((item, index) => (
                          <ReasonForLeaving
                            item={item}
                            index={index}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      현재 사용중인 계정 정보는 회원 탈퇴 후 복구가
                      불가능합니다.
                    </li>
                    <li>
                      진행 중인 프로젝트 거래 건이 있거나 거래에 관한 문제를
                      조치 중인 경우 탈퇴 신청이 불가합니다.
                    </li>
                    <li>
                      거래 완료된 프로젝트의 수익금은 출금을 통해 정산이 완료된
                      이후 탈퇴 신청이 가능합니다.
                    </li>
                    <li>
                      프로필과 프로젝트는 자동으로 삭제되지만 이미 거래한
                      프로젝트의 채팅 및 거래 내역이 삭제되지 않습니다.
                    </li>
                    <li>보유 중인 V-chat 이용권은 탈퇴 후 즉시 소멸됩니다.</li>
                    <li>
                      탈퇴 후 회원님의 정보는 전자상거래 소비자보허법에 의거한
                      셀렉트 개인정보처리방침에 따라 관리됩니다.
                    </li>
                  </ul>
                  <label htmlFor="warning_agreement">
                    <input
                      type="checkbox"
                      id="warning_agreement"
                      className="reason_check_input"
                      checked={userConsent}
                      onChange={(e) => setUserConsent(!userConsent)}
                    />
                    주의사항을 모두 확인하였습니다.
                  </label>
                </>
              )}

              {userConsentBtn ? (
                <div>
                  보유 중인 이용권은 자동 소멸됩니다. 정말로 탈퇴하시겠습니까?
                </div>
              ) : null}

              <div className="tab2_btn">
                <button onClick={() => setUserConsentBtn(false)}>
                  계속 셀렉트하기
                </button>
                <button onClick={handleQuit}>회원 탈퇴하기</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettingPage;
