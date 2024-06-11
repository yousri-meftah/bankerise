import React, { useEffect, useState } from 'react'
//import { Modules } from '@utils/constants'
import { Logos } from '@utils/constants'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IModule, ISubModule } from './types/types';
import { IoChevronDownOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
import { TiSortAlphabetically } from "react-icons/ti";
import { FaProjectDiagram } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { useTranslation } from 'react-i18next';




const Sidebarr = () => {
  // sidebar state
  const [open, setOpen] = React.useState(true)
  const [selectedModule, setSelectedModule] = useState<IModule | null>(null);
  // nested Module state
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const storedModule = localStorage.getItem('selectedModule');
    if (storedModule) {
      setSelectedModule(JSON.parse(storedModule));
    }
  }, []);
  const handleCollapseSideBar = () => {
    setOpen(!open);
    setExpanded(false)
  };
  const { t } = useTranslation();

   const Modules = [
  { hasSubModules: false, name: t("Dashboard"), link: "dashboard", icon: MdOutlineDashboard },
  { hasSubModules: false, name: t("Applications Management"), link: "applications-management", icon: LuFileStack },
  {
    hasSubModules: true, name: t("Configuration Management"), link: "", icon: IoSettingsSharp,
    subModules: [
      { name: t("Dictionary Management"), link: "configuration-management/dictionary-management", icon: TiSortAlphabetically  },
      { name: t("Process Configuration"), link: "configuration-management/process-config", icon: VscServerProcess },
      { name: t("Global Parameters"), link: "configuration-management/global-parameters" , icon: IoSettings},
      { name: t("Channels Management"), link: "configuration-management/channels-management", icon: MdOutlineSmartphone }
    ]
  },
  { hasSubModules: false, name: t("Message Center"), link: "message-center", icon: AiFillMessage },
  { hasSubModules: false, name: t("Users Management"), link: "users-management", icon: FaUsers },
  { hasSubModules: false, name: t("Jobs Management"), link: "jobs-management", icon: PiSuitcaseSimpleDuotone },
  { hasSubModules: false, name: t("Cache Maintenance"), link: "cache-maintenance", icon: MdOutlineCached },
  { hasSubModules: false, name: t("Lookups Configuration"), link: "lookups-configuration", icon: TbSettingsSearch },
  { hasSubModules: false, name: t("Audit"), link: "audit", icon: AiOutlineAudit },
  { hasSubModules: false, name: t("Forms Management"), link: "forms-management", icon: SiGoogleforms },
  { hasSubModules: false, name: t("Content Management"), link: "content-management", icon: BiSolidBookContent },
  { hasSubModules: false, name: t("BPMN Configuration"), link: "bpmn-configuration", icon: FaProjectDiagram },
];
const handleModuleClick = (module: IModule | ISubModule) => {
    // Update selected module in state
    setSelectedModule(module);
    // Store selected module in local storage
    localStorage.setItem('selectedModule', JSON.stringify(module));
  };

  return (
    <>
      <div className={`bg-gradient-to-b from-[#0d0f1d] to-[#24303f] min-h-screen shadow-2xl ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 sticky top-0`}>
        {/* LOGO HERE */}
        {open ?
          <div className='p-3 h-[65px] flex justify-around items-center'>
            <img src={Logos.logo} alt="Bankerise's Logo" className='hover:cursor-pointer size-48' />
            <FaAngleLeft color='gray' size={22} className='cursor-pointer' onClick={handleCollapseSideBar} />
          </div> :
          <div className='p-3 h-[65px] flex flex-col justify-center items-center'>
            <img src={Logos.logoxs} alt="Bankerise's Logo" className='hover:cursor-pointer w-[35px]' />
            <FaAngleRight color='gray' size={22} className='cursor-pointer absolute -right-6' onClick={() => setOpen(!open)} />
          </div>}

{/* ITERATING ON MODULES */}
        <div className='mt-8 mx-3 flex flex-col gap-4 relative ' style={{ fontFamily: 'Poppins' }}>
          {
            Modules?.map((module: IModule, i: number) => (
              <>
              {/* CHECKING IF THIS MODULE HAS SUBMODULES */}
                {
                  module.hasSubModules == false ? (<Link to={module?.link} key={i} className={`flex group items-center text-sm gap-3.5 font-medium p-2 rounded-md my-1 duration-200 ${selectedModule === module ? 'bg-gray-600' : 'hover:bg-gray-700 hover:cursor-pointer'}`}
                    onClick={() => handleModuleClick(module)}
                  >
                    <div>
                      {React.createElement(module?.icon, { size: '20' })}
                    </div>
                    <div style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                      className={`flex items-center gap-2 whitespace-pre duration-300 ${!open && "opacity-0 translate-x-20 overflow-hidden"
                        }`}>
                      <h2>
                        {module?.name}
                      </h2>
                      {module.hasSubModules && <IoChevronDownOutline />}
                    </div>

                    <h2
                      className={`${open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {module?.name}
                    </h2>
                  </Link>)

                  // MODULE WITH SUBMODULE LOGIC HERE
                    : (<div key={i} className={`flex group items-center text-sm gap-3.5 font-medium p-2 rounded-md my-1 duration-200 ${selectedModule === module ? 'bg-gray-600' : 'hover:bg-gray-700 hover:cursor-pointer'}`}
                      onClick={() => {setExpanded(!expanded)
                        setOpen(true)}
                      }
                    >
                      <div>
                        {React.createElement(module?.icon, { size: '20' })}
                      </div>
                      <div style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                        className={`flex items-center gap-2 whitespace-pre duration-300 ${!open && "opacity-0 translate-x-20 overflow-hidden"
                          }`}>
                        <h2>
                          {module?.name}
                        </h2>
                        {module.hasSubModules && <IoChevronDownOutline />}
                      </div>

                      <h2
                        className={`${open && "hidden"
                          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                      >
                        {module?.name}
                      </h2>
                    </div>)
                }

{/* SUBMODULE ITERATION LOGIC HERE */}
                {module.hasSubModules == true && expanded ? (
                  <div
                    className={`ml-4 ${expanded ? "flex-col border-l border-gray-400 pl-6 my-auto" : "hidden"}`}
                  >
                    {module.subModules && module?.subModules.map((submodule, j) => (
                      <Link to={submodule.link}>
                        <motion.div
                          key={submodule.name} // Add a unique key for each element
                          initial={{ opacity: 0, }} // Initial state (hidden above)
                          animate={{ opacity: 1, }} // Animation when visible
                          transition={{ delay: j * 0.1 }} // Staggered delay for each element
                          className={`size-full mb-3 flex items-center gap-4 hover:bg-gray-700 p-2 rounded-md ${selectedModule === submodule ? 'bg-gray-600' : 'hover:bg-gray-700 hover:cursor-pointer'}`}
                          onClick={() => handleModuleClick(submodule)}
                        >
                          {React.createElement(submodule?.icon, { size: '20' })}
                          <div className="text-sm text-gray-300 hover:text-gray-100 hover:cursor-pointer">
                            {submodule.name}
                          </div>
                        </motion.div></Link>
                    ))}
                  </div>
                ) : null}
              </>
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Sidebarr