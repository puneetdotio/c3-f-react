import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";
import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";

const TopNav = () => {
	const dispatch = useDispatch();

	const { mode } = useSelector((store) => store.theme);

	let handleChange = () => {
		dispatch(toggleTheme());
	};

	return (
		<div className="flex rounded justify-between items-center bg-[var(--bg-card)]">
			<div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border border-gray-600">
				<Search size={23} />
				<input
					className="outline-0 w-full text-[var(--text-primary)]"
					type="text"
					placeholder="search workspace"
				/>
			</div>
			<div className="flex gap-4 px-2">
				{mode === "light" ? (
					<Moon onClick={handleChange} size={23} />
				) : (
					<Lightbulb onClick={handleChange} size={23} />
				)}

				<Bell size={23} />
				<Menu size={23} />
			</div>
		</div>
	);
};

export default TopNav;
