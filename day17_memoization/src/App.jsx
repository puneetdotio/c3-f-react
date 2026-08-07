import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
	console.log("app rendering...");

	const [count, setCount] = useState(0);
	const [users, setUsers] = useState({ name: "ragav", id: 789 });

	let calculation = useMemo(() => { 
		console.log("calculation running...")
		let sum = 0;

		for (let i = 0; i < 1000000; i++){
			sum += i;
		}
		return sum;
	}, [])

	let greet = useCallback(() => {
		console.log("good evening...");
	}, [users]);

	return (
		<div>
			<h1>Memoization</h1>
			<h1>Count is {count}</h1>
			<h1>Name is {users.name}</h1>
			<h1>Calculation is { calculation}</h1>
			<button onClick={() => setUsers({...users, name:"rajeev"})}>Change name</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<Home greet={greet} />
			<About greet={greet} />
		</div>
	);
};

export default App;
