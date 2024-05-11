import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import UsersTable from "../Components/UsersTable";
import { useContext } from "react";
import { Context } from "../utils/context";
import FilterButton from "@components/FilterButton";
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
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      <FilterButton fields={tabContext.selectedTabId?fieldsConfigCotumer:fieldsConfig}/>
      <UsersTable />

    </div>

  )
}

export default AppUsers