import { useState } from "react";
import MainLayout from "../.././../../Layouts/MainLayout/MainLayout";
import Button from "../../../../components/Button/Button";
import "./PayMentPage.css";

const PayMentPage = (props) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedPayMent, setSelectedPayMent] = useState();
  const [checkLists, setCheckLists] = useState({
    서비스이용약관: false,
    개인정보수집: false,
    마케팅수신: false,
    장기미접속: false,
    세금계산서: false,
  });

  const payMentTestInfo = {
    name: "aaa",
    title: "AAA 신제품 화보 촬영",
    description: "AAA테스트",
    date: "2024.10.22",
    sellebPay: 100000,
    profile:
      "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    time: 5,
    memo: [
      { id: 1, label: "프로젝트명", content: "AAA 신제품 화보 촬영" },
      { id: 2, label: "금액", content: "1,000,000(원)" },
      { id: 3, content: "1,300,000(원)" },
    ],
  };

  // 계산식
  const { name, profile, title, date, sellebPay, time } = payMentTestInfo;
  const sellebExpense = sellebPay * time;
  const escrowfee = sellebExpense * 0.2;
  const surtax = sellebExpense * 0.1;
  const total = sellebExpense + escrowfee + surtax;

  const payMentOptions = {
    basic: {
      계좌이체: {
        name: "퀵계좌이체",
        sub: "(실시간 계좌이체)",
        event: true,
      },
      신용카드: { name: "신용카드", event: true },
      무통장입금: { name: "무통장입금", event: false },
      휴대폰: { name: "휴대폰", event: false },
    },
    pay: {
      toss: { name: "toss", event: true },
      naver: { name: "naver", event: true },
      kakao: { name: "kakao", event: false },
    },
  };

  const handleCheckBoxAll = (e) => {
    const isChecked = e.target.checked;
    setIsAllChecked(isChecked);

    setCheckLists((prev) => ({
      ...prev,
      서비스이용약관: isChecked,
      개인정보수집: isChecked,
      마케팅수신: isChecked,
      장기미접속: isChecked,
    }));
  };

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;

    setCheckLists((prev) => {
      const updatedCheckLists = {
        ...prev,
        [name]: checked,
      };

      const isAllChecked = Object.entries(updatedCheckLists)
        .filter(([key]) => key !== "세금계산서")
        .every(([, value]) => value);

      setIsAllChecked(isAllChecked);

      return updatedCheckLists;
    });
  };

  const handleSelectPayMent = (click) => {
    setSelectedPayMent(click);
  };

  const handlePayMentRequest = () => {
    if (!checkLists.서비스이용약관 || !checkLists.개인정보수집) {
      alert("필수 약관에 동의해 주세요.");
      return;
    }

    if (!selectedPayMent) {
      alert("결제방식을 선택해주세요");
    }

    console.log("동의 체크", checkLists);
    console.log("결제방식", selectedPayMent);
  };

  return (
    <MainLayout {...props}>
      <div className="payment_container">
        <h3>BANK</h3>

        <section className="payment_info">
          <img src={profile} alt="" />
          <span>{name}</span>
        </section>
        <section className="payment_details">
          <div className="payment_details_inner">
            <table>
              <tr>
                <th>프로젝트명</th>
                <td>{title}</td>
              </tr>
              <tr>
                <th>촬영예정일</th>
                <td>{date}</td>
              </tr>
              <tr>
                <th>셀럽비용</th>
                <td>{sellebPay.toLocaleString()}(1hr)</td>
              </tr>
              <tr>
                <th>촬영시간</th>
                <td>{time}(hr)</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tbody>
                <tr>
                  <th>셀럽 사용료</th>
                  <td>{sellebExpense.toLocaleString()} 원</td>
                </tr>
                <tr>
                  <th>에스크로 수수료(20%)</th>
                  <td>{escrowfee.toLocaleString()} 원</td>
                </tr>
                <tr>
                  <th>부가세(10%)</th>
                  <td>{surtax.toLocaleString()} 원</td>
                </tr>
              </tbody>
              <tr>
                <td></td>
              </tr>
              <tr class="total">
                <th>총 결제 금액</th>
                <td>{total.toLocaleString()} 원</td>
              </tr>
            </table>
          </div>
          <div className="payment_details_inner assent_section">
            <label>
              <input
                type="checkbox"
                name="이용약관 전체 동의"
                checked={isAllChecked}
                onChange={handleCheckBoxAll}
              />
              <span>이용약관 전체 동의</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="서비스이용약관"
                checked={checkLists.서비스이용약관}
                onChange={handleCheckBox}
              />
              <span>서비스 이용약관에 동의합니다.(필수)</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="개인정보수집"
                checked={checkLists.개인정보수집}
                onChange={handleCheckBox}
              />
              <span>개인정보 수집, 이용에 동의합니다.(필수)</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="마케팅수신"
                checked={checkLists.마케팅수신}
                onChange={handleCheckBox}
              />
              <span>
                마케팅 수신, 홍보 목적의 개인정보 수집, 이용에 동의합니다.(선택)
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                name="장기미접속"
                checked={checkLists.장기미접속}
                onChange={handleCheckBox}
              />
              <span>장기 미접속 시 계절 활성 상태 유지합니다.(선택)</span>
            </label>
          </div>
        </section>
        <section className="payment_options_section">
          <h4>결제 방법</h4>
          <ul>
            {Object.entries(payMentOptions.basic).map(([key, value]) => (
              <Button
                className={`custom_button ${
                  value.name === selectedPayMent ? "select" : ""
                }`}
                key={key}
                onClick={() => handleSelectPayMent(key)}
              >
                <div>{value.name}</div>
                {value.sub && <span className="sub_title">{value.sub}</span>}
                {value.event && <span className="event_badge">혜택</span>}
              </Button>
            ))}
          </ul>
          <ul>
            {Object.entries(payMentOptions.pay).map(([key, value]) => (
              <Button
                className={`custom_button ${
                  value.name === selectedPayMent ? "select" : ""
                }`}
                key={key}
                onClick={() => handleSelectPayMent(key)}
              >
                <div>{value.name} pay</div>
              {value.sub && <span className="sub_title">{value.sub}</span>}
              {value.event && <span className="event_badge">혜택</span>}
              </Button>
            ))}
          </ul>
        </section>
        <section className="tax_voice_section">
          <label>
            <input
              type="checkbox"
              name="세금계산서"
              onChange={handleCheckBox}
            />
            <span>세금계산서 발행</span>
          </label>
          <ul>
            <li>
              거래 금액에 대한 세금 계산서는 결제 단계에서 신청하실 수 있습니다.
            </li>
            <li>
              수수료에 대한 세금 계산서는 셀렉트에서 발행하며, 결제 단계에서
              별도로 신청하실 수 있습니다.
            </li>
            <li>세금계산서는 거래 확정일(거래완료일)을 기준으로 발행됩니다.</li>
            <li>
              퀵계좌이체(실시간 계좌이체), 무통장입금 선택 시 신청한
              현금영수증은 매입세액공제가 불가합니다.
            </li>
            <li>
              신용카드 선택 시 발행된 카드 전표는 결제에 대한 증빙용으로만 사용
              가능하며, 매입세액공제가 불가합니다.
            </li>
          </ul>
          <Button onClick={handlePayMentRequest}>결제하기</Button>
        </section>
      </div>
    </MainLayout>
  );
};

export default PayMentPage;
