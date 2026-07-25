import React from "react";

const Navbar = ({ setToggle }) => {
	return (
		<nav className="bg-black rounded m-4 flex items-center justify-between px-10 py-5 ">
			<div>
				<img
					className="rounded-full"
					width={35}
					src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
					alt="user image profile"
				/>
			</div>
			<div className="flex items-center text-white font-semibold justify-between gap-10">
				<p>Home</p>
				<p>About </p>
				<p>Contact</p>
			</div>
			<button onClick={() => setToggle((prev) => !prev)} className="outline-1 border-none cursor-pointer hover:bg-blue-950 border-white text-white px-6 rounded py-2">
				Create User
			</button>
		</nav>
	);
};

export default Navbar;
