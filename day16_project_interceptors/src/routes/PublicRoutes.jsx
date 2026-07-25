import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {
    console.log("public routeing...")

    const {loggedInUser} = useContext(Auth)

    if (loggedInUser) {
        return <Navigate to={"/main"} />
    }

  return (
    <Outlet/>
)
}

export default PublicRoutes