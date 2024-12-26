import { Nunito } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import './reset.css'
import './global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body>
                <div className="layout-container">
                    <Navigation />
                    <main className="content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
