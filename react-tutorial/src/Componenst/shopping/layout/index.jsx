import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

function Layout({ setSearch }) {
  return (
    <div>
      <Header setSearch={setSearch} />
      <div className='m-4 '>
        <Outlet />
      </div>
    </div>

  )
}

export default Layout