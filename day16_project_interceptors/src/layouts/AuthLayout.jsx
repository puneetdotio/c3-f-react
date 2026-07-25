import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    console.log("Auth rendering...")

  return (
    <Outlet/>
)
}

export default AuthLayout