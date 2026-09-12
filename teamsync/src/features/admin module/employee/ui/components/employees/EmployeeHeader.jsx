import React from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
import { Download, UserPlus } from "lucide-react";

const EmployeeHeader = () => {
	let navigate = useNavigate();

	return (
		<div>
			<div>
				<h1>Employee Directory</h1>
				<p>Manage your organization's workforce and roles</p>
			</div>

			<div>
				{/* <Button */}
				<Button variant="secondary" icon={<Download size={18} />}>
					Export
				</Button>

				<Button
					handleClick={() => navigate("/home/add-employee")}
					icon={<UserPlus size={18} />}
				>
					Add Employee
				</Button>
			</div>
		</div>
	);
};

export default EmployeeHeader;
