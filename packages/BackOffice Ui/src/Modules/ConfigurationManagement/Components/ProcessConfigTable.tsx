import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import ProcessTable from "./process_table";
const Process = [
    { module: "authentication", feature: ["biometric", "login process", "biometric_enroll"], application: "Customer" },
    { module: "authentication", feature: ["password", "reset password"], application: "Administration" },
    { module: "authorization", feature: ["role-based access control", "permissions"], application: "Customer" },
    { module: "authorization", feature: ["role management", "user management"], application: "Administration" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "secureeeeeity", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "saaaaaecurity", feature: ["encryption", "secure communication"], application: "Customer" },
    { module: "settttcurity", feature: ["encryption", "secure communication"], application: "Customer" },
    // Add more entries as needed
];


const ProcessConfigTable = () => {
    const [records, setRecords] = useState(Process)
    console.log("RECORDS", records)
    return (
        <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
            {/* TABLE ITERATION LOGIC */}
            <ProcessTable records={records} />
            <Pagination pages={6} setRecords={setRecords} array={Process} />
        </div >
    )
}

export default ProcessConfigTable