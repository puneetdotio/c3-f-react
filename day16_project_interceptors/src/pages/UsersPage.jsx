import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import UserCard from '../components/UserCard'

const UsersPage = () => {
  const [usersData, setUsersData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let getUsersData = async () => {
    try {
      let res = await axiosInstance("/users")
      setUsersData(res.data)
      setIsLoading(false)
    } catch (error) {
      console.log("Error while fetching the users data", error)
    }
  }

  useEffect(() => {getUsersData()}, [])

  if (isLoading) {
    return <h1 className='text-4xl'>Users Loading...</h1>
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
      {usersData.map((val) => {
        return <UserCard key={val.id} user={ val} />
      })}
    </div>
  )
}

export default UsersPage