'use client'
import LoginLinks from '@/app/LoginLinks'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import SearchBar from '../SearchBar'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const pathname = usePathname()
    const showSearchBarPages = ['/'] // 배열 안에 경로 입력하면 searchbar 표시됨
    return (
        <>
            <Navbar>
                <div className="navContainer">
                    <Navbar.Brand href="/">
                        <img
                            className="logoImg"
                            src="/images/logo-outline.png"
                            alt=""
                        />
                    </Navbar.Brand>
                    {showSearchBarPages.includes(pathname) && <SearchBar />}
                    <Navbar.Collapse className="justify-content-end">
                        <LoginLinks />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}

export default Navigation
