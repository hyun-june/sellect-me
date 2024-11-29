import { Nunito } from 'next/font/google'
import './reset.css'
import './global.css'
import Navigation from './../components/Navigation'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
