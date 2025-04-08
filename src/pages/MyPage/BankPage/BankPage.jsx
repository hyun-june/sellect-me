import { useState } from "react";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import { validationPatterns } from "../../../core/constants/validationPatterns";
import ProjectContentBox from "../ProjectManagementPage/components/ProjectContentBox/ProjectContentBox";
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
    console.log("출금 가능 금액:", formattedValue);
  };

  const getMoney = () => {
    if (!value || value == 0) {
      return alert("금액을 입력해주세요.");
    }
    console.log("출금", value);
  };

  const user = "sellecter";

  const bankTest = {
    1: {
      name: "aaa",
      description: "AAA테스트",
      date: "10.22",
      memo: [
        { id: 1, label: "프로젝트명", content: "AAA 신제품 화보 촬영" },
        { id: 2, label: "금액", content: "1,000,000(원)" },
        { id: 3, content: "1,300,000(원)" },
      ],
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
      memo: [
        { id: 1, content: "테스트 메모" },
        { id: 2, content: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ" },
      ],
    },
  };

  return (
    <MainLayout>
      <div className="bankPage_container">
        <h4>BANK</h4>
        {user === "selleb" && (
          <>
            <div className="bankPage_Info">
              <div className="bankPage_Info_Inner">
                <div className="bankPage_Info_title">
                  <p>출금가능 금액: 500,000 (원)</p>
                </div>
                <div className="bankPage_Info_desc">
                  <p>
                    최소 1,000,000 이상부터 <br /> 10,000원 단위로 출금 가능
                  </p>
                </div>
              </div>
              <div className="bankPage_Info_Inner">
                <div className="bankPage_Info_title">
                  <input
                    type="text"
                    placeholder={`출금가능금액 : 500,000(원)`}
                    value={value}
                    onChange={handleMoneyChange}
                  />
                  <button onClick={getMoney}>출금하기</button>
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
            <div className="bankPage_content_box">
              {Object.entries(bankTest).map(([key, item]) => (
                <ProjectContentBox
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  date={item.date}
                  memo={item.memo}
                  status="selleb_approve"
                />
              ))}
            </div>
          </>
        )}

        {user === "sellecter" && (
          <>
            <div className="bankPage_content_box">
              {Object.entries(bankTest).map(([key, item]) => (
                <div className="bankPage_sellecter">
                  <input type="checkbox" key={item.id} />
                  <ProjectContentBox
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                    memo={item.memo}
                    status="sellecter_approve"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default BankPage;
