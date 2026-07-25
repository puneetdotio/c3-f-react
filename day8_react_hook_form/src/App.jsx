import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
	const [toggle, setToggle] = useState(true);
	const [users, setUsers] = useState(() => {
		return JSON.parse(localStorage.getItem("users")) || [];
	});

	const [updatedData, setUpdatedData] = useState(null);

	console.log("app main hu updated data", updatedData);

	const deleteHandler = (id) => {
		console.log(id);

		let filterUser = users.filter((val, index) => {
			return index !== id;
		});

		setUsers(filterUser);
		localStorage.setItem("users", JSON.stringify(filterUser));

		console.log(filterUser);
	};

	return (
		<div className="p-3 h-screen flex flex-col gap-3">
			<Navbar setToggle={setToggle} />

			{toggle ? (
				<div className="flex felx-wrap gap-3">
					{users.map((elem) => {
						return (
							<UserCard
								setUpdatedData={setUpdatedData}
								deleteHandler={deleteHandler}
								key={elem.id}
								user={elem}
								setToggle={setToggle}
							/>
						);
					})}
				</div>
			) : (
				<div className="h-[70%] flex justify-center items-center">
					<Form
						updatedData={updatedData}
						users={users}
						setUsers={setUsers}
						setToggle={setToggle}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
