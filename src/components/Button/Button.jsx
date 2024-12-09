import './Button.css'

const Button = ({ children, ...props }) => {
    return (
        <div>
            <button {...props}>{children}</button>
        </div>
    )
}

export default Button
