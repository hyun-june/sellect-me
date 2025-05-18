import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import QuotationForm from "./components/QuotationForm/QuotationForm";
import "./QuotationPage.css";

const QuotationPage = (props) => {
  // user가 셀럽인지 셀렉터인지 구분 그에 따른 내용이 다르게 보임

  const user = "sellecter";
  return (
    <MainLayout {...props}>
      <div className="quotation_container">
        <h3>
          {user === "selleb"
            ? "섭외 요청하기"
            : user === "sellecter"
            ? "프로젝트 신청하기"
            : ""}
        </h3>

        <QuotationForm user={user} />
      </div>
    </MainLayout>
  );
};

export default QuotationPage;
