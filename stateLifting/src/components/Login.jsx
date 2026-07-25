import React from "react";

const Login = ({ setToggle }) => {

    return (
		<div className="w-110 bg-white p-10 rounded-2xl flex  flex-col gap-3">
			<h2 className="text-xl font-semibold text-center ">Login</h2>
			<form className="flex flex-col gap-3">
				<input
					className="border p-2 rounded"
					type="email"
					placeholder="john@gmail.com"
				/>
				<input
					className="border p-2 rounded"
					type="password"
					placeholder="password"
				/>
				<button className="bg-blue-700 text-white p-2 rounded font-semibold cursor-pointer">
					Login
				</button>
			</form>
			<p className="text-gray-700">
				Don't have an account ?{" "}
				<span onClick={() => setToggle((prev) => !prev)} className="text-blue-800 cursor-pointer font-semibold">Register here</span>
			</p>
		</div>
	);
};

export default Login;
