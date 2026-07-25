import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle, users, updatedData }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: updatedData,
	});

	let formSubmit = (data) => {
		if (updatedData) {
			setUsers((prev) => {
				return prev.map((val) => {
					return val.id === updatedData.id ? { ...data } : val;
				});
			});
		} else {
			let arr = [...users, { ...data, id: nanoid() }];
			console.log(arr);

			setUsers(arr);
			localStorage.setItem("users", JSON.stringify(arr));
		}

		reset();
		setToggle((prev) => !prev);
	};

	return (
		<section className="flex flex-col items-center gap-3">
			<h1 className="text-xl font-bold">Create User</h1>

			<form
				onSubmit={handleSubmit(formSubmit)}
				className="w-90 flex flex-col gap-3 bg-black p-4 text-white rounded border-2 border-whtie
          "
			>
				<input
					className="p-2 outline-0 border border-white rounded"
					type="text"
					placeholder="name"
					{...register("name", {
						required: "Name is required",
						pattern: {
							value: /^\S.*$/,
							message: "Blank spaces are not allowed",
						},
					})}
				/>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}
				<input
					className="p-2 outline-0 border border-white rounded"
					type="email"
					placeholder="email"
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Please enter valid email",
						},
					})}
				/>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}
				<input
					className="p-2 outline-0 border border-white rounded"
					type="number"
					placeholder="mobile"
					{...register("mobile", {
						required: "Number is required",
						minLength: {
							value: 10,
							message: "Minimum 10 digits are required",
						},
						maxLength: {
							value: 10,
							message: "Maximum 10 digits are required",
						},
					})}
                />
                {errors.mobile && <p className="text-red-500">{ errors.mobile.message}</p>}
				<input
					className="p-2 outline-0 border border-white rounded"
					type="url"
                    placeholder="image url"
                    {...register("image", {
                        required: "Image is required",
                        
                    })}
                />
                {errors.image && <p className="text-red-500">{ errors.image.message}</p>}
				<button className="bg-blue-700 p-2 rounded-xl cursor-pointer">
					Add User
				</button>
			</form>
		</section>
	);
};

export default Form;
