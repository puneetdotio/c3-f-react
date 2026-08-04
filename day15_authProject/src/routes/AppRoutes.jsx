import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicePage from '../pages/ServicePage'
import AuthLayout from '../layout/AuthLayout'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/> ,
            children: [
                {
                    path: "",
                    element: <HomePage/>,
                },
                {
                    path: "about",
                    element: <AboutPage/>,
                },
                {
                    path: "services",
                    element: <ServicePage/>,
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout/>,
        }
    ])
  return (
    <RouterProvider router={router} />
)
}

export default AppRoutes