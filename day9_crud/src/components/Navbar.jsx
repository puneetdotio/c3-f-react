import React from "react";

const Navbar = ({ setToggle }) => {
	return (
		<div className="flex items-center justify-between px-10 py-5 bg-amber-500 rounded-2xl">
			<div className="h-10 w-10 rounded-full overflow-hidden border-gray-200 border">
				<img
					className="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>
			<div className="flex items-center gap-10">
				<p className="text-xl font-semibold cursor-pointer">Home </p>
				<p className="text-xl font-semibold cursor-pointer">About </p>
				<p className="text-xl font-semibold cursor-pointer">Contact </p>
			</div>
			<div
				onClick={() => setToggle((prev) => !prev)}
				className="bg-blue-700 text-blue-100 px-3 cursor-pointer py-1 rounded-full font-semibold"
			>
				Create User
			</div>
		</div>
	);
};

export default Navbar;
