import React from "react";

const UserCard = ({  user, setUpdatedData, setToggle, deleteHandler }) => {
	return (
		<div className="flex flex-col gap-2 border p-2 rounded-2xl">
			<div className="h-40 w-50 rounded-2xl overflow-hidden">
				<img
					className="h-full w-full object-cover"
					src={user.image}
					alt="user image"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<p className="font-semibold">Name: {user.name} </p>
				<p className="text-xs">Email: {user.email} </p>
				<p className="text-xs">Mobile: {user.mobile} </p>
			</div>
			<div className="flex justify-between mb-1">
				<button onClick={() => {
					setToggle((prev) => !prev);
					setUpdatedData(user)
				}} className="bg-amber-600 font-semibold text-white px-3 py-1 rounded-2xl cursor-pointer">
					Updage{" "}
				</button>
				<button onClick={() => deleteHandler(user.id)} className="bg-red-500 font-semibold text-white px-3 py-1 rounded-2xl cursor-pointer">
					Delete{" "}
				</button>
			</div>
		</div>
	);
};

export default UserCard;
