import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicRoute from '../protectedRoutes/PublicRoute'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import ProtectedRoute from '../protectedRoutes/ProtectedRoute'
import DashboardLayout from '../layout/DashboardLayout'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <LoginPage/>,
                        },
                        {
                            path: "register",
                            element:<RegisterPage/>,
                        },
                    ]
                }
            ]
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            
                        }
                    ]
                }
            ]
        },
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes