import { useState, useTransition } from "react";
import AppCard from "../../Components/AppCard"
import { Button } from "../../Components/Moving-border"
import { Applications } from "../../utils/constants"
const ApplicationsManagement = () => {
  const [tab, setTab] = useState("false");
  

  // const handleTabChange = (id) => {
  //     setTab(id);
  // };
  const tabs = [
    { name: 'Adminstration', href: '#', current: true },
    { name: 'Customer', href: '#', current: false },
  ]
  return (
    <>

      <div className=" px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find((tab) => tab.current)?.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex border-b border-white/40 py-4">
              <ul
                role="list"
                className="flex justify-around min-w-full flex-none gap-x-6 px-2 text-lg font-bold  text-gray-400 "
              >
                {tabs.map((tab) => (
                  <li key={tab.name} >
                    <a href={tab.href} className={tab.current ? 'text-indigo-400 shadow-xl' : ''}>
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
        <span className='font-extrabold text-xl bg-gradient-to-r from-[#8e9eab] to-[#eef2f3] bg-clip-text text-transparent '>Applications Management</span>
        <Button
          type="button"
          className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:white/20"
        >
          Add an Application
        </Button>
      </div>

      {/* APPLICATIONS HERE */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mx-16">

        {Applications.map((app, index) => (
          <AppCard key={index} title={app.title} description={app.description} />
        ))}

      </div>

    </>
  )
}

export default ApplicationsManagement