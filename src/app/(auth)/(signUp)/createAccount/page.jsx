import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Container } from 'react-bootstrap'
import '../createAccount/css/createAccount.css'

export const metadata = {
    title: 'create Account',
}

const createAccountPage = () => {
    return (
        <Container className="createAccount_section ">
            {/* <Link href="/createAccount/createSelleb">
                <div className="account_box">SELLEB</div>
            </Link>
            <Link href="/createAccount/createSellecter">
                <div className="account_box">SELLECTER</div>
            </Link> */}

            <Link href="/createAccount/createSelleb">
                <button class="createBox">
                    SELLEB
                    <FaArrowRightLong className="arrow-icon" />
                </button>
            </Link>
            <Link href="/createAccount/createSellecter">
                <button class="createBox">
                    SELLECTER
                    <FaArrowRightLong className="arrow-icon" />
                </button>
            </Link>
        </Container>
    )
}

export default createAccountPage
