import { useAuth } from "../hooks/authHooks";

const RegisterPage = () => {
	const { register, handleSubmit, errors, navigate, registerForm } = useAuth();

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						Create Account 💀
					</h1>
					<p className="text-gray-500 mt-2">Signup to get started</p>
				</div>

				{/* register form */}
				<form onSubmit={handleSubmit(registerForm)} className="space-y-5">
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
							placeholder="Enter name here"
						/>
						{errors.name && (
							<p className="text-red-600">{errors.name.message}</p>
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
							placeholder="Enter email here"
						/>
						{errors.email && (
							<p className="text-red-600">{errors.email.message}</p>
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
									message: "Password must contain 6 characters",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="password"
							placeholder="Enter password here"
						/>
						{errors.password && (
							<p className="text-red-600">{errors.password.message}</p>
						)}
					</div>

					<button
						className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold transition duration-300 cursor-pointer"
						type="submit"
					>
						Register
					</button>
				</form>

				<div className="text-center mt-6 text-gray-500">
					Already have an account ?{" "}
					<button
						onClick={() => navigate("/")}
						className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
						type="button"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
