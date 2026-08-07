import React from "react";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {
	let { register, handleSubmit, errors, navigate, registerFormSubmit } =
		useAuth();

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* heading */}
				<div className="text-center mt-8">
					<h1 className="text-3xl text-gray-800 font-bold">
						Create Account 💀
					</h1>
					<p className="text-gray-500 mt-2">Signup to get started</p>
				</div>

				{/* register form */}
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
							placeholder="Enter your name here"
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
								required: "Email is required",
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="email"
							placeholder="Enter your email here"
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
								required: "Password is requied",
								minLength: {
									value: 6,
									message: "Minimum 6 characteres are required",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="password"
							placeholder="Enter password here"
						/>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>

					<button
						className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold cursor-pointer transition duration-300"
						type="submit"
					>
						Register
					</button>
				</form>

				<div className="text-center mt-4 text-sm text-gray-600">
					Already have an account ?{" "}
					<button
						onClick={() => navigate("/")}
						to="/login"
						className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
