const FormInput = ({ id, title, register, ...props }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{title}</label>
            <span>
                <input id={id} {...register(`${id}`)} {...props} />
            </span>
        </div>
    )
}

export default FormInput
