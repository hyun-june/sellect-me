import MainLayout from ".././../../Layouts/MainLayout/MainLayout";
import "./ServiceFAQPage.css";

const ServiceFAQPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="faq_container">
        <h3>고객센터 {">"} FAQ</h3>
        <div className="faq_inner">
          <p>회원탈퇴는 어떻게 진행하나요?</p>
          <img
            src="/images/logo-outline-vertical-img.png"
            alt=""
            className="background_logo"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ServiceFAQPage;
