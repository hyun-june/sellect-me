'use client'

import Link from 'next/link'
import {useAuth} from '@/hooks/auth'

const LoginLinks = () => {
    const {user} = useAuth({middleware: 'guest'})

    return (
        <div className="hidden">
            {user ? (
                <Link
                    href="/dashboard"
                    className=""
                >
                    Dashboard
                </Link>
            ) : (
                <div className="border d-flex justify-content-between">
                    <div>
                        <Link href="/logo" className="ms-2"> Logo Img </Link>
                        <Link href="/language" className="ms-2"> 나라별 언어선택 </Link>
                    </div>
                    <div>
                        <input type="text" className="ms-2" placeholder="추천검색어 : 여긴 js로 랜덤 글자 받아오기" />
                    </div>
                    <div>
                        <Link href="/menu" className="ms-2"> Menu</Link>
                        <Link href="/login" className="ms-2"> Login </Link>
                        <Link href="/register" className="ms-2"> Register </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginLinks
