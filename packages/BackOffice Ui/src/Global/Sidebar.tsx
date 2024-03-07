import React from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import {Modules} from '../utils/constants'
const Sidebarr = () => {
  
  return (
    <>
      <div className='bg-gradient-to-b from-[#0d0f1d] to-[#1c2434] min-h-screen w-72 text-gray-100'>

        <div className='p-3 flex justify-end'>
          <HiMenuAlt3 size={36} className='cursor-pointer' />
        </div>
        <div className='mt-4 mx-5 flex flex-col gap-4 relative ' style={{ fontFamily: 'Poppins' }}>
          {
            Modules?.map((module, i) => (
              <div key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md my-1'>
                <div>
                  {React.createElement(module?.icon, { size: '20' })}
                </div>
                <h2>
                  {module?.name}
                </h2>
              </div>))}
        </div>


      </div>
    </>
  )
}

export default Sidebarr