import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const segments = [
    {
        type: "master_segment",
        name: "Master 1",
        description: "Description of Master 1",
        actions: ["Configure", "Delete"],
        subSegments: [
            {
                type: "segment",
                name: "Subsegment 1",
                description: "Description of Subsegment 1",
                actions: ["Configure", "Delete"]
            },
            {
                type: "segment",
                name: "Subsegment 2",
                description: "Description of Subsegment 2",
                actions: ["Delete"],
                subSegments: [
                    {
                        type: "sub_segment",
                        name: "Sub Segment",
                        description: "Description of Subsegment 3",
                        actions: ["Delete"]
                    }
                ]
            }
        ]
    },
    {
        type: "segment",
        name: "Test",
        description: "Description of Test",
        actions: ["Delete",],
        subSegments: [
            {
                type: "segment",
                name: "Subsegment 3",
                description: "Description of Subsegment 3",
                actions: ["Delete", "Configure"]
            }
        ]
    }
];




const SegmentsTable = () => {
    const [records, setRecords] = useState(segments)
    
    return (
        
        <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10 ">
            
            {/* TABLE ITERATION LOGIC */}
            <table className="mt-6 w-full whitespace-nowrap text-left">
                <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                    <tr>
                        <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                            Name
                        </th>
                        <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                            Description
                        </th>
                        <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[--border-Devide]">
                    {records.map((item, i) => (
                        <>
                            <motion.tr
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.3 * i }}
                                key={item.name}>
                                <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                    <div className="flex items-center gap-x-4">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Master Segement
                                        </span>
                                        <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.name}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.description}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        {item.actions.includes("Configure") && (
                                            <Link to={"params"}>
                                            <button
                                                type="button"
                                                className="rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300"

                                            >
                                                <IoIosSettings size={19} color="white" />
                                            </button>
                                            </Link>
                                            
                                        )}
                                        {item.actions.includes("Delete") && (
                                            <button
                                                type="button"
                                                className="rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300"
                                            >
                                                <HiOutlineTrash size={19} color="white" o />
                                            </button>
                                        )}

                                    </div>
                                </td>

                            </motion.tr>
                            {item.subSegments ?
                                item.subSegments.map(subItem => {
                                    return (
                                        <>
                                            <motion.tr
                                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{ duration: 0.3 * i }}
                                                key={subItem.name}>
                                                <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                                    <div className="flex items-center gap-x-4 ml-5">
                                                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                                            Segment
                                                        </span>
                                                        <div className="truncate text-sm font-medium leading-6 text-[--txt]">{subItem.name}</div>
                                                    </div>
                                                </td>
                                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                                    <div className="flex gap-x-3">
                                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{subItem.description}</div>
                                                    </div>
                                                </td>
                                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                                    <div className="flex gap-x-3">
                                                        {subItem.actions.includes("Configure") && (
                                                            <Link to={"params"}>
                                                            <button
                                                                type="button"
                                                                className="rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300"
                
                                                            >
                                                                <IoIosSettings size={19} color="white" />
                                                            </button>
                                                            </Link>
                                                        )}
                                                        {subItem.actions.includes("Delete") && (
                                                            <button
                                                                type="button"
                                                                className="rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300"
                                                            >
                                                                <HiOutlineTrash size={19} color="white" o />
                                                            </button>
                                                        )}

                                                    </div>
                                                </td>

                                            </motion.tr>

                                            {subItem.subSegments ?
                                                subItem.subSegments.map(subItem2 => {
                                                    return (
                                                        <motion.tr
                                                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            transition={{ duration: 0.3 * i }}
                                                            key={subItem2.name}>
                                                            <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                                                <div className="flex items-center gap-x-4 ml-9">
                                                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                                        Sub Segement
                                                                    </span>
                                                                    <div className="truncate text-sm font-medium leading-6 text-[--txt]">{subItem2.name}</div>
                                                                </div>
                                                            </td>
                                                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                                                <div className="flex gap-x-3">
                                                                    <div className="font-mono text-sm leading-6 text-[--textSeconday]">{subItem2.description}</div>
                                                                </div>
                                                            </td>
                                                            <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                                                <div className="flex gap-x-3">
                                                                    {subItem2.actions.includes("Configure") && (
                                                                        <Link to={"params"}>
                                                                        <button
                                                                            type="button"
                                                                            className="rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300"
                                                                        >
                                                                            <IoIosSettings size={19} color="white" />
                                                                        </button>
                                                                        </Link>
                                                                    )}
                                                                    {subItem2.actions.includes("Delete") && (
                                                                        <button
                                                                            type="button"
                                                                            className="rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300"
                                                                        >
                                                                            <HiOutlineTrash size={19} color="white"  />
                                                                        </button>
                                                                    )}

                                                                </div>
                                                            </td>

                                                        </motion.tr>
                                                    )
                                                }) : null
                                            }
                                        </>

                                    )
                                }) : null

                            }

                        </>
                    ))}
                </tbody>
            </table>
            <Pagination pages={6} setRecords={setRecords} array={segments} />
        </div >
    )
}

export default SegmentsTable