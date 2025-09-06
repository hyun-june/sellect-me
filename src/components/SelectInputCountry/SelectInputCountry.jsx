import "./SelectInputCountry.css";

const SelectInputCountry = ({ ...props }) => {
  const { register, watch, label, id } = props;
  const countryList = require("country-list");
  const countryNames = countryList.getNames();

  return (
    <div className="select_option">
      {label && (
        <label>
          <span className="required_mark">*</span>국적
        </label>
      )}

      <select name={id} {...register(id)}>
        <option value="" disabled>
          국가
        </option>
        {countryNames.map((country, index) => {
          const value = (index + 1).toString();
          const selectedValue = watch(id);

          const isSelected = selectedValue === value;

          return (
            <option
              className="nationality_option"
              value={value}
              key={value}
              title={country}
            >
              {isSelected
                ? country
                : country.length > 20
                ? country.slice(0, 20) + "..."
                : country}
            </option>
          );
        })}
      </select>
      <span className="dropdown_mark">▼</span>
    </div>
  );
};

export default SelectInputCountry;
