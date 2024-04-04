import { motion } from "framer-motion"
import { useState } from "react";
import { BsDiagram3Fill } from "react-icons/bs";
import { HiOutlineDocumentDuplicate, HiOutlineTrash } from "react-icons/hi";
import ConfirmationModal from "./ConfirmationModal";
import PrimaryButton from "@components/Button";
import Pagination from "@components/Pagination";
import {originalRoles} from '@utils/constants'
import { Link } from "react-router-dom";


const RolesTable = () => {

   
    const [open, setOpen] = useState(false);
    const [records, setRecords] = useState<{ name: string; }[]>([]);

    return (
        <div className=" backdrop-filter backdrop-blur-sm ">
            <div className="mx-auto max-w-7xl">
                <div className=" py-3">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-[--txt]">Roles</h1>
                                <p className="mt-2 text-sm text-[--textSeconday]">
                                    A list of all the roles in your Application and their corresponding actions.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 flex gap-2">
                                <PrimaryButton text="Add Role " />
                                <button
                                    type="button"
                                    className=" rounded-md bg-[--disableButton] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-1"
                                >
                                    <BsDiagram3Fill />
                                    Composed Permissions
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-[--border-color]">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                    Role Name
                                                </th>

                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[--border-Devide]">
                                            {records.map((person, i) => (
                                                <motion.tr
                                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ duration: 0.3 * i }}
                                                    key={person.name}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[--textSeconday]">
                                                        {person.name}
                                                    </td>

                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex justify-end items-center gap-2">
                                                        <Link to="editRole/" className="text-[--indigoText] hover:text-indigo-300 duration-200">
                                                            Edit<span className="sr-only">, {person.name}</span>
                                                        </Link>
                                                        <HiOutlineDocumentDuplicate size={21} className="text-[--txt] hover:scale-105 duration-300 hover:cursor-pointer"/>
                                                        <button
                                                            type="button"
                                                            className="rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300"
                                                            
                                                        >
                                                            <HiOutlineTrash size={19} color="white" onClick={() => setOpen(true)} />
                                                        </button>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>


                                    {/* ROLE DELETION MODAL */}
                                    <ConfirmationModal open={open} setOpen={() => setOpen(false)} title={"Delete Role"} desc={"Are you sure you want to delete this role?"} msg={'Role has been Deleted Successfully'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination setRecords={setRecords} array={originalRoles} pages={6}/>
        </div>
    );
};

export default RolesTable;