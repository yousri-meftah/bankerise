import { Route, Routes } from "react-router-dom"
import Applications from "./Views/Applications"
import ApplicationEdit from "./Components/ApplicationEdit"
import { useState } from "react"
import { Context } from "./utils/context"


const ApplicationsManagement = () => {
  const [selectedTabId, setSelectedTabId] = useState(0);
  return (
    <>
      <Context.Provider  value={{selectedTabId, setSelectedTabId}}>
    <Routes>
      <Route index element={<Applications />}/>
      <Route path="edit/*" element={<ApplicationEdit/>}></Route>
    </Routes>
    </Context.Provider>
    </>
  )
}

export default ApplicationsManagement