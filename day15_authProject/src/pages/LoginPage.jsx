import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
	const { registeredUsers, loggedInUser, setLoggedInUser } = useContext(Auth);

	let navigate = useNavigate();

	let {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm();

    let formSubmit = (data) => {
        let user = registeredUsers.find((val) => {
            return val.email === data.email && val.password === data.password;
        })

        if (!user) {
            toast.error("Invalid credentials or user not found")
            reset();
            return;
        }

        setLoggedInUser(user)
        localStorage.setItem("loggedinUser", JSON.stringify(user))
        toast.success("User loggedin Sucessfully")
        navigate("/main")
    }

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* heading */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Welcome back 👋</h1>
					<p className="text-gray-500 mt-2">Login to continue your account</p>
				</div>

				{/* form */}
				<form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
					<div>
						<label className="block mb-2 text-sm font-semibold text-gray-700">
							Email
						</label>
						<input
							{...register("email", {
								required: "Email is required",
							})}
							type="email"
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							placeholder="Enter your email"
						/>

						{errors.email && (
							<p className="text-red-600">{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className="block mb-2 text-sm font-semibold text-gray-700">
							Password
						</label>
						<input
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Minimum 6 characters are required",
								},
								maxLength: 6,
								message: "Maximum 6 characters are required",
							})}
							type="password"
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							placeholder="Enter a password"
						/>
						{errors.password && (
							<p className="text-red-600">{errors.password.message}</p>
						)}
					</div>

					{/* login button */}
					<button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
					>
						Login
					</button>
				</form>

				{/* Register Link */}
				<div className="mt-6 text-center text-sm text-gray-600">
					Don't have an account?{" "}
					<button
						onClick={() => navigate("/register")}
						className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
