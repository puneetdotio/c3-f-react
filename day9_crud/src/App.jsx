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

	const deleteUser = (id) => {
		let filterUser = users.filter((val) => {
			return val.id !== id;
		});

		console.log(filterUser);
		setUsers(filterUser);
		localStorage.setItem("users", JSON.stringify(filterUser));
	};

	return (
		<div className="h-screen flex flex-col gap-3 px-5 py-3">
			<Navbar setToggle={setToggle} />

			{toggle ? (
				<div className="flex flex-wrap gap-3">
					{users.map((elem) => {
						return (
							<UserCard
								setUpdatedData={setUpdatedData}
								deleteUser={deleteUser}
								key={elem.id}
								users={elem}
								setUsers={setUsers}
								setToggle={setToggle}
							/>
						);
					})}
				</div>
			) : (
				<div className="h-[80%] flex items-center justify-center">
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
