import { motion } from "framer-motion"
import { IoLockOpen } from "react-icons/io5";
import { useState } from "react";
import ConfirmationForDisableModal from "./ConfirmationForDisableModal";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmationModal from "./ConfirmationModal";
import PrimaryButton from "@components/Button";
import { Link, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import Pagination from "@components/Pagination";
import { Users } from '@utils/constants'
const statuses = { Active: 'text-green-400 bg-green-400/10', Inactive: 'text-rose-400 bg-rose-400/10' }


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function UsersTable() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [records, setRecords] = useState<{ name: string; }[]>([]);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [IsDeletionopen, setIsDeletionOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpenConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
      {/* CONFIRMATION MODAL FOR DELETION OF USER */}
      <ConfirmationModal open={IsDeletionopen} setOpen={() => setIsDeletionOpen(false)} msg={"User has been Deleted Successfully"} title={"Delete User"} desc={"Are you sure you want to delete this User?"} />
      {/* CONFIRMATION MODAL FOR DISABLING A USER */}
      <ConfirmationForDisableModal open={isConfirmationModalOpen} onClose={handleCloseConfirmationModal} msg={"User has been Disabled Successfully"} />
      <div className="flex justify-between">
        <h2 className="px-4 text-base font-semibold leading-7 text-[--txt] sm:px-6 lg:px-8" >Users</h2>
        <div className="flex gap-4 mr-4" >
          <Link to={"addUser/"}>
            <PrimaryButton text="Add User" onClick={() => setIsSlideOverOpen(true)} /></Link>
          <button
            type="button"
            className=" rounded-md bg-[--disableButton] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-1"
          >
            Export
          </button>
        </div>

        {/* SLIDE OVER FOR ADDING USER */}
        <AddUser open={isSlideOverOpen} setOpen={() => {
          setIsSlideOverOpen(false)
          navigate("/private/applications-management/edit/users")
        }
        } />
      </div>


      {/* TABLE ITERATION LOGIC */}
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
              UserName
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
              Email
            </th>
            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
              First Name
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
              Last Name
            </th>
            <th scope="col" className="hidden  font-semibold pr-4 sm:pr-6 sm:table-cell  lg:pr-8">
              Status
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-4  font-semibold sm:table-cell sm:pr-6 lg:pr-8">
              Role
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-4  font-semibold sm:table-cell sm:pr-6 lg:pr-8">
              Creation Date
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[--border-Devide]">
          {records.map((item, i) => (
            <motion.tr
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.1 * i }}
              key={item.Email}>
              <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.UserName}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.Email}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.FirstName}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.LastName}</div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div className={classNames(statuses[item.Status], 'flex-none rounded-full p-1')}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-[--txt] sm:block">{item.Status}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-[--textSeconday] md:table-cell lg:pr-20">
                {item.Role}
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.CreationDate}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-6 pr-4 sm:table-cell sm:pr-8 ">
                <div className="flex gap-x-3">
                  <Link to={"userDetails"} className="text-[--indigoText] hover:text-indigo-300">
                    Details
                  </Link>


                  {/* DISABLE USER BUTTON */}
                  <button
                    type="button"
                    className="rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300"
                    onClick={handleOpenConfirmationModal}
                  >
                    <IoLockOpen size={19} color="white" />
                  </button>


                  {/* DELETE USER BUTTON */}
                  <button
                    type="button"
                    className="rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300"
                  >
                    <HiOutlineTrash size={19} color="white" onClick={() => setIsDeletionOpen(true)} />
                  </button>


                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <Pagination setRecords={setRecords} array={Users} pages={9} />
    </div >
  )
}
