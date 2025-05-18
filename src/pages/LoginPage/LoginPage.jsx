import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <MainLayout {...props}>
      <section className="login_section">
        <h5>로그인 / 회원가입</h5>
        <a href="/">
          <img title="구글" src="/images/google_login_symbol.png" />
          <span>구글로 로그인하기</span>
        </a>
        <a href="/" class="kakao-login-btn">
          <img
            src="/images/kakao_login_symbol.png"
            className="kakao_icon"
            alt="카카오 아이콘"
          />
          <span>카카오로 로그인하기</span>
        </a>

        <a href="/">
          <img title="네이버" src="/images/naver_login_symbol.png" />
          <span>네이버로 로그인하기</span>
        </a>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
