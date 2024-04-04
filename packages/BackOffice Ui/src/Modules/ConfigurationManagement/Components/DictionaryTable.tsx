import { motion } from "framer-motion"
import { IoLockOpen } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "@components/Pagination";
import { useState } from "react";
const Dictionary = [
    { code: 3, content: "EN: Could not persist this data, please check your request", category: "Exceptions" },
    { code: 4, content: "EN: Requested data not found", category: "Exceptions" },
    { code: 5, content: "EN: Invalid input data, please check your request", category: "Validation" },
    { code: 6, content: "EN: Internal server error, please try again later", category: "Exceptions" },
    { code: 7, content: "EN: Unauthorized access, please log in", category: "Security" },
    // Add more entries as needed
];


export default function DictionaryTable() {
    const [records, setRecords] = useState(Dictionary)

    return (
        <>
            <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
                {/* TABLE ITERATION LOGIC */}
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                        <tr>
                            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                                Code
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                Content
                            </th>
                            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[--border-Devide]">
                        {records.map((item, i) => (
                            <motion.tr
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.3 * i }}
                                key={item.code}>
                                <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                    <div className="flex items-center gap-x-4">
                                        <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.code}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.content}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.category}</div>
                                    </div>
                                </td>

                                <td className="hidden py-4 pl-6 pr-4 sm:table-cell sm:pr-8 ">
                                    <div className="flex gap-x-3">
                                        <Link to={"userDetails"} className="text-[--indigoText] hover:text-indigo-300">
                                            <FaEye size={19} />
                                        </Link>

                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <Pagination pages={6} setRecords={setRecords} array={Dictionary} />
            </div >

        </>
    )
}
