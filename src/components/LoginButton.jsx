'use client'
import '../css/loginButton.css'

const LoginButton = ({ title, onClick, src }) => {
    return (
        <div>
            <button className="login_button" onClick={onClick}>
                <span>
                    <img className="login_img" src={src} alt="" />
                </span>
                {/* <div>{`${title}로 로그인하기`}</div> */}
            </button>
        </div>
    )
}

export default LoginButton
