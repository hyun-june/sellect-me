import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import '../reset.css'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">{children}</div>
        </div>
    )
}

export default Layout
