'use client'
import LoginButton from '@/components/LoginButton'
import { Container, Row, Col } from 'react-bootstrap'
import './css/loginPage.css'
import { useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import ReactDOM from 'react-dom'
import NaverLogin from 'react-naver-login'
import Login from '../login/page'

const LoginPage = () => {
    useEffect(() => {
        // Kakao SDK 로드
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY)
            console.log('Kakao SDK initialized:', window.Kakao.isInitialized())
        }

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const kakaoLogin = () => {
        console.log('Kakao login function called')
        window.Kakao.Auth.login({
            success: function (response) {
                console.log('Login successful:', response)
                // 로그인 성공 후 처리
                // 예: 사용자를 리다이렉트하거나 상태 업데이트
            },
            fail: function (error) {
                console.error(error)
                // 로그인 실패 후 처리
                // 예: 사용자에게 에러 메시지 표시
            },
        })
    }
    const googleLoginSuccess = response => {
        console.log('Google login successful:', response)
        // 로그인 성공 후 처리
        // 예: 사용자를 리다이렉트하거나 상태 업데이트
    }

    const googleLoginFailure = response => {
        console.error('Google login failed:', response)
    }

    const naverLoginSuccess = naverUser => {
        console.log('Naver 로그인 성공:', naverUser)
    }

    const GoogleLoginButton = () => {
        const login = useGoogleLogin({
            onSuccess: codeResponse => console.log(codeResponse),
            flow: 'auth-code',
        })

        return (
            <LoginButton
                title="구글"
                onClick={login}
                src="./images/google_login.png"
            />
        )
    }

    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            <Container>
                <Row className="justify-content-center">
                    {/* <Col xs="auto">
                        <div className="login-text">로그인 / 회원가입</div>

                        <button className="login_button" onClick={kakaoLogin}>
                            <img
                                className="login_img"
                                src="/images/kakao_login_wide.png"
                                alt=""
                            />
                        </button>
                        <GoogleLogin
                            width={'322px'}
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse)
                            }}
                            onError={() => {
                                console.log('Login Failed')
                            }}
                        />
                        <NaverLogin
                            clientId="KPo7mUF4yCt7rkLost0c"
                            callbackUrl="http://127.0.0.1:3000"
                            render={props => (
                                <div onClick={props.onClick}>
                                    <button className="login_button">
                                        <img
                                            className="login_img"
                                            src="/images/naver_login.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            )}
                            onSuccess={naverUser => console.log(naverUser)}
                            onFailure={() => console.error(result)}
                        />
                    </Col> */}
                    <Col xs="auto">
                        <div className="login-text">로그인 / 회원가입</div>

                        <GoogleLoginButton />

                        <LoginButton
                            title="카카오"
                            onClick={kakaoLogin}
                            src="/images/kakao_login.png"
                        />

                        <NaverLogin
                            clientId="KPo7mUF4yCt7rkLost0c"
                            callbackUrl="http://127.0.0.1:3000"
                            onSuccess={naverLoginSuccess}
                            onFailure={error => console.error(error)}
                            render={props => (
                                <LoginButton
                                    title="네이버"
                                    onClick={props.onClick}
                                    src="/images/naver_login.png"
                                />
                            )}
                        />
                    </Col>
                </Row>
            </Container>
        </GoogleOAuthProvider>
    )
}

export default LoginPage
