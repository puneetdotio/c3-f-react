import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoute = ({ allowedRoles }) => {
	const { employee } = useSelector((store) => store.auth);

	if (!allowedRoles.includes(employee?.role)) {
		return <Navigate to="/unauthorized" />;
	}

	return <div><Outlet/></div>;
};

export default RoleBaseRoute;
