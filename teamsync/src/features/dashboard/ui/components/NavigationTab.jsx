import { ChartArea } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
	return (
		<div>
			<NavLink
				className={({ isActive }) =>
					`flex gap-3 pl-4 py-2 ${isActive ? "border-r-4 border-[var(--bg-primary)] bg-[var(--secondary)]" : ""}`
				}
				to={path}
				end="/"
			>
				<ChartArea />
				{title}
			</NavLink>
		</div>
	);
};

export default NavigationTab;
