import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import RolesTable from "../Components/RolesTable";

const words = `Application Role Management`;
import FilterButton from "@components/FilterButton";
const fieldsConfig = [
  {
    type: 'text',
    name: 'userName',
    label: 'Role Name'
  },]

const AppRoles = () => {

  //const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      <FilterButton fields={fieldsConfig}/>
      <RolesTable />
    </div>
  )
}

export default AppRoles