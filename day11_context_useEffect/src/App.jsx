import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyStoreContextProvider } from "./context/MyContext";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)

	useEffect(() => {
		console.log("App rendering...");
	}, [toggle]);

	return (
		<div>
			App
			<h1>Hello - {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(prev => !prev)}>Change toggle</button>
			{/* <MyStoreContextProvider>
				<Home />
        </MyStoreContextProvider> */}
				<About />
			<Contact />
		</div>
	);
};

export default App;
