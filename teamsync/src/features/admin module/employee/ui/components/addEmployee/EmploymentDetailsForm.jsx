import { BriefcaseBusiness } from "lucide-react";
import React from "react";

const EmploymentDetailsForm = ({ register, errors }) => {
	return (
		<div>
			{/* title */}
			<div>
				<BriefcaseBusiness size={28} />

				<h2>Employment Details</h2>
			</div>

			{/* form */}
			<div>
				{/* department */}
				<div>
					<label>Department </label>
					<select {...register("department")}>
						<option value="">Select Department</option>
						<option value="developer">Developer</option>
						<option value="administrative">Administrative</option>
						<option value="security">Security</option>
						<option value="management">Management</option>
					</select>
				</div>

				{/* role */}
				<div>
					<label>Role</label>
					<select {...register("role")}>
						<option value="">Select Role</option>
						<option value="admin">Admin</option>
						<option value="employee">Employee</option>
					</select>
				</div>

				{/* joining date */}
				<div>
					<label>Joining Date</label>

					<input type="date" {...register("joiningDate")} />
				</div>

				{/* status */}
				<div>
					<label htmlFor="">Status</label>

					<div>
						<label htmlFor="">
							<input type="radio" value="active" {...register("status")} />
							Inactive
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmploymentDetailsForm;
