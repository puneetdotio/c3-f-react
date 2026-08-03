import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between px-5 py-3 bg-amber-400 rounded-2xl"> 
			<div className="h-10 w-10 overflow-hidden rounded-full">
				<img className="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1785169719584-f1b970b3d8f3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
            </div>
            <div className="flex items-center gap-10">
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold text-xl" : "text-xl font-semibold"} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold text-xl" : "text-xl font-semibold"} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-500 font-semibold text-xl" : "text-xl font-semibold"} to="/products">Products</NavLink>
            </div>
            <button className="bg-blue-600 text-blue-100 px-3 py-1 rounded-2xl font-semibold hover:bg-blue-700">Login</button>
		</div>
	);
};

export default Navbar;
