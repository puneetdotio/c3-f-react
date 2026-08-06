import React, { useEffect, useState } from "react";
import { axiosInstance } from "./../config/axiosInstance";
import UserCard from "./../components/UserCard";

const UsersPage = () => {
	const [usersData, setUsersData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let getUsersData = async () => {
		try {
			let res = await axiosInstance.get("/users");
			console.log("response of users", res);
			setUsersData(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log("error is users api", error);
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);

	if (isLoading) {
		return <h1 className="text-4xl font-semibold">Users Loading...</h1>;
	}
	return (
		<div className="grid grid-cols-4 gap-5">
			{usersData.map((val) => {
				return <UserCard key={val.id} user={val} />;
			})}
		</div>
	);
};

export default UsersPage;
