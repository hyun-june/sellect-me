import { FaArrowLeftLong } from 'react-icons/fa6'
import './PrevButton.css'

const PrevButton = ({ onClick, ...props }) => {
    return (
        <div className="prev-button">
            <button onClick={onClick} {...props}>
                <FaArrowLeftLong />
            </button>
        </div>
    )
}

export default PrevButton
