import { useEffect, useState } from 'react'
import { VscSearch } from 'react-icons/vsc'
import '../css/searchBar.css'

const SearchBar = () => {
    const keywordList = [
        '여자 한복 모델',
        '외국 여자 모델',
        '남자 한복 모델',
        '외국 남자 모델',
    ]
    const [keyword, setKeyword] = useState('')

    const getRandomKeyword = () => {
        return `추천 검색어 : ${keywordList[Math.floor(Math.random() * keywordList.length)]}`
    }

    useEffect(() => {
        setKeyword(getRandomKeyword())
        const randomKeyword = setInterval(() => {
            setKeyword(getRandomKeyword())
        }, 3000)
        return clearInterval(randomKeyword)
    }, [])

    return (
        <div className="inputNav">
            <VscSearch className="navIcon" />
            <input type="text" placeholder={keyword} />
        </div>
    )
}

export default SearchBar
