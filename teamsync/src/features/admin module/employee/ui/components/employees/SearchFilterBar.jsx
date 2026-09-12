import { ChevronDown, Search } from "lucide-react";
import React from "react";

const SearchFilterBar = ({ filters, handleSearchFilters }) => {
	console.log("filters", filters);

	return (
		<div>
			{/* search */}
			<div>
				<div>
					<Search size={18} />

					<input
						type="text"
						placeholder="filter by name or keyword..."
						value={filters.search}
						onChange={(e) => handleSearchFilters("search", e.target.value)}
					/>
				</div>
			</div>

			{/* filters */}
			<div>
				{/* role */}
				<div>
					<select
						value={filters.role}
						onChange={(e) => handleSearchFilters("role", e.target.value)}
					>
						<option value="">All Roles</option>
						<option value="admin">Admin</option>
						<option value="employee">Employee</option>
					</select>

					<ChevronDown size={18} />
				</div>

				{/* department */}
				<div className="relative">
					<select
						value={filters.department}
						onChange={(e) => handleSearchFilters("department", e.target.value)}
					>
						<option value="">All Departments</option>
						<option value="developer">Developer</option>
						<option value="administrative">Administrative</option>
						<option value="security">Security</option>
						<option value="management">Mangagement</option>
					</select>
					<ChevronDown size={18} />
				</div>

				{/* status */}
				<div className="relative">
					<select
						value={filters.status}
						onChange={(e) => handleSearchFilters("status", e.target.value)}
					>
						<option value="">All Status</option>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
					<ChevronDown size={18} />
				</div>
			</div>
		</div>
	);
};

export default SearchFilterBar;
