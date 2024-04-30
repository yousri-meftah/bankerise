import Pagination from "@components/Pagination";
import { useState } from "react";
import SharedTable from "../../../Components/SharedTable"

const Process = [
    { module: "authentication", feature: ["biometric", "login process", "biometric_enroll"], application: "Customer" },
    { module: "authentication", feature: ["password", "reset password"], application: "Administration" },
    { module: "authorization", feature: ["role-based access control", "permissions"], application: "Customer" },
    { module: "authorization", feature: ["role management", "user management"], application: "Administration" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    // Add more entries as needed
];
const userColumns = [
  { header: 'Module', accessor: 'module' },
  { header: 'Feature', accessor: 'feature' },
  { header: 'Application', accessor: 'application' },
];


const ProcessConfigTable = () => {
    const [records, setRecords] = useState(Process)
    return (
        <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
            <SharedTable data={records} columns={userColumns} />
            <Pagination pages={6} setRecords={setRecords} array={Process} />
        </div >
    )
}

export default ProcessConfigTable