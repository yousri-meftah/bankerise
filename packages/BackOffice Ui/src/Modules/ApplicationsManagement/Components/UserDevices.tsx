
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import PrimaryButton from "@components/Button";
import { toast } from "react-toastify";
import { MdBlock } from "react-icons/md";
import ConfirmationForDisableModal from "./ConfirmationForDisableModal";
import { useState } from "react";
const Devices = [
  { id: 1, model: "iPhone 12 Pro", platform: "iOS", lastConnection: "2024-04-11T12:34:56Z" },
  { id: 2, model: "Samsung Galaxy S21", platform: "Android", lastConnection: "2024-04-11T12:34:56Z" },
  { id: 3, model: "Dell XPS 15", platform: "Windows", lastConnection: "2024-04-11T12:34:56Z" },
  { id: 4, model: "MacBook Pro", platform: "macOS", lastConnection: "2024-04-11T12:34:56Z" },
  { id: 5, model: "Surface Laptop 4", platform: "Windows", lastConnection: "2024-04-11T12:34:56Z" },
];

const UserDevices = () => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const handleOpenConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };
  return (
    <>
      <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10 w-full mx-8">
      <ConfirmationForDisableModal open={isConfirmationModalOpen} onClose={handleCloseConfirmationModal} msg={"Device has been Blocked"} title={"Reason for Blocking this device"} />
        {/* TABLE ITERATION LOGIC */}
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
            <tr>
              <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                Device ID
              </th>
              <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                Model
              </th>
              <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                Platform
              </th>
              <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                Last Connection
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[--border-Devide]">
            {Devices.map((item, i) => (
              <motion.tr
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 * i }}
                key={item.id}>
                <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.id}</div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.model}</div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.platform}</div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.lastConnection}</div>
                  </div>
                </td>

                <td className="hidden py-4 pl-6 pr-4 sm:table-cell sm:pr-8 ">
                  <div className="flex gap-x-3">
                    <div onClick={handleOpenConfirmationModal} className="text-red-500 hover:text-red-700 hover:cursor-pointer">
                    <MdBlock size={20} />
                    </div>

                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="mt-14 flex items-center justify-center gap-x-6">
        <Link to={"/private/applications-management/edit/users"}>
          <button type="button" className="text-sm font-semibold leading-6 text-[--textPrimary]">
            Cancel
          </button>
        </Link>
        <Link to={"/private/applications-management/edit/users"}  >
          <PrimaryButton text={"Save"} onClick={() => toast.success("Successfully Saved.")} />
        </Link>
      </div>
      </div >
    </>
  )
}

export default UserDevices