import { createRoot } from "react-dom/client";
import "./index.css";

import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
	<AuthContextProvider>
		<AppRoutes />
        <ToastContainer/>
	</AuthContextProvider>,
);
