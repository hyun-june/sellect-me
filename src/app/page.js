import HamburgerMenu from '@/components/HamburgerMenu'
import MainButton from '@/components/MainButton'
import MainCard from '@/components/MainCard'
import { Container } from 'react-bootstrap'
import './global.css'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <div>
            <HamburgerMenu />
            <div>
                <img
                    className="bannerImg"
                    src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"
                    alt=""
                />
            </div>

            <Container>
                <div>
                    <span className="textBox">NEW UPDATED SELLEB</span>
                    <span>
                        <a href="">More +</a>
                    </span>
                </div>
                <MainCard />
                <div className="sectionLine"></div>
                <MainButton />
            </Container>
        </div>
    )
}

export default Home
