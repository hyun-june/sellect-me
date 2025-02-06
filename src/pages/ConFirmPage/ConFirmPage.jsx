import { useState } from "react";
import SignBox from "./components/SignBox/SignBox";
import "./ConFirmPage.css";

const ConFirmPage = () => {
  const [sellebSign, setSellebSign] = useState(null);
  const [sellecterSign, setSellecterSign] = useState(null);

  const saveSelleb = (signData) => setSellebSign(signData);
  const saveSellecter = (signData) => setSellecterSign(signData);

  return (
    <div className="confirm_container">
      <h4>컨펌 및 계약</h4>
      <div className="confirm_inner">
        <div className="user_info">
          <table>
            <tbody>
              <tr>
                <th rowspan="3">셀럽 정보</th>
                <td>이름 : 땡땡땡</td>
              </tr>
              <tr>
                <td>주소 : 서울시 강서구 마곡동 798-3</td>
              </tr>
              <tr>
                <td>연락처 : 000-0000-0000</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th rowspan="3">셀렉트 정보</th>
                <td>담당자 이름 : 땡땡땡</td>
              </tr>
              <tr>
                <td>주소 : 서울시 강서구 마곡동 798-3</td>
              </tr>
              <tr>
                <td>연락처 : 000-0000-0000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className="service_info">
          <tbody>
            <tr>
              <th rowspan="5">서비스 내용 및 일정</th>
              <td>프로젝트명 : OOOOOOO</td>
            </tr>
            <tr>
              <td>카테고리 : 홈쇼핑</td>
            </tr>
            <tr>
              <td>계약 시작일 : 11.10</td>
            </tr>
            <tr>
              <td>계약 종료일 : 11.12</td>
            </tr>
            <tr>
              <td>계약 시간 : 5(시간)</td>
            </tr>
          </tbody>
        </table>
        <div className="contract_terms">
          <div className="inner_text">
            <h6>계약 목적</h6>
            <p>
              본 계약은 셀렉터(클라이언트)가 셀럽(크리에이터)와 프로젝트를
              진행함에 있어, 양측의 역할과 의무를 규정함을 목적으로 합니다.
            </p>
          </div>
          <div className="inner_text">
            <h6>금액 정보</h6>
            <p>
              계약금액: 1,000,000(촬영비) + 200,000(에스크로) + 120,000(부가세)
              = 1,320,000 (원)
            </p>
            <p>
              계약금액지급방식: 셀렉트에스크로시스템 – 셀렉터가 계약 완료 신청을
              할 시 셀럽에게 지급
            </p>
          </div>
          <div className="inner_text">
            <h6>취소 및 환불 규정</h6>
            <span>셀럽 노쇼 신고 시:</span>
            <ul>
              <li>
                셀럽 : 노쇼1회– 1달활동정지/ 노쇼2회– 2달활동정지/ 노쇼3회– 영구
                활동정지
              </li>
              <li>셀렉터:전액반환</li>
            </ul>
          </div>
          <div className="inner_text">
            <h6>기타 정보</h6>
            <p>
              <strong>저작권</strong> : 1년
            </p>
            <p>
              프로젝트 결과물에 대한 저작권 소유(셀렉터가 사용 권리를 갖되,
              셀럽의 동의 없이 특정 용도로 사용 불가 등)
            </p>
            <p>
              <strong>초상권</strong> : 셀럽의 초상권 사용에 대한 허가 범위 :
              홈쇼핑 인서트 영상, 상세페이지
            </p>
            <p>
              <strong>비밀유지</strong> : 셀럽과 셀렉터는 서로에게 제공되는 모든
              정보의 기밀성을 유지해야 함
            </p>
          </div>
        </div>

        <div className="sign_box">
          <SignBox id="selleb" title="셀럽" saveSign={saveSelleb} />
          <SignBox id="sellecter" title="셀렉터" saveSign={saveSellecter} />
        </div>
      </div>

      {/* 
              <div>
                  <h5>Sign 1 저장된 서명:</h5>
                  <img src={sellebSign} alt="Sign 1" />
              </div>
              <div>
                  <h5>Sign 2 저장된 서명:</h5>
                  <img src={sellecterSign} alt="Sign 2" />
              </div> */}
    </div>
  );
};

export default ConFirmPage;
