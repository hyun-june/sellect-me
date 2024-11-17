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


const kakao_client_id = "0eca8c37d1d2fa4a589d2aeb9a8a3053"
const kakao_redirect_uri = "http://localhost:8000/auth/callback"
const kakao_response_type = "code"

const naver_client_id = "ykhorqbDvWdjxdHre6Zg"
const naver_redirect_uri = "http://localhost:8000/auth/callback"
const naver_response_type = "code"
const naver_state = uuidv4();

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
        client_id: kakao_client_id,  // kakao_client_id 값을 client_id로 사용
        redirect_uri: kakao_redirect_uri,  // kakao_redirect_uri 값을 redirect_uri로 사용
        response_type: kakao_response_type  // kakao_response_type 값을 response_type으로 사용
    });

    const authParam1 = new URLSearchParams({
        client_id: naver_client_id,  // naver_client_id 값을 client_id로 사용
        redirect_uri: naver_redirect_uri,  // naver_redirect_uri 값을 redirect_uri로 사용
        response_type: naver_response_type,  // naver_response_type 값을 response_type으로 사용
        status,
    });





    return (
        <>
            <AuthSessionStatus className="mb-4" status={status}/>
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2"/>
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <InputError
                        messages={errors.password}
                        className="mt-2"
                    />
                </div>

                {/* Remember Me */}
                <div className="block mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href="/forgot-password"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot your password?
                    </Link>

                    <Button className="ml-3">Login</Button>
                </div>
            </form>

            <a href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}> 카카오 로그인 </a>
            <br/>
            <a href={`https://nid.naver.com/oauth2.0/authorize/authorize?${authParam1.toString()}`}> 네이버 로그인 </a>
        </>
    )
}

export default Login
