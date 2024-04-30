import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import RolesTable from "../Components/RolesTable";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import Filter from "@components/Filter";
const words = `Application Role Management`;

const fieldsConfig = [
  {
    type: 'text',
    name: 'userName',
    label: 'Role Name'
  },]

const AppRoles = () => {

  const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      <button
          type="button"
          className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
          onClick={()=>setFilter(!filter)}
        >
          <BsFilter size={20} />
          Filter
      </button>
      {filter? <Filter fields={fieldsConfig} close={()=>setFilter(false)} /> : null}
      <RolesTable />
    </div>
  )
}

export default AppRoles