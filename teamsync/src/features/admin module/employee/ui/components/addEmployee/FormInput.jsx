import React from "react";

const FormInput = ({
	label,
	placeholder,
	type = "text",
	register,
	name,
	errors,
}) => {
	return (
		<div>
			<label>{label}</label>

			<input
				type={type}
				placeholder={placeholder}
				{...register(name, {
					required: `${label} is required`,
				})}
			/>

			{errors?.[name] && <p>{errors[name].message}</p>}
		</div>
	);
};

export default FormInput;
