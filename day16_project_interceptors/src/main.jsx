import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <AppRoutes/>
        <ToastContainer/>
    </AuthContextProvider>
  
)
