import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    console.log(("protected route rendering..."))

    let { loggedInUser } = useContext(Auth);

    if (!loggedInUser) {
        return <Navigate to={"/"} />
    }

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedRoute