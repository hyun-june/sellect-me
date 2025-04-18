import "./CustomBox.css";

const CustomBox = ({ children, className = "", ...props }) => {
  return (
    <div className={`custom_box ${className}`} {...props}>
      {children}
    </div>
  );
};

export default CustomBox;
