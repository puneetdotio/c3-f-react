import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const useAuth = () => {
	let {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm();

	let navigate = useNavigate();

	const { loggedInUser, registeredUsers, setLoggedInUser, setRegisteredUsers } =
		useContext(Auth);

	/* login logic */
	let loginFormSubmit = (data) => {
		let user = registeredUsers.find((val) => {
			return val.email === data.email && val.password === data.password;
		});

		if (!user) {
			toast.error("Invalid credentials or User not found");
			reset();
			return;
		}

		setLoggedInUser(user);
		localStorage.setItem("loggedinUser", JSON.stringify(user));
		toast.success("user loggedin successfully");
		reset();
		navigate("/main");
	};

	// register logic

    let registerFormSubmit = (data) => {
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        toast.success("user registered successfully")
        setLoggedInUser(data)
        localStorage.setItem("loggedinUser", JSON.stringify(data))
        localStorage.setItem("registeredUser", JSON.stringify(arr))
        reset();
        navigate("/main")
    }

	return {
		register,
		handleSubmit,
		errors,
		navigate,
		loginFormSubmit,
		registerFormSubmit,
	};
};

export default useAuth;
