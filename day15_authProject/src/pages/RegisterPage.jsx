import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
	let { registeredUsers, setRegisteredUsers, setLoggedInUser } =
		useContext(Auth);

	let navigate = useNavigate();

	let {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm();

	let formSubmit = (data) => {
        console.log(data);
        
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        alert("User registered successfully")
        setLoggedInUser(data)
        localStorage.setItem("loggedinUser", JSON.stringify(data))
        localStorage.setItem("registeredUsers", JSON.stringify(arr))
        navigate("/main")
        reset();
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* heading */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						Create Account 👍
					</h1>
					<p className="text-gray-500 mt-2">Sign up to get Started</p>
				</div>

				{/* form */}
				<form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Name{" "}
						</label>
						<input
							{...register("name", {
								required: "Name is required",
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="text"
							placeholder="Enter your name"
						/>
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
									message: "Minimum 6 characters are required",
								},
							})}
							className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
							type="password"
							placeholder="password here"
						/>
					</div>

					<button
						className="bg-blue-600 w-full hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
						type="submit"
					>
						Register
					</button>
				</form>

				{/* login link */}
				<div className="text-center mt-3 text-sm text-gray-600">
					Already have an account?{" "}
					<button
						onClick={() => navigate("/")}
                        to="/"
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
