import React from "react";
import { useForm } from "react-hook-form";
import { createEmployee } from "../../api/EmployeeApis";
import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
import FormActions from "../components/addEmployee/FormActions";

const AddEmployee = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			bio: "",
			department: "",
			role: "",
			joiningDate: "",
			status: "active",
			avatar: "",
			password: "12345678",
		},
	});

	// submit
	const onSubmit = async (data) => {
		console.log("form data", data);

		try {
			let res = await createEmployee(data);
			console.log(res, "in UI");
			alert("employee created");
			reset();
		} catch (error) {
			console.log("error in api", error);
		}
	};
	return (
		<div>
			<div>
				{/* header */}
				<AddEmployeeHeader />

				{/* form */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<PersonalInfoForm
						register={register}
						errors={errors}
						setValue={setValue}
						watch={watch}
					/>

					{/* employment details */}
					<EmploymentDetailsForm register={register} errors={errors} />

					{/* actions */}
					<FormActions />
				</form>
			</div>
		</div>
	);
};

export default AddEmployee;
