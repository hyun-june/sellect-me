import { FaArrowRightLong } from 'react-icons/fa6'
import './NextButton.css'

const NextButton = ({ onClick, ...props }) => {
    return (
        <div className="next-button">
            <button {...props} onClick={onClick}>
                <FaArrowRightLong />
            </button>
        </div>
    )
}

export default NextButton
