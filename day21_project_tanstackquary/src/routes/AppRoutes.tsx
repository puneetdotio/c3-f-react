import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, useEffect } from "react";
import { addUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// import HomePage from "../pages/HomePage";
// import MainProtected from "./protected/MainProtected";
// import MainLayout from "../layout/MainLayout";
// import RegisterPage from "../pages/RegisterPage";
// import LoginPage from "../pages/LoginPage";
// import AuthLayout from "../layout/AuthLayout";
// import PublicProtected from "./protected/PublicProtected";
// import AboutPage from "../pages/AboutPage";
// import ShopPage from "../pages/ShopPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const MainProtected = lazy(() => import("./protected/MainProtected"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const PublicProtected = lazy(() => import("./protected/PublicProtected"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));

const AppRoutes = () => {
	const dispatch = useDispatch();

	const hydrateUser = () => {
		console.log("hydration processed...");

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
						{
							path: "about",
							element: <AboutPage />,
						},
						{
							path: "shop",
							element: <ShopPage />,
						},
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
