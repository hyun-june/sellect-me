'use client'
import Link from 'next/link'
import { useAuth } from '@/core/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div>
            {user ? (
                <Link href="/dashboard" className="LoginLink">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link href="/login" className="LoginLink">
                        로그인
                    </Link>

                    <Link href="/createAccount" className="LoginLink">
                        회원가입
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
