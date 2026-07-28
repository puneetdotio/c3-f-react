import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between px-5 py-3 rounded-xl bg-amber-400">
			<div className="h-10 w-10 rounded-full overflow-hidden">
				<img
					className="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1777653224371-0662a037a904?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>
			<div className="flex items-center gap-10">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl cursor-pointer font-semibold"
							: "text-xl cursor-pointer font-semibold"
					}
					to={"/"}
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl cursor-pointer font-semibold"
							: "text-xl cursor-pointer font-semibold"
					}
					to={"/about"}
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-red-500 text-xl cursor-pointer font-semibold"
							: "text-xl cursor-pointer font-semibold"
					}
					to={"/contact"}
				>
					Contact
				</NavLink>
			</div>
			<button>Login</button>
		</div>
	);
};

export default Navbar;
