import "./Button.css";

const buttonTheme = {
  normal: "normal",
  black: "black",
};

const Button = ({ children, theme = "normal", className, ...props }) => {
  return (
    <button
      className={`custom_button ${className} ${buttonTheme[theme]}`}
      {...props}
    >
      <div>{children}</div>
    </button>
  );
};

export default Button;
