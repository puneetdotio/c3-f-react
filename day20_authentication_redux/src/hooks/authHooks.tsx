import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [registeredUsers, setRegisteredUsers] = useState(
		JSON.parse(localStorage.getItem("registeredUsers")) || [],
	);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const registerForm = (data) => {
		const arr = [...registeredUsers, data];
		setRegisteredUsers(arr);
		localStorage.setItem("registeredUsers", JSON.stringify(arr));
		toast.success("User registered successfully");
		reset();
		navigate("/main");
	};

	const loginForm = (data) => {
		const user = registeredUsers.find((val) => {
			return val.email === data.email && val.password === data.password;
		});

		if (!user) {
			toast.error("Invalid credentials...");
			reset();
			return;
		}

		dispatch(addUser(user));
		localStorage.setItem("loggedInUser", JSON.stringify(user));
		toast.success("user loggedIn successfully...");
		reset();
	};

	return {
		register,
		handleSubmit,
		errors,
		registerForm,
		loginForm,
		navigate,
		reset,
	};
};
