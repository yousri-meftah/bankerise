import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import UsersTable from "../Components/UsersTable";
import { BsFilter } from "react-icons/bs";
import { useContext, useState } from "react";
import Filter from "@components/Filter";
import { Context } from "../utils/context";
//import SharedTable from "../Components/SharedTable";
const words = `User Management`;

const fieldsConfigCotumer = [
  {
    type: 'text',
    name: 'userName',
    label: 'User Name'
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email'
  },
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'date',
    name: 'from',
    label: 'From'
  },
  {
    type: 'date',
    name: 'to',
    label: 'To'
  }
];


const fieldsConfig = [
  {
    type: 'text',
    name: 'userName',
    label: 'User Name'
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email'
  },
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'select',
    name: 'status',
    label: 'Status',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' }
    ]
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
      { value: 'guest', label: 'Guest' }
    ]
  },
  {
    type: 'date',
    name: 'from',
    label: 'From'
  },
  {
    type: 'date',
    name: 'to',
    label: 'To'
  }
];


//<DynamicTable columns={userColumns} data={roleData} actions={userActions} />
const AppUsers = () => {
  const tabContext = useContext(Context)
  console.log("yousri = ", tabContext)
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
      {filter? <Filter fields={tabContext.selectedTabId?fieldsConfigCotumer:fieldsConfig} close={()=>setFilter(false)} /> : null}
      <UsersTable />fieldsConfigCotumer
    </div>

  )
}

export default AppUsers