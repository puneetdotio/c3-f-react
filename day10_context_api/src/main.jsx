import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyStoreContextProvider } from "./context/MyWebsite.jsx";

createRoot(document.getElementById("root")).render(

    <MyStoreContextProvider>

		<App />
    </MyStoreContextProvider>
    
	
);
