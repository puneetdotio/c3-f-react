import React from "react";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
	let {
		register,
		handleSubmit,
		errors,
		navigate,
		loginFormSubmit,
	} = useAuth();
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* heading */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋 </h1>
					<p className="text-gray-500 mt-2">
						Login to continue to your account
					</p>
				</div>

				{/* form */}
				<form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-5">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							{...register("email", {
								required: "Email is required",
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blur-500 focus:ring-2 focus:ring-blue-200 transition"
							type="email"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-600">{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Password{" "}
						</label>
						<input
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Minimum 6 characters required",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blur-500 focus:ring-2 focus:ring-blue-200 transition"
							type="password"
							placeholder="Enter password"
						/>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>

					{/* login button */}
					<button
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
						type="submit"
					>
						Login
					</button>
				</form>

				{/* Register link */}
				<div className="mt-6 text-center text-sm text-gray-600">
					Don't have an account ? {"    "}
					<button
						onClick={() => navigate("/register")}
						type="button"
						className="text-blue-600 outline-none hover:text-blue-700 font-semibold cursor-pointer"
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
