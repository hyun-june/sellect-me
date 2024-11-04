// import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
// import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'Sellect',
}

const Layout = ({ children }) => {
    
    return (
        <div>
            <div className="">
                <AuthCard>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
