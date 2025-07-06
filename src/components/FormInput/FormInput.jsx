import {
  inputMaxLength,
  validationPatterns,
} from "../../core/constants/validationPatterns";
import "./FormInput.css";

const FormInput = ({
  id,
  title,
  addMessage,
  register,
  type = "none",
  className,
  error,
  required = false,
  disableValidation = false,
  ...props
}) => {
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    if (type === "number") {
      if (
        ["-", "+", "=", "e", "E"].includes(e.key) ||
        (!/[0-9]/.test(e.key) &&
          !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(
            e.key
          ))
      ) {
        e.preventDefault();
      }
    }
  };

  const patternType = validationPatterns[type];

  return (
    <div className={`form-input ${className}`}>
      <div className="formInput_title">
        {title ? (
          <label htmlFor={id}>
            {required === true ? (
              <span className="required_mark">*</span>
            ) : null}
            {title}
          </label>
        ) : null}

        {addMessage ? (
          <span className="formInput_sub_message">{addMessage}</span>
        ) : null}
      </div>

      <input
        onKeyDown={(e) => handleKeydown(e)}
        onPaste={(e) => e.preventDefault()}
        onInput={(e) => {
          if (type === "number") {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }
        }}
        id={id}
        inputMode="numeric"
        maxLength={inputMaxLength[id]}
        {...register(
          `${id}`,
          disableValidation
            ? {}
            : {
                required: required ? `${title}은(는) 필수입니다.` : false,
                pattern: {
                  value: patternType?.value,
                  message: patternType?.message,
                },
              }
        )}
        {...props}
        // placeholder={title ? title : ""}
      />
      {error?.message && (
        <span className="formInput_error_message">{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;
