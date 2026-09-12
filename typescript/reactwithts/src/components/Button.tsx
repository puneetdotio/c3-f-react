import React from "react";

type ButtonProps = {
	text: string;
	disabled: boolean;
	onClick: () => void;
};

const Button = ({ text, disabled, onClick }: ButtonProps) => {
	return (
		<div>
			<button disabled={disabled} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default Button;
