import "./CustomBox.css";

const CustomBox = ({
  innerText,
  className = "",
  textAlign = "center",
  ...props
}) => {
  return (
    <div
      className={`custom_box ${className}`}
      style={{ justifyContent: textAlign }}
      {...props}
    >
      {innerText}
    </div>
  );
};

export default CustomBox;
