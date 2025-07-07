import "./SelectInputCountry.css";

const SelectInputCountry = ({ ...props }) => {
  const { register, watch, label } = props;
  const countryList = require("country-list");
  const countryNames = countryList.getNames();

  return (
    <div className="select_option">
      {label && (
        <label>
          <span className="required_mark">*</span>국적
        </label>
      )}

      <select name="nationality" {...register("nationality")}>
        <option value="" disabled selected>
          국적
        </option>
        {countryNames.map((country, index) => {
          const value = (index + 1).toString();
          const selectedValue = watch("nationality");

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
