import { useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AppInformations from "../Views/AppInformations";
import AppFeatures from "../Views/AppFeatures";
import AppRoles from "../Views/AppRoles";
import AppUsers from "../Views/AppUsers";
import EditRole from "../Views/EditRole";
import UserDetails from "../Views/UserDetails";
import AppSegments from "../Views/AppSegments";
import { Context } from "../utils/context";
import AppMobileVersions from "../Views/AppMobileVersions";
import ConfigureSegmentsTable from "./ConfigureSegmentsTable";


const tabs = [
    { name: 'Application Information', id: 1, path: '' },
    { name: 'Application Features Catalogue', id: 2, path: 'features' },
    { name: 'Roles', id: 3, path: 'roles' },
    { name: 'Segments', id: 4, path: 'segments' },
    { name: 'Users', id: 5, path: 'users' },
    { name: 'Mobile Versions', id: 6, path: 'mobile-versions' },

];


const ApplicationEdit = () => {

    const [selectedTabId, setSelectedTabId] = useState(1);
    const tabContext = useContext(Context)

    return (
        <>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select a tab</label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={(e) => setSelectedTabId(parseInt(e.target.value))}
                    value={selectedTabId}
                >
                    {tabs.map((tab) => (
                        <option key={tab.id} value={tab.id}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block mx-10">
                <div className="border-b border-[--textPrimary]">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        {tabs
                            .filter((tab) => !((tabContext.selectedTabId === 0 && tab.name === "Segments") || (tabContext.selectedTabId === 0 && tab.name === "Mobile Versions")))
                            .map((tab) => (
                                <Link
                                    key={tab.id}
                                    to={tab.path}
                                    onClick={() => setSelectedTabId(tab.id)}
                                    className={`${tab.id === selectedTabId
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-[--txt2] hover:border-gray-300 hover:text-[--textPrimary]'
                                        } w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium`}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                    </nav>
                </div>
            </div>

            <Routes>
                <Route index element={<AppInformations />} />
                <Route path="features/*" element={<AppFeatures />} />
                <Route path="segments/*" element={<AppSegments />} />
                <Route path="segments/params/*" element={<ConfigureSegmentsTable />} />
                <Route path="mobile-versions/*" element={<AppMobileVersions />} />
                <Route path="roles/*" element={<AppRoles />} />
                <Route path="roles/editRole/*" element={<EditRole />} />
                <Route path="users/*" element={<AppUsers />} >
                    <Route path="addUser/*" />
                </Route>
                <Route path="users/userDetails/:userid/*" element={<UserDetails />} />
                <Route path="users/userDetails/*" element={<AppUsers />} />
            </Routes>
        </>
    );
}
export default ApplicationEdit;
