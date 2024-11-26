const FormInput = ({ id, title, register, ...props }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{title}</label>
            <input id={id} {...register(`${id}`)} {...props} />
        </div>
    )
}

export default FormInput
