import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
	const [toggle, setToggle] = useState(true);
	const [users, setUsers] = useState(
		JSON.parse(localStorage.getItem("users")) || [],
	);

	const [updatedData, setUpdatedData] = useState(null);

	const deleteUser = (id) => {
		let filterUser = users.filter((val, index) => {
			return index !== id;
		});

		console.log(filterUser);
		setUsers(filterUser);
		localStorage.setItem("users", JSON.stringify(filterUser));
	};

	return (
		<main className="p-3 h-screen flex flex-col gap-4 w-screen">
			<Navbar setToggle={setToggle} />

			{toggle ? (
				<div>
					{users.map((elem) => {
						return (
							<UserCard
								setUpdatedData={setUpdatedData}
								deleteUser={deleteUser}
								key={elem.id}
								user={elem}
								setToggle={setToggle}
							/>
						);
					})}
				</div>
			) : (
				<div className="flex justify-center items-center h-[70%]">
            <Form updatedData={updatedData} users={ users} setUsers={setUsers} setToggle={setToggle} />
				</div>
			)}
		</main>
	);
};

export default App;
