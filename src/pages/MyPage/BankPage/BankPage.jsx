import { useEffect, useState } from "react";
import MainLayout from "../../../components/Layout/MainLayout/MainLayout";
import { validationPatterns } from "../../../core/constants/validationPatterns";
import ProjectContentBox from "../ProjectManagementPage/components/ProjectContentBox/ProjectContentBox";
import "./BankPage.css";

const BankPage = (props) => {
  const [value, setValue] = useState();
  const [checkedItems, setCheckedItems] = useState([]);
  const [cancelStatus, setCancelStatus] = useState();

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
    if (!value || value === 0) {
      return alert("금액을 입력해주세요.");
    }
    console.log("출금", value);
  };

  const checkedName = checkedItems.map((item) => item.name);

  const handleCheckContent = (key, des, checked, name) => {
    setCheckedItems((prev) =>
      checked
        ? [...prev, { key, name, des }]
        : prev.filter((item) => item.key !== key)
    );
  };

  const handleCancelStatus = (value) => {
    if (value === "yes") {
      setCancelStatus(value);
      return console.log("유저가 취소에 동의함", checkedName);
    } else if (value === "no") {
      setCancelStatus(value);
      return console.log("유저가 취소에 동의하지 않음", checkedName);
    }
  };

  const handleCancelBtn = () => {
    if (cancelStatus === "yes") {
      if (checkedItems.length > 0) {
        console.log("취소를 요청한 건", checkedItems);
      } else {
        alert("선택된 거래가 없습니다.");
      }
    } else {
      return console.log("취소 요청 선택 X");
    }
  };

  useEffect(() => {
    console.log("업데이트된 checkedItems:", checkedItems);
    console.log("선택된 name 목록:", checkedName);
  }, [checkedItems]);

  const user = "sellecter";

  const bankTest = {
    1: {
      name: "aaa",
      description: "AAA테스트",
      date: "10.22",
      memo: [
        { id: "title", label: "프로젝트명", content: "AAA 신제품 화보 촬영" },
        { id: "expense", label: "금액", content: "1,000,000(원)" },
        { id: "total", content: "1,300,000(원)" },
      ],
    },
    2: {
      name: "dddd",
      description: "dddd테스트",
      date: "10.22",
      memo: [
        { id: "title", label: "프로젝트명", content: "AAA 신제품 화보 촬영" },
        { id: "expense", label: "금액", content: "1,000,000(원)" },
        { id: "commission", label: "+ 수수료", content: "200,000(원)" },
        { id: "surtax", label: "+ 부가세", content: "100,000(원)" },
        { id: "total", content: "1,320,000(원)" },
      ],
    },
  };

  return (
    <MainLayout {...props}>
      <div className="bankPage_container">
        <h3>BANK</h3>
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
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckContent(
                        key,
                        item.description,
                        e.target.checked,
                        item.name
                      )
                    }
                  />
                  <ProjectContentBox
                    id={key}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                    memo={item.memo}
                    status="sellecter_approve"
                  />
                </div>
              ))}
            </div>
            <div className="bankPage_cancel_section">
              <div className="bankPage_cancel_inner">
                <div className="cancel_inner_title">거래 취소하기</div>
                <div>
                  {checkedName.join(", ")} 셀럽님과의 거래를 취소하시겠습니까?
                </div>
                <label>
                  네
                  <input
                    type="radio"
                    name="cancel"
                    value="yes"
                    onChange={(e) => handleCancelStatus(e.target.value)}
                  />
                </label>
                <label>
                  아니요
                  <input
                    type="radio"
                    name="cancel"
                    value="no"
                    onChange={(e) => handleCancelStatus(e.target.value)}
                  />
                </label>
              </div>
              <div className="bankPage_cancel_inner">
                <div className="cancel_inner_title">취소 사유</div>
                <label>
                  셀럽의 노쇼
                  <input type="checkbox" value="노쇼" />
                </label>
                <label>
                  일정 문제
                  <input type="checkbox" value="일정 문제" />
                </label>
                <label>
                  예산 문제
                  <input type="checkbox" value="예산 문제" />
                </label>
                <label>
                  기타
                  <input type="checkbox" value="기타" />
                </label>
              </div>
              <button onClick={handleCancelBtn}>제출하기</button>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default BankPage;
