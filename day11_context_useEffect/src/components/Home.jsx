import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
	console.log("Home rendering...");

	let { count, setCount } = useContext(MyStore);
	return (
		<div>
			<h1>Count - {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increament</button>
		</div>
	);
};

export default Home;
