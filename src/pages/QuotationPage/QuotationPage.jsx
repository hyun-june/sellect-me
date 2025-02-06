import QuotationForm from "./components/QuotationForm/QuotationForm";
import "./QuotationPage.css";

const QuotationPage = () => {
  // user가 셀럽인지 셀렉터인지 구분 그에 따른 내용이 다르게 보임
  const user = "selleb";
  return (
    <div className="quotation_container">
      <QuotationForm user={user} />
    </div>
  );
};

export default QuotationPage;
