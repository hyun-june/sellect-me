import { Container } from 'react-bootstrap'
import Link from 'next/link'
import '../createAccount/css/createAccount.css'

export const metadata = {
    title: 'create Account',
}

const createAccountPage = () => {
    return (
        <Container className="createAccount_section">
            <Link href="/createAccount/createSelleb">
                <div className="account_box">SELLEB</div>
            </Link>
            <Link href="/createAccount/createSellecter">
                <div className="account_box">SELLECTER</div>
            </Link>
        </Container>
    )
}

export default createAccountPage
