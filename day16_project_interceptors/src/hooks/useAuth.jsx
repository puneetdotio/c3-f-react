import React, { useContext } from "react";
import { Auth } from "./../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuth = () => {
	const {setLoggedInUser, registeredUsers, setRegisteredUsers } =
		useContext(Auth);

	let navigate = useNavigate();

	let {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm();

	/* login logic */
    let loginFormSubmit = (data) => {
        let user = registeredUsers.find((val) => {
            return val.email === data.email && val.password === data.password;
        })

        if (!user) {
            toast.error("Invalid credentials or user not found")
            reset();
            return
        }

        setLoggedInUser(user)
        localStorage.setItem("loggedinUser", JSON.stringify(user))
        toast.success("User loggedIn")
        reset();

        navigate("/main")

    }

    let registerFormSubmit = (data) => {
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        toast.success("user registered successfully")
        setLoggedInUser(data)
        localStorage.setItem("loggedinUser", JSON.stringify(data))
        localStorage.setItem("registeredUsers", JSON.stringify(arr))

        reset();
        navigate("/main")
    }

	return {
		loginFormSubmit,
		registerFormSubmit,
		register,
		handleSubmit,
		reset,
		errors,
		isValid,
		navigate,
	};
};
