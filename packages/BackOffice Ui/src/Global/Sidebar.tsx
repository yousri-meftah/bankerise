import React from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { MdOutlineCached } from "react-icons/md";
import { TbSettingsSearch } from "react-icons/tb";
import { AiOutlineAudit } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { BiSolidBookContent } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
const Sidebarr = () => {
  const Modules = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Applications Management", link: "/", icon: LuFileStack },
    { name: "Configuration Management", link: "/", icon: IoSettingsSharp },
    { name: "Message Center", link: "/", icon: AiFillMessage },
    { name: "Users Management", link: "/", icon: FaUsers },
    { name: "Jobs Management", link: "/", icon: PiSuitcaseSimpleDuotone },
    { name: "Cache Maintenance", link: "/", icon: MdOutlineCached },
    { name: "Lookups Configuration", link: "/", icon: TbSettingsSearch },
    { name: "Audit", link: "/", icon: AiOutlineAudit },
    { name: "Forms Management", link: "/", icon: SiGoogleforms },
    { name: "Content Management", link: "/", icon: BiSolidBookContent },
    { name: "BPMN Configuration", link: "/", icon: FaProjectDiagram },
  ]
  return (
    <>
      <div className='bg-[#0d0f1d] min-h-screen w-72 text-gray-100'>

        <div className='p-3 flex justify-end'>
          <HiMenuAlt3 size={36} className='cursor-pointer' />
        </div>
        <div className='mt-4 mx-5 flex flex-col gap-4 relative '>
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