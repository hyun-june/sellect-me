import { validationPatterns } from "../../core/constants/validationPatterns";
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
  };

  const patternType = validationPatterns[type];

  return (
    <div className={`form-input ${className}`}>
      <div className="formInput_title">
        {title ? (
          <label htmlFor={id}>
            {required === true ? <span>*</span> : null}
            {title}
          </label>
        ) : null}

        {addMessage ? (
          <span className="formInput_sub_message">{addMessage}</span>
        ) : null}
      </div>

      <input
        onKeyDown={(e) => handleKeydown(e)}
        id={id}
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
