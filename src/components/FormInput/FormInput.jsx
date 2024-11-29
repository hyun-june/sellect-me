import './FormInput.css'

const FormInput = ({ id, title, register, size, ...props }) => {
    return (
        <div className="form-input">
            <label
                htmlFor={id}
                className={`form-label ${size ? `form-label-${size}` : ''}`}>
                {title}
            </label>
            <input id={id} {...register(`${id}`)} {...props} />
        </div>
    )
}

export default FormInput
