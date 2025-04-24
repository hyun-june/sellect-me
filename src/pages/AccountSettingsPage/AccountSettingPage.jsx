import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import CustomBox from "./../../components/CustomBox/CustomBox";
import "./AccountSettingPage.css";

const settingData = ["내 정보", "알림 설정", "회원 탈퇴"];

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
};

const AccountSettingPage = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userData, setUserData] = useState(defaultUserData);
  const [formData, setFormData] = useState(defaultUserData);

  const handleTab = (index) => {
    setTabIndex(index);
  };

  const editInfo = (e) => {
    e.preventDefault();
    if (formData.newPassword1 !== formData.newPassword2) {
      return console.log("비밀번호가 일치하지 않음");
    }

    setUserData(formData);
    console.log("저장된 데이터:", formData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <MainLayout {...props}>
      <div className="account_title">
        <span></span>
        <h5>계정 설정 {">"} 내 정보</h5>
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
              <div className="account_btn">
                <button
                  type="button"
                  onClick={() => console.log("edit clicked")}
                >
                  edit
                </button>
                <button type="submit" onClick={editInfo}>
                  save
                </button>
              </div>
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
            <div>
              <div className="account_btn">
                <button
                  type="button"
                  onClick={() => console.log("edit clicked")}
                >
                  edit
                </button>
                <button type="submit" onClick={editInfo}>
                  save
                </button>
              </div>
            </div>
          )}
          {tabIndex === 2 && <div>33</div>}
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettingPage;
