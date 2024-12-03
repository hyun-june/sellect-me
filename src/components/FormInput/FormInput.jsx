import { validationPatterns } from '../../core/constants/validationPatterns'
import './FormInput.css'

const FormInput = ({ id, title, register, type = 'text', error, ...props }) => {
    const patternType = validationPatterns[type]
    return (
        <div className="form-input">
            {/* <label
                htmlFor={id}
                className={`form-label ${size ? `form-label-${size}` : ''}`}>
                {title}
            </label> */}
            <input
                id={id}
                {...register(`${id}`, {
                    pattern: {
                        value: patternType?.value,
                        message: patternType?.message,
                    },
                })}
                {...props}
                placeholder={`${title}`}
            />
            {error?.message && <span>{error.message}</span>}
        </div>
    )
}

export default FormInput
