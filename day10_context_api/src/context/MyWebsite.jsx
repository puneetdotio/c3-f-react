import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
		const [toggle, setToggle] = useState(false);
    
    return (

        <MyStore.Provider value={{cartItems, setCartItems, toggle, setToggle}}>
            {children}
        </MyStore.Provider>
    )
}