import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../css/searchBar.css'

const SearchBar = () => {
    const keywordList = ['여자 한복 모델', '외국 여자 모델']
    const getRandomKeyword = () => {
        return `추천 검색어 : ${keywordList[Math.floor(Math.random() * keywordList.length)]}`
    }

    return (
        <div className="inputNav">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            <input type="text" placeholder={getRandomKeyword()} />
        </div>
    )
}

export default SearchBar
