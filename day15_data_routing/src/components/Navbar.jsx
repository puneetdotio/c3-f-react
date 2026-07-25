import React from "react";
import { NavLink } from "react-router";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/services", label: "Services" },
	{ to: "/contact", label: "Contact" },
];

const Navbar = () => {
	return (
		<header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<NavLink
					to="/"
					className="text-lg font-semibold tracking-wide text-white"
				>
					Puneet<span className="text-cyan-400">.dev</span>
				</NavLink>

				<div className="flex items-center gap-2 sm:gap-4">
					{links.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={({ isActive }) =>
								`rounded-full px-3 py-2 text-sm font-medium transition ${
									isActive
										? "bg-cyan-500 text-slate-950"
										: "text-slate-300 hover:bg-slate-800 hover:text-white"
								}`
							}
						>
							{link.label}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
