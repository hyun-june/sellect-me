'use client'
import '../css/loginButton.css'

const LoginButton = ({ title, onClick, src }) => {
    return (
        <div className="comp_login_button_section">
            <button className="comp_login_button" onClick={onClick}>
                <span>
                    <img className="comp_logo" src={src} alt="" />
                </span>
                <div>{`${title}로 로그인하기`}</div>
            </button>
        </div>
    )
}

export default LoginButton
