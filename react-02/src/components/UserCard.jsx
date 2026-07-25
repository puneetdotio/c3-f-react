import React from "react";

const UserCard = ({ user, setToggle, deleteUser, setUpdatedData }) => {
	return (
		<section className="border w-fit border-white bg-black p-4 rounded flex flex-col gap-2 text-white">
			<div className="h-40 w-40">
				<img
					className="object-cover h-full w-full rounded-xl"
					src={user.image}
					alt="user image"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h1>{user.name}</h1>
				<p className="text-sm">{user.email}</p>
				<p className="text-sm">{user.mobile}</p>
			</div>
			<div className="w-full flex justify-between gap-4">
				<button
					onClick={() => {
						setUpdatedData(user);
						setToggle((prev) => !prev);
					}}
					className="bg-yellow-700 px-3 py-2 rounded"
				>
					Update
				</button>
				<button onClick={() => deleteUser(user.id)} className="bg-red-700 px-3 py-2 rounded">Delete</button>
			</div>
		</section>
	);
};

export default UserCard;
