import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (<>
    <h1>Dashboard Page</h1>
    <hr />
    <Outlet/>
    <footer>Dashboard Footer</footer>
  </>
  )
}

export default Dashboard