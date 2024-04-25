import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
const Process = [
    { module: "authentication", feature: ["biometric", "login process", "biometric_enroll"], application: "Customer" },
    { module: "authentication", feature: ["password", "reset password"], application: "Administration" },
    { module: "authorization", feature: ["role-based access control", "permissions"], application: "Customer" },
    { module: "authorization", feature: ["role management", "user management"], application: "Administration" },
    { module: "security", feature: ["encryption", "secure communication"], application: "Customer" },
    // Add more entries as needed
];


const ProcessConfigTable = () => {
    const [records, setRecords] = useState(Process)
    return (
        <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
            {/* TABLE ITERATION LOGIC */}
            <table className="mt-6 w-full whitespace-nowrap text-left">
                <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                    <tr>
                        <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                            Module
                        </th>
                        <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                            Feature
                        </th>
                        <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                            Application
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[--border-Devide]">
                    {records.map((item, i) => (
                        <motion.tr
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.3 * i }}
                            key={item.module}>
                            <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                <div className="flex items-center gap-x-4">
                                    <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.module}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex-col items-center justify-center  gap-x-4">
                                    {item.feature.map((feature, index) => (
                                        <div key={index} className=" text-sm text-[--textSeconday] leading-6 py-1">
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className="flex gap-x-3">
                                    <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.application}</div>
                                </div>
                            </td>
                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                <div className=" hover:scale-105 duration-200">
                                <MdEdit color="white" size={20} className="hover:cursor-pointer"/>
                                </div>
                            </td>

                        </motion.tr>
                    ))}
                </tbody>
            </table>
            <Pagination pages={6} setRecords={setRecords} array={Process} />
        </div >
    )
}

export default ProcessConfigTable