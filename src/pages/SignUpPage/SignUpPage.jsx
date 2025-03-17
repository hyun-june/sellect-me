import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import "./SignUpPage.css";
const SignUpPage = () => {
  return (
    <MainLayout>
      <div className="createAccount_section ">
        {/* <Link href="/createAccount/createSelleb">
                <div className="account_box">SELLEB</div>
            </Link>
            <Link href="/createAccount/createSellecter">
                <div className="account_box">SELLECTER</div>
            </Link> */}

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
