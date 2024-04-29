import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import UsersTable from "../Components/UsersTable";
//import SharedTable from "../Components/SharedTable";
const words = `User Management`;





//<DynamicTable columns={userColumns} data={roleData} actions={userActions} />
const AppUsers = () => {

  return (
    <div className="space-y-12 mt-10 ">
    <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      <UsersTable />
    </div>

  )
}

export default AppUsers