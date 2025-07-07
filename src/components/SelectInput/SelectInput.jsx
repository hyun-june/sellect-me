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
        <option value="" disabled>
          {title || label}
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
