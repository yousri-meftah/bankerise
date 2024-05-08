import { IoLockOpen } from "react-icons/io5";
import { useState } from "react";
import ConfirmationForDisableModal from "./ConfirmationForDisableModal";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmationModal from "./ConfirmationModal";
import PrimaryButton from "@components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddUser from "./AddUser";
import Pagination from "@components/Pagination";
//import { Users } from '@utils/constants'
import SharedTable from "../../../Components/SharedTable";
import { FaEye } from "react-icons/fa";
import { useGetuserbyapplicationidQuery } from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_endpoints";
import { user_response } from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_schema";

const userColumns = [
    { header: 'UserName', accessor: 'UserName' },
    { header: 'Email', accessor: 'Email' },
    { header: 'First Name', accessor: 'FirstName' },
    { header: 'Last Name', accessor: 'LastName' },
    { header: 'Status', accessor: 'Status' },
    { header: 'Role', accessor: 'Role' },
    { header: 'Creation Date', accessor: 'CreationDate' }
];
interface User {
  UserName: string;
  Email: string;
  FirstName: string;
  LastName: string;
  Status: string;
  Role: string;
  CreationDate: string;
}

function formatUserResponse(response: user_response): User[] {
  return response.content.map((item) => ({
    UserName: item.user.name,
    Email: item.user.email,
    FirstName: item.user.firstName,
    LastName: item.user.lastName,
    Status: item.active ? 'Active' : 'Inactive',
    Role: item.role.name,
    CreationDate: new Date(item.user.createdDate).toISOString(),
  }));
}

export default function UsersTable() {
  const { id } = useParams();
  //console.log("idd = ", id)
  const { data, error, isLoading} = useGetuserbyapplicationidQuery({
    appId: Number(id),
    params: { pageable: "1" }
  });


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
  if (isLoading) {
    console.log('Loading user data...');
    return null; // You can return a loading indicator or null here
  }

  if (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
  const Users = formatUserResponse(data as user_response)
  console.log("daa = ", Users)

  const actions = [
  {
    label: 'Lock',
    onClick: handleOpenConfirmationModal,
    icon: <IoLockOpen size={19} color="white" />,
    className: 'rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300'
  },
  {
    label: 'Delete',
    onClick: () => setIsDeletionOpen(true),
    icon: <HiOutlineTrash size={19} color="white" />,
    className: 'rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300'
  }
  ];
  const link = {
    label: <FaEye size={19} />,
    to: "userDetails"
  }
  return (
    <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
      {/* CONFIRMATION MODAL FOR DELETION OF USER */}
      <ConfirmationModal open={IsDeletionopen} setOpen={() => setIsDeletionOpen(false)} msg={"User has been Deleted Successfully"} title={"Delete User"} desc={"Are you sure you want to delete this User?"} />
      {/* CONFIRMATION MODAL FOR DISABLING A USER */}
      <ConfirmationForDisableModal open={isConfirmationModalOpen} onClose={handleCloseConfirmationModal} msg={"User has been Disabled Successfully"} title ="" />
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
      <SharedTable columns={userColumns} data={records} actions={actions} link = {link} />
      <Pagination setRecords={setRecords} array={Users} pages={9} />
    </div >
  )
}
