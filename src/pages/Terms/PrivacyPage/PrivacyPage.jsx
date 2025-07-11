import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import "./PrivacyPage.css";

const PrivacyPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="privacy_container">
        <h3>셀렉트 개인정보 처리 방침</h3>
        <section>
          <h4>셀렉트 개인정보 처리방침</h4>
          <p>
            주식회사 영상공장(이하 “회사”)는 셀렉트(이하 “서비스”)를 제공함에
            있어 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보
            보호법」, 「위치정보의 보호 및 이용 등에 관한 법률」,
            「통신비밀보호법」 등 국내의 개인정보보호 관련법령을 준수하며,
            이용자 권익 보호에 최선을 다하고 있습니다. 이와 관련한 고충을
            신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
            처리방침을 수립·공개합니다.
          </p>
        </section>
        <section>
          <h4>제 2조 정의</h4>
          <div className="table_layout">
            <span>
              (1) 회사는 다음의 개인정보 항목을 정보주체의 동의 없이 처리하고
              있습니다.
            </span>
            <table>
              <thead>
                <tr>
                  <th>관련법령</th>
                  <th>처리 목적</th>
                  <th>처리 항목</th>
                  <th>보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    개인정보 보호법 <br />
                    제15조제1항제2호
                    <br />
                    (법률에 특별한 규정)
                    <br />
                    전자상거래 등에서의 <br />
                    소비자보호에 관한 법률 제6조
                    <br />
                    (거래기록의 보존 등)
                  </td>
                  <td>계약 또는 청약철회 등에 관한 기록</td>
                  <td>소비자 식별정보, 계약/청약 철회 기록</td>
                  <td>5년</td>
                </tr>
                <tr>
                  <td></td>
                  <td>대금결제 및 재화 등의 공급에 관한 기록</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>소비자의 불만 또는 분쟁처리에 관한 기록</td>
                  <td>소비자 식별정보, 분쟁처리 기록</td>
                  <td>3년</td>
                </tr>
                <tr>
                  <td>
                    개인정보 보호법 <br />
                    제15조제1항제2호
                    <br />
                    (법률에 특별한 규정)
                    <br />
                    부가가치세법 제32조 <br />
                    (세금계산서 등)
                  </td>
                  <td>
                    장부, 세금계산서, 수입세금계산서, 영수증 발급, 정산 및 세금
                    납부
                  </td>
                  <td>
                    부가가치세의 과세표준, 세액의 신고자료, 사업자등록증,
                    주민등록번호
                  </td>
                  <td>5년</td>
                </tr>
                <tr>
                  <td>
                    개인정보 보호법 <br />
                    제15조제1항제2호
                    <br />
                    (법률에 특별한 규정)
                    <br />
                    통신비밀보호법 <br />
                    제15조의2 <br />
                    (전기통신사업자의 협조의무)
                  </td>
                  <td>통신사실확인자료</td>
                  <td>서비스 이용 관련 기록</td>
                  <td>3개월</td>
                </tr>
                <tr>
                  <td>
                    개인정보 보호법 <br />
                    제15조제1항제4호
                    <br />
                    (계약의 이행)
                  </td>
                  <td>본인확인 및 연령확인</td>
                  <td>
                    본인확인 정보
                    <br />
                    (이름, 생년월일, 성별, 통신사명, 휴대폰번호, CI, DI,
                    내/외국인정보)
                  </td>
                  <td>회원 탈퇴 시까지</td>
                </tr>

                <tr>
                  <td></td>
                  <td>사업자등록여부 및 대금지급 정보 확인</td>
                  <td>
                    사업자 등록증, 통장사본
                    <br />
                    (개인사업자의 경우 대표자 명의 통장, 법인 사업자의 경우 법인
                    명의 통장)
                  </td>
                  <td>회원 탈퇴 시까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table_layout">
            <span>
              (2) 회사는 서비스 이용에 필요한 최소한의 개인정보를 수집하며,
              이용자에게 해당 사실을 알리고 사전 동의를 받습니다. <br />
              회사가 이용자로부터 처리하는 개인정보는 아래와 같습니다.
            </span>
            <table>
              <thead>
                <tr>
                  <th>처리 목적</th>
                  <th>처리 항목</th>
                  <th>보유 및 이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>회원가입 및 관리</td>
                  <td>
                    필수 <br />
                    - 카카오계정: <br />
                    이메일주소, 닉네임, (외국인의 경우) 비자정보(비자 종류,
                    날짜, 기간) <br />
                    - 페이스북: <br />
                    성명, 이메일주소, (외국인의 경우) 비자정보(비자 종류, 날짜,
                    기간) <br />
                    - 구글: <br />
                    성명, 이메일주소, (외국인의 경우) 비자정보(비자 종류, 날짜,
                    기간)
                  </td>
                  <td>
                    회원 탈퇴 후 6개월 <br />
                    단, 관계 법령에 따라 파기하지 않고 <br />
                    보존하여야 하는 경우에는 해당 기간까지
                  </td>
                </tr>
                <tr>
                  <td>서비스 제공</td>
                  <td>
                    필수 <br />- 성명, 전화번호, ID, 이메일주소, 개인위치정보,
                    신용카드번호, <br />
                    (외국인의 경우) 외국인등록번호
                  </td>
                  <td>
                    회원 탈퇴 시까지 <br />
                    단, 관계 법령에 따라 파기하지 않고 <br />
                    보존하여야 하는 경우에는 해당 기간까지
                  </td>
                </tr>
                <tr>
                  <td>고객 연결을 위한 프로필 제공</td>
                  <td>
                    선택 <br />- 성명, 국적, 성별, 키, 가슴 둘레, 허리 둘레, 힙
                    둘레, 신발 사이즈, <br />
                    머리 색깔, 눈동자 색깔, 상의 사이즈, 하의 사이즈, <br />
                    모델 사진, 모델 동영상, 모델 커리어 정보
                  </td>
                  <td>
                    회원 탈퇴 시까지 <br />
                    단, 관계 법령에 따라 파기하지 않고 <br />
                    보존하여야 하는 경우에는 해당 기간까지
                  </td>
                </tr>
                <tr>
                  <td>고객지원</td>
                  <td>
                    필수 <br />- ID, 문의 및 답변 이력
                  </td>
                  <td>
                    회원 탈퇴 시까지 <br />
                    단, 관계 법령에 따라 파기하지 않고 <br />
                    보존하여야 하는 경우에는 해당 기간까지
                  </td>
                </tr>
                <tr>
                  <td>홍보 및 마케팅</td>
                  <td>
                    선택 <br />- 성명, 생년월일, 전화번호, ID, 이메일주소
                  </td>
                  <td>
                    회원 탈퇴 시까지 <br />
                    단, 관계 법령에 따라 파기하지 않고 <br />
                    보존하여야 하는 경우에는 해당 기간까지
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table_layout">
            <span>
              (3) 회사는 서비스 이용에 필요한 최소한의 개인위치정보를 수집하며,
              이용자에게 해당 사실을 알려고 사전 동의를 받습니다. <br />
              회사가 이용자로부터 처리하는 개인위치정보는 아래와 같습니다.
            </span>
            <table>
              <thead>
                <tr>
                  <th>서비스</th>
                  <th>처리 목적</th>
                  <th>보유 및 이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>셀렉트</td>
                  <td>고객 연결을 위한 프로필 제공</td>
                  <td>회원 탈퇴 시까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>
            (4) 회사는 「위치정보의 보호 및 이용 등에 관한 법률」 제16조 제2항에
            따라 위치정보 수집·이용·제공사실 확인자료를 자동 기록·보존하며, 해당
            자료는 6개월간 보관합니다.
          </span>
        </section>
        <section>
          <h4>제 2조 14세 미만 아동의 개인정보</h4>
          <p>
            (5) 회사는 14세 미만 아동의 개인정보를 처리하기 위하여 동의가 필요한
            경우에는 해당 아동의 법정대리인으로부터 동의를 받습니다.
          </p>
          <p>
            (6) 회사는 14세 미만 아동의 개인정보 처리에 관하여 그 법정대리인의
            동의를 받을 때에는 법정대리인의 성명, 연락처와 같이 최소한의 정보를
            요구할 수 있으며, 동의 내용을 게재한 홈페이지 화면에 법정대리인이
            동의 여부를 표시하도록 하고 그 동의 표시를 확인하였음을 법정대리인의
            휴대전화 메시지로 알리는 방법으로 그 사실을 확인합니다.
          </p>
        </section>
        <section>
          <h4>제 3조 개인(위치)정보의 제3자 제공</h4>
          <p>
            (7) 회사는 이용자의 개인정보를 개인정보의 처리 목적에서 명시한 범위
            내에서만 처리하며, 이용자의 동의, 법률의 특별한 규정 등 「개인정보
            보호법」 제17조 제18조에 해당하는 경우에만 개인정보를 제3자에게
            제공하고 그 이외에는 정보주체의 개인정보를 제3자에게 제공하지
            않습니다.
          </p>
          <p>
            (8) 회사는 원활한 서비스 제공을 위해 이용자의 동의를 얻어 회사가
            운영하는 홈페이지(<a href="/">https://select.best</a>), 블로그,
            소셜미디어(SNS) 등 매체를 통하여 인재 또는 고객을 소개받고자 하는
            다른 이용자에게 이용자의 개인정보를 제공·공개합니다.
          </p>
          <div className="table_layout">
            <table>
              <thead>
                <tr>
                  <th>제공받는 자</th>
                  <th>제공목적</th>
                  <th>제공항목</th>
                  <th>보유 및 이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>고객 등 인재를 소개받고자 하는 자</td>
                  <td>고객 연결을 위한 프로필 제공</td>
                  <td>
                    성명, 국적, 성별, 키, 가슴 둘레, 허리 둘레, 힙 둘레, 신발
                    사이즈, <br />
                    머리 색깔, 눈동자 색깔, 상의 사이즈, 하의 사이즈, <br />
                    모델 사진, 모델 동영상, 모델 커리어 정보
                  </td>
                  <td>회원 탈퇴 시까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            (9) 회사는 원활한 서비스 제공을 위해 이용자의 동의를 얻어 회사가
            운영하는 홈페이지(<a href="/">https://select.best</a>), 블로그,
            소셜미디어(SNS) 등 매체를 통하여 인재를 소개받고자 하는 고객 등
            이용자에게 정보주체(인재)의 개인위치정보를 제공·공개합니다.
          </p>
          <div className="table_layout">
            <table>
              <thead>
                <tr>
                  <th>제공받는 자</th>
                  <th>제공목적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이용자</td>
                  <td>고객 연결을 위한 프로필 제공</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            (10) 회사는 정부 관계부처가 합동으로 발표한 「긴급상황 시 개인정보
            처리 및 보호수칙」에 따라 재난, 감염병, 급박한 생명·신체 위험을
            초래하는 사건·사고, 급박한 재산손실 등의 긴급상황이 발생하는 경우
            정보주체의 동의 없이 관계기관에 개인정보를 제공할 수 있습니다.
            자세한 사항은 여기*를 눌러 확인하시기 바랍니다.
          </p>
          <p>
            (11) 회사는 개인위치정보를 이용자가 지정하는 제3자에게 제공하는
            경우에는 개인 위치정보를 수집한 해당 통신 단말장치 또는 전자우편주소
            등으로 매회 이용자에게 제공받는 자, 제공일시 및 제공목적(이하
            “정보제공내역”)을 즉시 통보합니다. 이용자는 「위치정보의 보호 및
            이용 등에 관한 법률」 시행령 제24조에 따라 정보제공내역을 30일마다
            모아서 통보받는 방법을 선택할 수 있으며, 회원이 회사의 절차에 따라
            요청할 경우 전항에 따른 즉시 통보 방법으로 변경할 수 있습니다.
          </p>
          <p>
            (12) 다음 각 호에 해당하는 경우에는 제5항의 통보를 이용자가 미리
            특정하여 지정한 통신단말장치 또는 전자우편주소 등으로 통보합니다.
          </p>
          <p>
            1. 개인위치정보를 수집한 해당 통신단말장치가 문자, 음성 또는 영상의
            수신기능을 갖추지 아니한 경우
          </p>
          <p>
            2. 이용자가 개인위치정보를 수집한 해당 통신단말장치 외의
            통신단말장치 또는 전자우편주소 등으로 통보할 것을 미리 요청한 경우
          </p>
        </section>
        <section>
          <h4>제 4조 개인정보처리 위탁</h4>
          <p>
            (13) 회사는 이용자에게 서비스를 제공하기 위해 아래와 같이 개인정보
            및 처리업무를 위탁하고 있습니다.
          </p>
          <div className="table_layout">
            <table>
              <thead>
                <tr>
                  <th>위탁받는 자(수탁자)</th>
                  <th>위탁업무</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>해당 없음</td>
                  <td>해당 없음</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            (14) 회사는 위탁계약 체결시 「개인정보 보호법」 제26조에 따라
            위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치,
            재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을
            계약서 등 문서에 명시하고 수탁자가 개인정보를 안전하게 처리하는지를
            감독하고 있습니다.
          </p>
          <p>
            (15) 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
            개인정보 처리방침을 통하여 공개하도록 하겠습니다.
          </p>
        </section>
        <section>
          <h4>제 5조 민감정보의 공개 가능성 및 비공개를 선택하는 방법</h4>
          <div className="table_layout">
            <span>
              회사는 이용자에게 서비스를 제공하는 과정에서 공개되는 정보에
              정보주체의 민감정보가 포함됩니다.
            </span>
            <table>
              <thead>
                <tr>
                  <th>서비스</th>
                  <th>민감정보</th>
                  <th>공개 가능성</th>
                  <th>비공개 선택 방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>고객 연결을 위한 프로필 제공</td>
                  <td>
                    성명, 국적, 성별, 키, 가슴 둘레, 허리 둘레, 힙 둘레, 신발
                    사이즈, 머리 색깔, 눈동자 색깔, 상의 사이즈, 하의 사이즈,
                    모델 사진, 모델 동영상, 모델 커리어 정보
                  </td>
                  <td>
                    이용자가 스스로 정보를 입력하여 프로필을 등록하는 경우 공개
                    가능
                  </td>
                  <td>프로필관리에서 삭제</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h4>제 6조 개인(위치)정보의 파기절차 및 방법</h4>
          <p>
            (16) 회사는 개인(위치)정보 보유기간의 경과, 처리목적 달성 등
            개인(위치)정보가 불필요하게 되었을 때에는 지체없이 해당
            개인(위치)정보를 파기합니다.
          </p>
          <p>
            (17) 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
            처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속
            보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로
            옮기거나 보관장소를 달리하여 보존합니다.
          </p>
          <p>
            1. 파기절차 <br />
            회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
            보호책임자의 승인을 받아 개인정보를 파기합니다.
          </p>
          <p>
            1. 파기방법
            <br />
            회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수
            없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로
            분쇄하거나 소각하여 파기합니다.
          </p>
        </section>
        <section>
          <h4>제 7조 이용자와 법정대리인의 권리 및 그 행사방법</h4>
          <p>(18) 회사는 이용자의 권리를 다음과 같이 보호하고 있습니다.</p>
          <ol>
            <li>
              이용자는 언제든지 본인의 개인정보를 열람하거나 정정할 수 있습니다.
              개인정보 열람 및 정정을 하고자 할 경우 ‘계정 수정’에서 직접 열람
              또는 정정하거나, 회사에 대해 전자우편(admin@sellect.best)을
              전송하거나, 개인정보 담당부서에 요청하실 수 있으며, 회사는 이에
              대하여 지체없이 조치하겠습니다.
            </li>
            <li>
              이용자는 언제든지 개인정보 처리에 대하여 동의한 내용을 언제든지
              철회하거나 해당 내용에 대한 삭제 및 처리정지를 요청할 수 있습니다.
              동의 철회, 삭제 및 처리정지를 하고자 할 경우에는 회사에 대해
              전자우편(admin@sellect.best)을 전송하거나 개인정보 담당부서에
              요청하시면 본인확인 절차를 거쳐 지체없이 조치하겠습니다.
            </li>
            <li>
              이용자가 개인정보에 대한 열람·정정 또는 삭제를 요청하는 경우
              회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나
              제공하지 않습니다.
            </li>
          </ol>
          <p>
            (19) 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
            자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 개인정보 처리
            방법에 관한 고시(제2023-12호) 별지 제11호 서식에 따른 위임장을
            제출하여야 합니다.
          </p>
          <p>
            (20) 인정보 열람 및 처리정지 요구 시 개인정보 보호법 제35조 제4항,
            제37조 제2항 각 호의 사유에 해당하는 경우 정보주체의 권리가 제한될
            수 있습니다.
          </p>
          <p>
            (21) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </p>
          <p>
            (22) 회사는 정보주체 권리에 따른 열람의 요구, 정정 및 삭제의 요구,
            처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
            대리인인지를 확인할 수 있습니다.
          </p>
        </section>
        <section>
          <h4>제 8조 개인정보 안전성 확보 조치</h4>
          <p>
            (23) 회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
          </p>
          <ol>
            <li>
              관리적 조치 : 내부관리계획 수립·시행, 전담조직 운영, 정기적 직원
              교육
            </li>
            <li>
              기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
              접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치 및 갱신
            </li>
            <li>물리적 조치 : 전산실, 자료보관실 등의 접근통제</li>
          </ol>
          <p>
            (24) 회사는 「위치정보의 보호 및 이용 등에 관한 법률」 제16조 제1항,
            같은 법 시행령 제20조를 준수하여 개인위치정보의 보호 조치를 취하고
            있습니다.
          </p>
        </section>
        <section>
          <h4>
            제 9조 개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항
          </h4>
          <p>
            (25) 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용
            정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
          </p>
          <p>
            (26) 쿠키란 웹사이트를 운영하는데 이용되는 서버가 이용자의
            브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터에
            저장됩니다. 이후 이용자가 웹 사이트에 방문할 경우 웹 사이트 서버는
            이용자의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 이용자의
            환경설정을 유지하고, 맞춤화된 서비스를 제공하게 됩니다.
          </p>
          <ol>
            <li>
              쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한
              방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다.
            </li>
            <li>
              쿠키 설치/운영 및 거부: 이용자는 웹 브라우저 옵션을 설정함으로써
              모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든
              쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키 설치를 거부할 경우
              웹 사용이 불편해지며, 로그인이 필요한 일부 서비스 이용에 어려움이
              있을 수 있습니다.
            </li>
          </ol>
          <p>[설정방법의 예]</p>
          <ol>
            <li>
              Internet Explorer : 도구 메뉴 &gt; 인터넷 옵션 &gt; 개인정보 설정
            </li>
            <li>
              Chrome : 도구 메뉴 &gt; 고급 설정 표시 &gt; 개인정보의 콘텐츠 설정
              버튼 &gt; 쿠키
            </li>
            <li>
              브라우저의 버전 및 종류에 따라 설정방법에 차이가 있을 수 있습니다.
              보다 자세한 설명은 해당 브라우저의 도움말을 이용하시기 바랍니다.
            </li>
          </ol>
        </section>
        <section>
          <h4>제 10조 행태정보의 수집, 이용 및 거부 등에 관한 사항</h4>
          <p>
            1. 회사는 이용자의 동의를 얻어 모바일 앱에서 최적화된 서비스 및
            혜택, 맞춤형 광고 등을 제공하기 위하여 ADID(안드로이드),
            IDFA(아이폰)를 수집·이용할 수 있습니다.
          </p>
          <p>
            2. 회사는 온라인 맞춤형 광고 등에 필요한 최소한의 행태정보만을
            수집하며, 사상, 신념, 가족 및 친인척관계, 학력, 병력, 기타 사회활동
            경력 등 개인의 권리나 사생활을 침해할 우려가 있는 민감한 행태정보를
            수집하지 않습니다.
          </p>
          <p>
            3. 이용자는 모바일 단말기의 설정 변경을 통해 앱의 맞춤형 광고를
            차단·허용할 수 있습니다.
          </p>
          <ol>
            <li>
              [스마트폰의 광고식별자 차단/허용]안드로이드 : ① 설정 → ②
              개인정보보호 → ③ 광고 → ③ 광고 ID 재설정 또는 광고 ID 삭제
            </li>
            <li>
              아이폰 : ① 설정 → ② 개인정보보호 → ③ 추적 → ➃ 앱이 추적을
              요청하도록 허용 끔
            </li>
            <li>
              모바일 OS 버전에 따라 메뉴 및 방법이 다소 상이할 수 있습니다.
            </li>
          </ol>
          <p>
            4. 이용자는 개인정보보호책임자 및 담당부에 행태정보와 관련하여
            궁금한 사항과 거부권 행사, 피해 신고 접수 등을 문의할 수 있습니다.
          </p>
        </section>
        <section>
          <h4>제 11조 개인정보처리방침의 적용 제외</h4>
          <p>
            회사는 서비스를 통하여 이용자에게 다른 회사의 웹사이트 또는 자료에
            대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에
            대하여 통제권이 없을 뿐만 아니라 이들이 개인정보를 수집하는 행위에
            대하여 회사의 '개인정보처리방침'이 적용되지 않습니다. 따라서, 회사가
            포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 이동할 경우에는
            새로 방문한 사이트의 개인정보처리방침을 반드시 확인하시기 바랍니다..
          </p>
        </section>
        <section>
          <h4>제 12조 개인(위치)정보 보호책임자</h4>
          <p>
            회사는 이용자의 개인(위치)정보가 훼손되거나 침해되지 않도록 최선을
            다하고 있으며, 아래와 같이 개인(위치)정보의 처리에 관한 업무를
            총괄해서 책임질 개인(위치)정보 보호책임자 및 개인(위치)정보 보호법무
            관련 고충사항과 개인(위치)정보의 열람청구를 접수 및 처리하는 부서를
            두고 있습니다. 다만, 회사는 개인(위치)정보 보호를 위해 법률상
            요구되는 기술적, 물리적, 관리적 조치를 다하였음에도 불구하고, 이용자
            본인의 부주의나 회사가 관리하지 않는 영역에서의 사고 등 회사의
            귀책에 기인하지 않은 손해에 대해서는 책임을 지지 않습니다.
          </p>
          <p>• 개인(위치)정보보호 책임자 : 윤규선</p>
          <p>• 담당부서 : 한국 사업부</p>
          <p>• Email: admin@sellect.best</p>
        </section>

        <section>
          <h4>제 13조 권익침해 구제방법</h4>
          <p>
            1. 개인정보침해에 대한 신고나 상담이 필요한 경우에는 아래 기관에
            문의하시기 바랍니다.
          </p>
          <ol>
            <li>
              개인정보분쟁조정위원회:
              <a href="http://www.kopico.go.kr" target="_blank">
                http://www.kopico.go.kr
              </a>
              , 국번없이 1833-6972
            </li>
            <li>
              개인정보침해신고센터:
              <a href="http://privacy.kisa.or.kr" target="_blank">
                http://privacy.kisa.or.kr
              </a>
              , 국번없이 118
            </li>
            <li>
              대검찰청 사이버수사과:
              <a href="www.spo.go.kr" target="_blank">
                www.spo.go.kr
              </a>
              , 국번없이 1301, 02-3480-2000
            </li>
            <li>
              경찰청 사이버안전국:
              <a href="www.police.go.kr" target="_blank">
                www.police.go.kr
              </a>
              , 국번없이 182
            </li>
          </ol>
          <p>
            2. 개인정보 보호법 제35조, 제36조, 제37조의 규정에 의한 요구에
            대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
            이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
            청구할 수 있습니다.
            <br />• 중앙행정심판위원회 : (국번없이) 110 (
            <a href="www.simpan.go.kr" target="_blank">
              www.simpan.go.kr
            </a>
            )
          </p>

          <p>
            이 개인정보 처리방침은 시행일로부터 적용됩니다. 회사는 본 개인정보
            처리방침을 변경하는 경우에는 변경 및 시행의 시기, 변경된 내용을
            홈페이지의 팝업(또는 개별공지)을 통해 고지할 것입니다.
            <br /> 시행일자: 2024년 9월 20일 <br />
            이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다. <br />•
            [구 개인정보 처리방침 적용기간] 적용 (
            <a href="/" target="_blank">
              구버전 링크
            </a>
            )
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
