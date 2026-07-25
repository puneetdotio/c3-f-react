import { createContext, useState } from "react";




export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [centralValue, setCentralValue] = useState("main context se hu")
    const [cartItems, setCartItems] = useState([])


    return (
        <MyStore.Provider value={{centralValue, cartItems, setCartItems}}>
            {children}
        </MyStore.Provider>
    )
}