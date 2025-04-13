import MainLayout from "../../../../components/Layout/MainLayout/MainLayout";
import "./PayMentPage.css";

const PayMentPage = () => {
  const payMentTest = {
    name: "aaa",
    description: "AAA테스트",
    date: "10.22",
    memo: [
      { id: 1, label: "프로젝트명", content: "AAA 신제품 화보 촬영" },
      { id: 2, label: "금액", content: "1,000,000(원)" },
      { id: 3, content: "1,300,000(원)" },
    ],
  };

  return (
    <MainLayout>
      <div className="payment_container">
        <h4>BANK</h4>

        <div className="payment_info">
          <img
            src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
            alt=""
          />
          <span>김모땡</span>
        </div>
        <div className="payment_details">
          <div className="payment_details_inner">
            <table>
              <tr>
                <th>프로젝트명</th>
                <td>BBB CF 화보 촬영</td>
              </tr>
              <tr>
                <th>촬영예정일</th>
                <td>2024.10.20</td>
              </tr>
              <tr>
                <th>셀럽비용</th>
                <td>200,000(1hr)</td>
              </tr>
              <tr>
                <th>촬영시간</th>
                <td>5(hr)</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tbody>
                <tr>
                  <th>셀럽 사용료</th>
                  <td>1,000,000 원</td>
                </tr>
                <tr>
                  <th>에스크로 수수료(20%)</th>
                  <td>200,000 원</td>
                </tr>
                <tr>
                  <th>부가세(10%)</th>
                  <td>100,000 원</td>
                </tr>
              </tbody>
              <tr>
                <td></td>
              </tr>
              <tr class="total">
                <th>총 결제 금액</th>
                <td>1,320,000 원</td>
              </tr>
            </table>
          </div>
          <div className="payment_details_inner">box1</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PayMentPage;
