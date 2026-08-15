import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import MainProtected from "./protected/MainProtected";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
	const dispatch = useDispatch();

	const hydrateUser = () => {
		console.log("hydration process...");

		const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

		if (!loggedInUser) {
			toast.error("Unauthorized user");
			return;
		}

		dispatch(addUser(loggedInUser));
	};

	useEffect(() => {
		hydrateUser();
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <PublicProtected />,
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
			element: <MainProtected />,
			children: [
				{
					path: "",
					element: <MainLayout />,
					children: [
						{
							path: "",
							element: <HomePage />,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRoutes;
