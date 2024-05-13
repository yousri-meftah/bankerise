
import { useContext, useState } from "react"
import AppCard from "../Components/AppCard"
import { Button } from "../Components/Moving-border"
import {  tabs } from "../utils/constants"
import { motion } from "framer-motion"
import AddApplicationSlideOver from "../Components/AddApplicationSlideOver"
import { Context } from "../utils/context"
const APP_CUSTOMER = "FRONT"
const APP_ADMIN = "ADMINISTRATION"
const TYPE_APP = "REGULAR_APPLICATION"
const TYPE_GATE = "GATEWAY_APPLICATION"
import { ApplicationDto } from "../../../store/admin-API/applications-controller/application_controller_schemas"


import { useGetConfigApplicationQuery } from "../../../store/admin-API/applications-controller/applications_controller_endpoints";


const Applicationss = () => {


  // state for the selected tab
  const tabContext = useContext(Context)
  const [IsSlideOverOpen, setIsSlideOverOpen] = useState(false)
  const { data : Applications, error, isLoading } = useGetConfigApplicationQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <>

      <div className=" px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* SERVICE TAB HERE */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find((tab) => tab.id == tabContext.selectedTabId)?.name}

            >
              {tabs.map((tab) => (
                <option key={tab.name} >{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex border-b border-gray-500 py-4">
              <ul
                role="list"
                className="flex justify-around min-w-full flex-none gap-x-6 px-2 text-lg font-bold  text-[--tabColor]  "
              >
                {tabs.map((tab) => (
                  <li key={tab.name} className="hover:scale-105 duration-300" >
                    <a href={tab.href} onClick={() => tabContext.setSelectedTabId(tab.id)} className={tab.id == tabContext.selectedTabId ? 'text-[--tabColorHover] shadow-xl' : ''}>
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center my-8 mx-16'>
        <span className='font-extrabold text-xl bg-gradient-to-r from-[--colorStart] to-[--colorEnd] bg-clip-text text-transparent '>Applications</span>
        <div className="size-fit" onClick={() => setIsSlideOverOpen(true)}>
          <Button
            type="button"
            className="rounded-md bg-[--border-color] px-3.5 py-2.5 text-sm font-semibold text-[--txt] shadow-sm hover:scale-105 duration-300 "
          >
            Add an Application
          </Button>
        </div>

      </div>
      <AddApplicationSlideOver open={IsSlideOverOpen} setOpen={setIsSlideOverOpen} />
      {/* APPLICATIONS HERE */}
      {tabContext.selectedTabId == 0 ? <>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mx-16 mb-9">

          {Applications?.filter((app: ApplicationDto)  => app.audience === APP_ADMIN && app.type === TYPE_APP).map((app : ApplicationDto, index : number) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4 * index }}
            >
              <AppCard key={index} title={app.name} description={"desription here ? "} id={ app.id} />
            </motion.div>

          ))}

        </div>
        <span className='font-extrabold text-xl bg-gradient-to-r from-[--colorStart] to-[--colorEnd] bg-clip-text text-transparent ml-14'>Gateway Applications</span>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mx-16 my-9">

          {Applications?.filter((app: ApplicationDto)  => app.audience === APP_ADMIN && app.type === TYPE_GATE).map((app : ApplicationDto, index : number) => (<motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.4 * index }}
          >
            <AppCard key={index} title={app.name} description={"no desc"} id={ app.id}  />
          </motion.div>
          ))}
        </div></>
        : <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mx-16 mb-9">

          {Applications?.filter((app: ApplicationDto) => app.audience === APP_CUSTOMER && app.type === TYPE_APP).map((app : ApplicationDto, index : number) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AppCard key={index} title={app.name} description={"no desc "} id={ app.id} />
            </motion.div>
          ))}

        </div>

      }

    </>
  )
}

export default Applicationss