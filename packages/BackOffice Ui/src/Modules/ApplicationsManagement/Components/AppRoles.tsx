import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import RolesTable from "./RolesTable";
const words = `Application Role Management
`;
const AppRoles = () => {
  return (
    <div className="space-y-12 mt-10 ">
        <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
        <RolesTable/>
        </div>
  )
}

export default AppRoles