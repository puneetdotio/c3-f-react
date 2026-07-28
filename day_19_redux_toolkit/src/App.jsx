import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
	let dispatch = useDispatch();

	let { count } = useSelector((store) => store.counter);
	return (
		<div>
			<h1>Count is {count}</h1>
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	);
};

export default App;
