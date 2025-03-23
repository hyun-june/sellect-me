import "./CustomBox.css";

const CustomBox = ({
  children,
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
      {children}
    </div>
  );
};

export default CustomBox;
