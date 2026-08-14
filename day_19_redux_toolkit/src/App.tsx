import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {

  const dispatch = useDispatch()
  const {count} = useSelector((store) => store.counter);
  console.log(count)
  
	return (
		<div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <button onClick={() => dispatch(increment())}>Inc</button>
		</div>
	);
};

export default App;
