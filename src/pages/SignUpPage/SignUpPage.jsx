import { FaArrowRightLong } from "react-icons/fa6";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../SingUpPage.css";

const SingUpPage = () => {
  return (
    <Container className="createAccount_section ">
      {/* <Link href="/createAccount/createSelleb">
                <div className="account_box">SELLEB</div>
            </Link>
            <Link href="/createAccount/createSellecter">
                <div className="account_box">SELLECTER</div>
            </Link> */}

      <Link to="/createAccount/createSelleb">
        <button class="createBox">
          SELLEB
          <FaArrowRightLong className="arrow-icon" />
        </button>
      </Link>
      <Link to="/createAccount/createSellecter">
        <button class="createBox">
          SELLECTER
          <FaArrowRightLong className="arrow-icon" />
        </button>
      </Link>
    </Container>
  );
};

export default SingUpPage;
