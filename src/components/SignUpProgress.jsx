import { Container, Row, Col } from 'react-bootstrap'
import '../css/signUpProgress.css'

const SignUpProgress = ({ currentStep }) => {
    return (
        <Container>
            <div className="sign-section">
                <div
                    className={`circle ${currentStep >= 1 ? 'completed' : ''}`}>
                    <div className="circle-text">가입</div>
                </div>

                <span className="through-line"></span>

                <div
                    className={`circle ${currentStep >= 2 ? 'completed' : ''}`}>
                    <div className="circle-text">승인</div>
                </div>
                <span className="through-line"></span>

                <div
                    className={`circle ${currentStep >= 3 ? 'completed' : ''}`}>
                    <div className="circle-text">등록</div>
                </div>
            </div>
            {/* <div className="sign-section text">
                <div>가입</div>
                <div>승인</div>
                <div>등록</div>
            </div> */}
        </Container>
    )
}

export default SignUpProgress
