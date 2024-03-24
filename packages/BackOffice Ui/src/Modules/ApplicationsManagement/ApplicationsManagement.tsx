import { Route, Routes } from "react-router-dom"
import Applications from "./Views/Applications"
import ApplicationEdit from "./Components/ApplicationEdit"

const ApplicationsManagement = () => {

  return (
    <>
    <Routes>
      <Route index element={<Applications />}/>
      <Route path="edit/*" element={<ApplicationEdit/>}></Route>
      
    </Routes>
    
    </>
  )
}

export default ApplicationsManagement