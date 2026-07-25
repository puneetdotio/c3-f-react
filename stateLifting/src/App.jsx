import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
	const [toggle, setToggle] = useState(false);
	const [users, setUsers] = useState([]);

	return (
		<div className="h-screen w-screen bg-gray-200 flex items-center justify-center gap-5">
			{toggle ? (
				<Login setToggle={setToggle} />
			) : (
				<Register setUsers={setUsers} setToggle={setToggle} />
      )}
      
      {users.map((user) => {
        return <UserCard user={user}/>
      })}
		</div>
	);
};

export default App;
