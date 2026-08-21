import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
      <div>
          <div></div>
          <div>
              <div>
                  <Outlet/>
              </div>
          </div>
    </div>
  )
}

export default DashboardLayout