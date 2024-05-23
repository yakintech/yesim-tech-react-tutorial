import React from 'react'
import { Outlet } from 'react-router-dom'
import { queryClient } from '..'

function Dashboard() {

  const cacheClear = () => {
    // clear cache
    queryClient.invalidateQueries('products')
  }

  return (<>
    <h1>Dashboard Page</h1>
    <button onClick={cacheClear}>Clear Products Cache</button>
    <hr />
    <Outlet/>
    <footer>Dashboard Footer</footer>
  </>
  )
}

export default Dashboard