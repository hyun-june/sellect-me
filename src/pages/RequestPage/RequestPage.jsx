import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import SellebProfilePage from "../MyPage/SellebProfilePage/SellebProfilePage";
import "./RequestPage.css";

const RequestPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="request_container">
        <h3>셀럽 요청서</h3>
        <div className="request_info">
          <img src="" className="request_img" />
          <div className="request_inner">
            <div className="request_inner_info">
              <div className="request_inner_list">
                <div>프로젝트명:CF 촬영</div>
                <div>촬영시간:5시간</div>
                <div>시간 당 금액:200,000</div>
              </div>
              <div className="request_inner_list">
                <div>에스크로:200,000</div>
                <div>부가세:120,000</div>
                <div>예상 총 금액:1,320,000</div>
              </div>
            </div>
            <button>계약하기</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestPage;
