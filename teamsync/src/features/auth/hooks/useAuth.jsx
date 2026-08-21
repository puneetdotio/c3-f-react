import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/auth/authAction";

 export const useAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onRegisterSubmit = (data) => {
		console.log(data);
	};

	const onLoginSubmit = (data) => {
		dispatch(loginEmployee(data));
	};

	return {
		register,
		handleSubmit,
		reset,
		navigate,
		errors,
		onRegisterSubmit,
		onLoginSubmit,
	};
};

