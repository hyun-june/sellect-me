import './Button.css'

const Button = ({ children, ...props }) => {
    return (
        <div>
            <button className="custom_button" {...props}>
                <div>{children}</div>
            </button>
        </div>
    )
}

export default Button
