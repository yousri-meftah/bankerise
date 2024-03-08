import React from 'react'
import { Modules } from '../utils/constants.js'
import { Logos } from '../utils/constants.js'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const Sidebarr = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <>
      <div className={`bg-gradient-to-b from-[#0d0f1d] to-[#24303f] min-h-full  ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 relative`}>
  {/* LOGO HERE */}
        {open ? <div className='p-3 h-[65px] flex justify-around items-center'>
          <img src={Logos.logo} alt="Bankerise's Logo" className='hover:cursor-pointer' />
          <FaAngleLeft color='gray' size={22} className='cursor-pointer' onClick={() => setOpen(!open)} />
        </div> : <div className='p-3 h-[65px] flex flex-col justify-center items-center'>
        <img src={Logos.logoxs} alt="Bankerise's Logo" className='hover:cursor-pointer w-[35px]' />
          <FaAngleRight color='gray' size={22} className='cursor-pointer absolute -right-5' onClick={() => setOpen(!open)} />
        </div>}

  {/* ITERATING ON MODULES */}
        <div className='mt-8 mx-3 flex flex-col gap-4 relative ' style={{ fontFamily: 'Poppins' }}>
          {
            Modules?.map((module, i) => (
              <div key={i} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-700 hover:cursor-pointer rounded-md my-1'>
                <div>
                  {React.createElement(module?.icon, { size: '20' })}
                </div>
                <h2 style={{transitionDelay:`${i+3}00ms`}} 
                 className={`whitespace-pre duration-500 ${!open && 'translate-x-20 overflow-hidden opacity-0'}`}>
                  {module?.name}
                </h2>
              </div>))}
        </div>


      </div>
    </>
  )
}

export default Sidebarr