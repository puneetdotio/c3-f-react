import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUsers(prev => [...prev, formData]);

		console.log("formData", formData);
		setFormData({
			name: "",
			email: "",
			password: "",
		});
	};
	return (
		<div className="w-110 bg-white p-5 rounded-2xl flex flex-col gap-3">
			<h2 className="text-center font-semibold text-xl">Register</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-3">
				<input
					required
					value={formData.name}
					name="name"
					onChange={handleChange}
					className="border rounded p-2 outline-0"
					type="text"
					name="name"
					placeholder="name"
				/>
				<input
					required
					value={formData.email}
					name="email"
					onChange={handleChange}
					className="border rounded p-2 outline-0"
					type="email"
					name="email"
					placeholder="email"
				/>
				<input
					required
					value={formData.password}
					name="password"
					onChange={handleChange}
					className="border rounded p-2 outline-0"
					type="password"
					name="password"
					placeholder="password"
				/>
				<button className="bg-blue-700 cursor-pointer text-white py-2 rounded font-semibold">
					Register
				</button>
			</form>
			<p className="text-gray-600">
				Already have an account ?{" "}
				<span
					onClick={() => setToggle((prev) => !prev)}
					className="text-blue-600 font-semibold cursor-pointer"
				>
					Login here
				</span>
			</p>
		</div>
	);
};

export default Register;
