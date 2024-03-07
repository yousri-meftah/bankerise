import React from 'react'
import Sidebar from './Sidebar.tsx';
import Topbar from './Topbar.tsx';
const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Topbar />
    </div>


  )
}

export default Layout