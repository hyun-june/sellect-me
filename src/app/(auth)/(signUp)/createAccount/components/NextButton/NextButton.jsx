import './NextButton.css'

const NextButton = (...props) => {
    return (
        <div className="next-button">
            <button {...props}>Next</button>
        </div>
    )
}

export default NextButton
