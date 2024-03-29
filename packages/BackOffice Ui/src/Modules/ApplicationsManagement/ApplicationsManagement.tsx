import { Route, Routes } from "react-router-dom"
import Applications from "./Views/Applications"
import ApplicationEdit from "./Components/ApplicationEdit"
import Breadcrumb from "@components/Breadcrumb"

const ApplicationsManagement = () => {

  return (
    <>
    <Breadcrumb/>
    <Routes>
      <Route index element={<Applications />}/>
      <Route path="edit/*" element={<ApplicationEdit/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default ApplicationsManagement