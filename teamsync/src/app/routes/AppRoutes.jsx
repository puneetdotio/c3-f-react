import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./../layouts/AuthLayout";
import PublicRoute from "../protectedRoutes/PublicRoute";
import Login from "./../../features/auth/ui/pages/Login";
import Register from "./../../features/auth/ui/pages/Register";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import DashboardLayout from "./../layouts/DashboardLayout";
import { commonRoutes } from "./commonRoutes";
import RoleBasedRoute from "../protectedRoutes/RoleBasedRoute";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";
import { useDispatch } from "react-redux";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";

const AppRoutes = () => {
	let dispatch = useDispatch();

	useEffect(() => {
		(() => {
			dispatch(currentLoggedEmployee());
		})();
	}, []);

	let router = createBrowserRouter([
		{
			path: "/",
			element: <PublicRoute />,
			children: [
				{
					path: "",
					element: <AuthLayout />,
					children: [
						{
							path: "",
							element: <Login />,
						},
						{
							path: "register",
							element: <Register />,
						},
					],
				},
			],
		},
		{
			path: "/home",
			element: <ProtectedRoute />,
			children: [
				{
					path: "",
					element: <DashboardLayout />,
					children: [
						...commonRoutes,
						{
							element: <RoleBasedRoute allowedRoles={"admin"} />,
							children: adminRoutes,
						},
						{
							element: <RoleBasedRoute allowedRoles={"employee"} />,
							children: employeeRoutes,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRoutes;
