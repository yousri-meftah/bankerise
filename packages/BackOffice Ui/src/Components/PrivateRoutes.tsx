import { Route, Routes } from "react-router-dom"
import Dashboard from "../Modules/Dashboard/Dashboard";
import ApplicationsManagement from "../Modules/ApplicationsManagement/ApplicationsManagement";
import MessageCenter from "../Modules/MessageCenter/MessageCenter";
import UsersManagement from "../Modules/UsersManagement/UsersManagement";
import JobsManagement from "../Modules/JobsManagement/JobsManagement";
import CacheMaintenance from "../Modules/CacheMaintenance/CacheMaintenance";
import LookupsConfiguration from "../Modules/LookupsConfiguration/LookupsConfiguration";
import Audit from "../Modules/Audit/Audit";
import FormsManagement from "../Modules/FormsManagement/FormsManagement";
import ContentManagement from "../Modules/ContentManagement/ContentManagement";
import BPMNConfiguration from "../Modules/BPMNConfiguration/BPMNConfiguration";
import Dictionary from "../Modules/ConfigurationManagement/Views/Dictionary";
import ProcessConfig from "../Modules/ConfigurationManagement/Views/ProcessConfig";
import GlobalParameters from "../Modules/ConfigurationManagement/Views/GlobalParameters";
import ChannelsManagement from "../Modules/ConfigurationManagement/Views/ChannelsManagement";
import AllProducts from "../Modules/page_test/page_test";
const Routers = () => {
  return (

    <Routes>

      <Route index path="dashboard" element={<Dashboard />} />
      <Route path="applications-management/*" element={<ApplicationsManagement />} />
      <Route path="configuration-management/dictionary-management/*" element={<Dictionary />} />
      <Route path="configuration-management/process-config/*" element={<ProcessConfig />} />
      <Route path="configuration-management/global-parameters/*" element={<GlobalParameters />} />
      <Route path="configuration-management/channels-management/*" element={<ChannelsManagement />} />
      <Route path="message-center" element={<MessageCenter />} />
      <Route path="users-management" element={<UsersManagement />} />
      <Route path="jobs-management" element={<JobsManagement />} />
      <Route path="cache-maintenance" element={<CacheMaintenance />} />
      <Route path="lookups-configuration" element={<LookupsConfiguration />} />
      <Route path="audit" element={<Audit />} />
      <Route path="forms-management" element={<FormsManagement />} />
      <Route path="content-management" element={<ContentManagement />} />
      <Route path="bpmn-configuration" element={<BPMNConfiguration />} />
      <Route path="test" element={<AllProducts />} />

    </Routes>

  )
}

export default Routers