import "./SelectInput.css";

const SelectInput = ({ ...props }) => {
  const { title, label, id, required, register, options, onChange } = props;
  return (
    <div className="select_option">
      {label && (
        <label>
          {required && <span className="required_mark">*</span>}
          {label}
        </label>
      )}

      <select
        name={id}
        {...register(id, {
          onChange: (e) => {
            const value = e.target.value;
            if (onChange) onChange(value);
          },
        })}
        defaultValue=""
      >
        <option value="">{title || label}</option>
        {options.map((opt, index) => (
          <option key={index + 1} value={index + 1}>
            {opt}
          </option>
        ))}
      </select>
      <span className="dropdown_mark">▼</span>
    </div>
  );
};

export default SelectInput;
