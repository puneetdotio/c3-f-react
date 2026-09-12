import React from "react";

const FormTextarea = ({ label, register, name, placeholder }) => {
	return (
		<div>
			<label>{label}</label>

			<textarea
				rows={5}
				placeholder={placeholder}
				{...register(name)}
			></textarea>
		</div>
	);
};

export default FormTextarea;
