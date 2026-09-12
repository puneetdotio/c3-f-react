import { UserPlus } from "lucide-react";
import React from "react";

const FormActions = () => {
	return (
		<div>
			<button type="button">Cancel</button>
			<button type="submit">
				{" "}
				<UserPlus size={20} /> Create Employee
			</button>
		</div>
	);
};

export default FormActions;
