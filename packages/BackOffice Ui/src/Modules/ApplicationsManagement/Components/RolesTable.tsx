import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmationModal from "./ConfirmationModal";
const originalRoles = [
    { name: 'Admin' },
    { name: 'User' },
    { name: 'Client' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    { name: 'SUPER Admin' },
    // More Roles...
]

const RolesTable = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [records,setRecords] = useState([])
    const [open, setOpen] = useState(false);

    const pageSize = 5; // Number of records per page
    const totalRecords = originalRoles.length;
    const totalPages = Math.ceil(totalRecords / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalRecords);
    debugger;



    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

 useEffect(() => {   
    setRecords(originalRoles.slice(startIndex, endIndex));
  }, [originalRoles, currentPage, pageSize, startIndex, endIndex]);

    return (
        <div className=" backdrop-filter backdrop-blur-lg ">
            <div className="mx-auto max-w-7xl">
                <div className=" py-3">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-white">Roles</h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    A list of all the roles in your Application and their corresponding actions.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-2">
                                <button
                                    type="button"
                                    className=" rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-200 flex items-center gap-1"
                                >
                                    <FaPlus />
                                    Add Role
                                </button>
                                <button
                                    type="button"
                                    className=" rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 duration-200 flex items-center gap-1"
                                >
                                    <BsDiagram3Fill />
                                    Composed Permissions
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                    Role Name
                                                </th>

                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {records.map((person, i) => (
                                                <motion.tr
                                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ duration: 0.3 * i }}
                                                    key={person.name}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                                                        {person.name}
                                                    </td>

                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex justify-end items-center gap-2">
                                                         <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                                            Edit<span className="sr-only">, {person.name}</span>
                                                        </a>
                                                        <button
                                                            type="button"
                                                            className="rounded bg-red-600/20 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/10"
                                                        >
                                                            <HiOutlineTrash size={19} onClick={() => setOpen(true)}/>
                                                        </button>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {open && <ConfirmationModal onClose={() => setOpen(false)} title={"Delete Role"} desc={"Are you sure you want to delete this role?"}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 p-24 sticky bottom-0 mt-24">
                <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <button
                            type="button"
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-gray-400 disabled:text-gray-500/60"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Previous
                        </button>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                            <a
                                href="#"
                                key={n}
                                className={`${currentPage === n
                                    ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                                    : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-400'
                                    }`}
                                onClick={() => setCurrentPage(n)}
                            >
                                {n}
                            </a>
                        ))}
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-gray-400 disabled:text-gray-500/60"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default RolesTable;