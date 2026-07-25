import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Form = ({users, setUsers, setToggle, updatedData }) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: updatedData,
	});

	const formSubmit = (data) => {
		if (updatedData) {
			//update
			setUsers((prev) => {
				return prev.map((val) => {
					return val.id === updatedData.id ? { ...data } : val;
				})
			})
		} else {
			let arr = [...users, {...data, id: nanoid()}];
			setUsers(arr);
			localStorage.setItem("users", JSON.stringify(arr));
		}

		reset();

		setToggle((prev) => !prev);
	};

	return (
		<div className="flex flex-col gap-6 items-center border p-5 rounded bg-white justify-center">
			<h1 className="text-xl font-semibold">Create User</h1>
			<form
				onSubmit={handleSubmit(formSubmit)}
				className="w-90 flex flex-col gap-3"
			>
				<input
					{...register("name", {
						required: "Name is required...",
						pattern: {
							value: /^\S.*$/,
							message: "Blank spaces are not allwed",
						},
					})}
					className="p-2 border border-gray-400 rounded outline-0"
					type="text"
					placeholder="Name"
				/>
				{errors.name && <p className="text-red-500">{errors.name.message}</p>}
				<input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Please enter valid email",
						},
					})}
					className="p-2 border border-gray-400 rounded outline-0"
					type="email"
					placeholder="Email"
				/>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}

				<input
					{...register("mobile", {
						required: "Mobile is required",
						minLength: {
							value: 10,
							message: "Minimum 10 digits are required",
						},
						maxLength: {
							value: 10,
							message: "Maximum 10 digits are required",
						},
					})}
					className="p-2 border border-gray-400 rounded outline-0"
					type="number"
					placeholder="Mobile"
				/>
				{errors.mobile && (
					<p className="text-red-500">{errors.mobile.message}</p>
				)}

				<input
					{...register("image", {
						required: "Image  is required",
					})}
					className="p-2 border border-gray-400 rounded outline-0"
					type="url"
					placeholder="Image"
				/>
				{errors.image && <p className="text-red-500">{errors.image.message}</p>}
				<button className="bg-blue-700 text-blue-100 py-2 rounded font-semibold cursor-pointer">
					Create User
				</button>
			</form>
		</div>
	);
};

export default Form;
