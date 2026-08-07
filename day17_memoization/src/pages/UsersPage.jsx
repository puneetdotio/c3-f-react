import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstace";
import UserCard from "../components/UserCard";

const UsersPage = () => {
	const [usersData, setUsersData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let getUsersData = async () => {
		try {
			let res = await axiosInstance.get("/users");
			setUsersData(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log("error in users api -> ", error);
		}
	};

	useEffect(() => {
		getUsersData();
	}, []);

	if (isLoading) {
		return <h1 className="text-4xl font-bold">Loading Users</h1>;
	}
	return (
		<div className="grid grid-cols-3 gap-4">
			{usersData.map((val) => {
				return <UserCard key={val.id} user={val} />;
			})}
		</div>
	);
};

export default UsersPage;
