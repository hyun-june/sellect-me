import './TagButton.css'

const TagButton = ({ list = [], ...props }) => {
    return (
        <div className="tag-container">
            {list.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    )
}

export default TagButton
