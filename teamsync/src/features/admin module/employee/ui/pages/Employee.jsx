import React from 'react'
import { useEmployee } from './../../hooks/useEmployees';
import { Outlet } from 'react-router';
import EmployeeHeader from '../components/employees/EmployeeHeader';

const Employee = () => {
  let { data, isPending, handlePageChange, isFetching, filters, handleSearchFilters} = useEmployee();

  console.log("filters -> ", filters)

  if(isPending) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <Outlet/>

        {/* header */}
        <EmployeeHeader/>

        {/* stats */}
        
      </div>
    </div>
  )
}

export default Employee