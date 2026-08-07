import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "./PublicRoute";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";

const AppRoutes = () => {
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
							element: <LoginPage />,
						},
						{
							path: "register",
							element: <RegisterPage />,
						},
					],
				},
			],
		},
		{
			path: "/main",
			element: <ProtectedRoute />,
			children: [
				{
					path: "",
					element: <MainLayout />,
					children: [
						{
							path: "",
							element: <HomePage />,
						},
						{
							path: "users",
							element: <UsersPage />,
						},
						{
							path: "products",
							element: <ProductsPage />,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRoutes;
