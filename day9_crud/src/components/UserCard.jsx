import React from "react";

const UserCard = ({ users, setToggle, deleteUser, setUpdatedData }) => {
	return (
		<div className=" border p-2 rounded-2xl flex flex-col gap-3 ">
			<div className="h-40 w-50 rounded-2xl bg-gray-400 p-1 overflow-hidden">
				<img
					className="w-full h-full object-cover rounded-2xl"
					src={users.image}
					alt={users.name}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h2 className="font-semibold text-xl">Name: {users.name}</h2>
				<p className="text-xs">Email: {users.email}</p>
				<p className="text-xs">Mobile: {users.mobile}</p>
			</div>
			<div className=" flex items-center justify-between mb-1">
				<button
					onClick={() => {
						setUpdatedData(users);
						setToggle((prev) => !prev);
					}}
					className="bg-amber-600 text-white px-3 py-1 rounded-2xl font-semibold"
				>
					Update{" "}
				</button>
				<button
					onClick={() => deleteUser(users.id)}
					className="bg-red-600 text-white px-3 py-1 rounded-2xl font-semibold"
				>
					Delete{" "}
				</button>
			</div>
		</div>
	);
};

export default UserCard;
