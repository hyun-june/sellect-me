'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { v4 as uuidv4 } from 'uuid'
import LoginButton from '@/components/LoginButton'
import './css/login.css'
import { Container, Row, Col } from 'react-bootstrap'

const kakao_client_id = '0eca8c37d1d2fa4a589d2aeb9a8a3053'
const kakao_redirect_uri = 'http://localhost:8000/auth/callback'
const kakao_response_type = 'code'

const naver_client_id = 'ykhorqbDvWdjxdHre6Zg'
const naver_redirect_uri = 'http://localhost:8000/auth/callback'
const naver_response_type = 'code'
const naver_state = uuidv4()

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    const authParam = new URLSearchParams({
        client_id: kakao_client_id, // kakao_client_id 값을 client_id로 사용
        redirect_uri: kakao_redirect_uri, // kakao_redirect_uri 값을 redirect_uri로 사용
        response_type: kakao_response_type, // kakao_response_type 값을 response_type으로 사용
    })

    const authParam1 = new URLSearchParams({
        client_id: naver_client_id, // naver_client_id 값을 client_id로 사용
        redirect_uri: naver_redirect_uri, // naver_redirect_uri 값을 redirect_uri로 사용
        response_type: naver_response_type, // naver_response_type 값을 response_type으로 사용
        status,
    })

    return (
        <Container>
            <AuthSessionStatus className="mb-4" status={status} />
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div className="login-text">로그인 / 회원가입</div>
                    <LoginButton title="구글" src="./images/google_login.png" />

                    <a
                        href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}>
                        <LoginButton
                            title="카카오"
                            src="/images/kakao_login.png"
                        />
                    </a>

                    <a
                        href={`https://nid.naver.com/oauth2.0/authorize/authorize?${authParam1.toString()}`}>
                        <LoginButton
                            title="네이버"
                            src="/images/naver_login.png"
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
