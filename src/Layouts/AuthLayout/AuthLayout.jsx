import Navigation from "./../../Navigation/Navigation";
import Footer from "./../../Footer/Footer";
import "./AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth_layout">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
