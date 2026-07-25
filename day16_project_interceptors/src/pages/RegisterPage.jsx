import React from "react";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
	const { register, handleSubmit, errors, registerFormSubmit, navigate } =
		useAuth();

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* heading */}
				<div className=" text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						Create Account 💀
					</h1>
					<p className="text-gray-500 mt-2">Sign up to get started 🏃‍♂️‍➡️</p>
				</div>

				{/* form */}
				<form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-5">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							{...register("name", {
								required: "Name is required",
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="text"
							placeholder="Enter your name"
						/>
						{errors.name && (
							<p className="text-red-500">{errors.name.message}</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							{...register("email", {
								required: "Email is requred",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Please enter a valid email",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="email"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-500">{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Minimum 6 characters required",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="password"
							placeholder="Create a Password"
						/>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>

					{/* register button */}
					<button
						className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold rounded-lg transition duration-300 cursor-pointer outline-none"
						type="submit"
					>
						Register
					</button>
				</form>
				{/* login link */}
				<div className="mt-6 text-center text-sm text-gray-600">
					Already have an account ? {""}
					<button
						type="button"
						onClick={() => navigate("/")}
						to="/login"
						className="text-blue-600 hover:text-blue-700 font-semibold"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
