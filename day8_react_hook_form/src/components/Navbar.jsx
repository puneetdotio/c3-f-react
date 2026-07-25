import React from "react";

const Navbar = ({ setToggle }) => {

    return (
		<nav className="flex items-center mb-4 justify-between rounded-2xl px-10 py-5 bg-amber-400">
			<div className="rounded-full bg-gray-100">
				<img
					className="rounded-full object-cover border-2 border-gray-200 outline-0 h-10 w-10"
					width={30}
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>
			<div className="flex items-center gap-10">
				<p className="font-semibold text-xl cursor-pointer">Home </p>
				<p className="font-semibold text-xl cursor-pointer">About</p>
				<p className="font-semibold text-xl cursor-pointer">Contact</p>
			</div>
			<button onClick={() => setToggle((prev) => !prev)} className="bg-blue-700 text-blue-100 px-3 py-1 rounded-2xl font-semibold">
				Create User
			</button>
		</nav>
	);
};

export default Navbar;
