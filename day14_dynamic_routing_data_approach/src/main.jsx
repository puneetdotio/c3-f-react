import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyStoreContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<MyStoreContextProvider>
			<App />
		</MyStoreContextProvider>
	</BrowserRouter>,
);
