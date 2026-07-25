import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    
    console.log("context rendering...")

	return (
		<MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
	);
};
