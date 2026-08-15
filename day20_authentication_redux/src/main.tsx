import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store.tsx";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
        <AppRoutes />
        <ToastContainer/>
	</Provider>
);
