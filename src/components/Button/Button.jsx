import './Button.css'

const Button = ({ children, ...props }) => {
    return (
        <div>
            <button {...props}>
                <div>{children}</div>
            </button>
        </div>
    )
}

export default Button
