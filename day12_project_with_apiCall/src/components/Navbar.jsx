import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
	let { setIsCartOpen } = useContext(MyStore);

	return (
		<div className="flex items-center justify-between px-5 py-3 bg-amber-400 rounded-2xl">
			<div className="h-10 w-10 rounded-full overflow-hidden">
				<img
					className="h-full w-full object-cover"
					src="https://plus.unsplash.com/premium_photo-1763734616837-b51f49ceaab5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="profile image"
				/>
			</div>
			<div className="flex items-center gap-10">
				<p onClick={() => setIsCartOpen(false)} className="text-xl font-semibold cursor-pointer">Home</p>
				<p onClick={() => setIsCartOpen(true)} className="text-xl font-semibold cursor-pointer">Cart</p>
			</div>
			<button>Login</button>
		</div>
	);
};

export default Navbar;
