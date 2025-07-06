import "./SelectInput.css";

const SelectInput = ({ ...props }) => {
  const { label, id, required, register, options } = props;
  return (
    <div className="select_option">
      <label>
        {required && <span className="required_mark">*</span>}
        {label}
      </label>
      <select name={id} {...register(id)} defaultValue="">
        <option value="" disabled>
          {label}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="dropdown_mark">▼</span>
    </div>
  );
};

export default SelectInput;
