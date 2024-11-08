import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../css/searchBar.css'

const SearchBar = () => {
    return (
        <div className="inputNav">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            <input type="text" />
        </div>
    )
}

export default SearchBar
