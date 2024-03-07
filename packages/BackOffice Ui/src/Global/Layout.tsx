import React from 'react'
import Sidebar from './Sidebar.tsx';
import Topbar from './Topbar.tsx';
import Index from './Index.tsx';
const Layout = () => {
  return (
    <div className='flex'>
      <div >
        <Sidebar />
      </div>
      
      <Index/>
    </div>


  )
}

export default Layout