import React, { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const Navbar = () => {
    let { setToggle } = useContext(MyStore);
    
	return (
		<div className="bg-gray-400 flex items-center justify-between px-8 py-3">
			<div className="h-10 w-10 overflow-hidden rounded-full">
				<img
					className="h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1773332598414-44a45e364d85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>
			<div className="flex items-center gap-10">
				<p onClick={() => setToggle(false)} className="text-xl font-semibold cursor-pointer">Product </p>
				<p onClick={() => setToggle(true)} className="text-xl font-semibold cursor-pointer">Cart </p>
			</div>
			<button className="bg-blue-700 text-blue-100 cursor-pointer px-3 py-1 rounded-full font-semibold">
				Login
			</button>
		</div>
	);
};

export default Navbar;
