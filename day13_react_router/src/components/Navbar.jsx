import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between bg-amber-400 px-5 py-3 rounded-2xl">
			<div className="h-10 w-10 rounded-full overflow-hidden">
				<img
					className="w-full h-full object-cover"
					src="https://plus.unsplash.com/premium_photo-1783838548789-4c8c8c40cbbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>

			<div className="flex gap-10 items-center">                                          
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl font-semibold cursor-pointer"
							: "text-xl font-semibold cursor-pointer"
					}
					to={"/"}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl font-semibold cursor-pointer"
							: "text-xl font-semibold cursor-pointer"
					}
					to={"/about"}
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl font-semibold cursor-pointer"
							: "text-xl font-semibold cursor-pointer"
					}
					to={"/contact"}
				>
					Contact
				</NavLink>
			</div>

			{/* button */}
			<button className="bg-blue-600 text-blue-100, font-semibold px-3 py-1 rounded-xl">
				Login
			</button>
		</nav>
	);
};

export default Navbar;
