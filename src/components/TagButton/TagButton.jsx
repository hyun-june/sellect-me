import './TagButton.css'

const TagButton = ({ list = [], children, ...props }) => {
    return (
        <div className="tag_container" {...props}>
            {list.length > 0 ? (
                list.map((item, index) => <span key={index}>{item}</span>)
            ) : (
                <span>{children}</span>
            )}
        </div>
    )
}

export default TagButton
