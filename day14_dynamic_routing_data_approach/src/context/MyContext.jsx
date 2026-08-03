import { createContext, useState } from "react";


export const MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([])
    
    return (
        <MyStore.Provider value={{productsData, setProductsData}}>
            {children}
        </MyStore.Provider>
    )
}