import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <MainLayout {...props}>
      <section className="login_section">
        <h3>로그인 / 회원가입</h3>

        <a href="/">
          <img title="구글" src="/images/google_login_symbol.png" />

          <span>Login with Google</span>
        </a>

        <a href="/" class="kakao-login-btn">
          <img
            src="/images/kakao_login_symbol.png"
            className="kakao_icon"
            alt="카카오 아이콘"
          />

          <span>Login with Kakao</span>
        </a>

        <a href="/">
          <img title="네이버" src="/images/naver_login_symbol.png" />

          <span>Login with Naver</span>
        </a>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
