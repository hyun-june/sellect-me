import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainLayout from "./../../Layouts/MainLayout/MainLayout";
import "./SignUpPage.css";

const SignUpPage = (props) => {
  return (
    <MainLayout {...props}>
      <div className="createAccount_section">
        <Link to="/signup/selleb">
          <button class="createBox">
            SELLEB
            <FaArrowRightLong className="arrow-icon" />
          </button>
        </Link>
        <Link to="/signup/sellecter">
          <button class="createBox">
            SELLECTER
            <FaArrowRightLong className="arrow-icon" />
          </button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
