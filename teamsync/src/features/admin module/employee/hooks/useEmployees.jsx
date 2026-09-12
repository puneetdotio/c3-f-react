import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllEmployees } from "../api/EmployeeApis";

export const useEmployee = () => {
	const [page, setPage] = useState(1);
	const [filters, setfilters] = useState({
		search: "",
		role: "",
		department: "",
		status: "",
	});

	console.log("filters => ", filters);

	let { data, isPending, isFetching } = useQuery({
		queryKey: ["employees", page, filters],
		queryFn: () =>
			getAllEmployees({
				page,
				limit: 20,
				role: filters.role,
				department: filters.department,
				status: filters.status,
				search: filters.search,
			}),
		staleTime: 100000,
		keepPreviousData: true,
		placeholderData: (prev) => prev,
	});

	const handlePageChange = (newPage) => {
		if (newPage < 1) return;

		if (newPage > data?.pagination?.totalPages) return;

		setPage(newPage);
	};

	const handleSearchFilters = (name, value) => {
		setPage(1);

		setfilters({ ...filters, [name]: value });
	};

	return {
		data,
		isPending,
		isFetching,
		handlePageChange,
		handleSearchFilters,
		filters,
	};
};
