import { useState } from "react";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import { validationPatterns } from "../../../core/constants/validationPatterns";
import "./BankPage.css";

const BankPage = () => {
  const [value, setValue] = useState();

  const handleMoneyChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");

    if (!validationPatterns.number.value.test(inputValue)) {
      alert(validationPatterns.number.message);
      return;
    }

    const formattedValue = Number(inputValue).toLocaleString("ko-KR");
    setValue(formattedValue);
    console.log("dd", formattedValue);
  };

  return (
    <MainLayout>
      <div className="bankPage_container">
        <h4>BANK</h4>
        <div className="bankPage_Info">
          <div className="bankPage_Info_Inner">
            <p className="bankPage_Info_title">출금가능 금액: 500,000 (원)</p>
            <div className="bankPage_Info_desc">
              <p>
                최소 1,000,000 이상부터 <br /> 10,000원 단위로 출금 가능
              </p>
            </div>
          </div>
          <div className="bankPage_Info_Inner">
            <div className="bankPage_Info_title">
              <button>출금하기</button>
              <input
                type="text"
                placeholder="금액 입력"
                value={value}
                onChange={handleMoneyChange}
              />
            </div>

            <div className="bankPage_Info_Inner__Details">
              <p>계좌번호 : xxxx-xxx-xxx</p>
              <div className="bankPage_Info_Inner_pay">
                <div>
                  <p>정산 예정 금액</p>
                  <p>정산 이체 수수료 </p>
                  <p>정산 후 잔액 </p>
                </div>
                <div>
                  <p>500,000원</p>
                  <p>400,000원</p>
                  <p>300,000원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bankPage_content_box">콘텐츠박스</div>
      </div>
    </MainLayout>
  );
};

export default BankPage;
