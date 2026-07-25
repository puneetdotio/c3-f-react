import { createContext } from "react";


export let MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
    
    return (
        <MyStore.Provider>
            {children}
        </MyStore.Provider>
    )
}