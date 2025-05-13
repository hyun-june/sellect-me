import { validationPatterns } from "../../core/constants/validationPatterns";
import "./FormInput.css";

const FormInput = ({
  id,
  title,
  register,
  type = "none",
  className,
  error,
  required = false,
  disableValidation = false,
  ...props
}) => {
  const patternType = validationPatterns[type];

  return (
    <div className="form-input">
      <label htmlFor={id}>{title}</label>
      <input
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
      {error?.message && <span>{error.message}</span>}
    </div>
  );
};

export default FormInput;
