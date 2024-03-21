import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../Modules/Dashboard/Dashboard";
import ApplicationsManagement from "../Modules/ApplicationsManagement/ApplicationsManagement";
import ConfigurationManagement from "../Modules/ConfigurationManagement/ConfigurationManagement";
import MessageCenter from "../Modules/MessageCenter/MessageCenter";
import UsersManagement from "../Modules/UsersManagement/UsersManagement";
import JobsManagement from "../Modules/JobsManagement/JobsManagement";
import CacheMaintenance from "../Modules/CacheMaintenance/CacheMaintenance";
import LookupsConfiguration from "../Modules/LookupsConfiguration/LookupsConfiguration";
import Audit from "../Modules/Audit/Audit";
import FormsManagement from "../Modules/FormsManagement/FormsManagement";
import ContentManagement from "../Modules/ContentManagement/ContentManagement";
import BPMNConfiguration from "../Modules/BPMNConfiguration/BPMNConfiguration";
const Routers = () => {
  return (

    <Routes>

      <Route index path="dashboard" element={<Dashboard />} />
      <Route path="applications-management/*" element={<ApplicationsManagement />} />
      <Route path="configuration-management" element={<ConfigurationManagement />} />
      <Route path="message-center" element={<MessageCenter />} />
      <Route path="users-management" element={<UsersManagement />} />
      <Route path="jobs-management" element={<JobsManagement />} />
      <Route path="cache-maintenance" element={<CacheMaintenance />} />
      <Route path="lookups-configuration" element={<LookupsConfiguration />} />
      <Route path="audit" element={<Audit />} />
      <Route path="forms-management" element={<FormsManagement />} />
      <Route path="content-management" element={<ContentManagement />} />
      <Route path="bpmn-configuration" element={<BPMNConfiguration />} />

    </Routes>

  )
}

export default Routers