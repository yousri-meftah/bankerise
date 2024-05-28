import { IoLockOpen } from "react-icons/io5";
import { useEffect, useState } from "react";
import ConfirmationForDisableModal from "./ConfirmationForDisableModal";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmationModal from "./ConfirmationModal";
import PrimaryButton from "@components/Button";
import { Link, useParams } from "react-router-dom";
import Pagination from "@components/Pagination";
//import { Users } from '@utils/constants'
import SharedTable from "../../../Components/SharedTable";
import { FaEye } from "react-icons/fa";
import { useGetuserbyapplicationidQuery } from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_endpoints";
import { user_response } from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_schema";
import FilterButton from "@components/FilterButton";
import { useContext } from "react";
import { Context } from "../utils/context";
import ExportButton from "@components/ExportButton";
import { Puff } from "react-loader-spinner";

const fieldsConfigCotumer = [
  {
    type: 'text',
    name: 'userName',
    label: 'User Name'
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email'
  },
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'date',
    name: 'from',
    label: 'From'
  },
  {
    type: 'date',
    name: 'to',
    label: 'To'
  }
];


const fieldsConfig = [
  {
    type: 'text',
    name: 'userName',
    label: 'User Name'
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email'
  },
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'select',
    name: 'status',
    label: 'Status',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' }
    ]
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
      { value: 'guest', label: 'Guest' }
    ]
  },
  {
    type: 'date',
    name: 'from',
    label: 'From'
  },
  {
    type: 'date',
    name: 'to',
    label: 'To'
  }
];

const getFilteredParams = (filters: { [key: string]: string }) => {
  const filteredParams: { [key: string]: string | boolean } = {};

  Object.keys(filters).forEach((key) => {
    if (filters[key] !== '') {
      // Convert status to boolean for the 'active' field
      if (key === 'status') {
        filteredParams['active'] = filters[key] === 'active';
      } else {
        filteredParams[key] = filters[key];
      }
    }
  });

  return filteredParams;
};




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
  id: number;
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
    id: item.id,
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
  const { id } = useParams<{ id: string }>();
  const [, setFilterState] = useState<{ [key: string]: string }>({});
  const [queryParams, setQueryParams] = useState<{ appId: number; params: { [key: string]: string | boolean } }>({
    appId: Number(id),
    params: { pageable: "1" },
  });
  const [renderData, setRenderData] = useState<User[]>([]);

  const { data, error, isLoading } = useGetuserbyapplicationidQuery(queryParams);

  const handleFilter = (filterState: { [key: string]: string }) => {
    setFilterState(filterState);
    setQueryParams({
      appId: Number(id),
      params: {
        pageable: "1",
        ...getFilteredParams(filterState),
      },
    });
  };

  useEffect(() => {
    if (data) {
      setRenderData(formatUserResponse(data as user_response));
    }
  }, [data]);


    const tabContext = useContext(Context);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [, setRecords] = useState<{ name: string }[]>([]);
    const [IsDeletionopen, setIsDeletionOpen] = useState(false);

    const handleOpenConfirmationModal = () => {
        setIsConfirmationModalOpen(true);
    };

    const handleCloseConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
    };

    if (isLoading) {
        return (
            <div className="m-auto flex justify-center pt-[150px]">
                <Puff
                    visible={true}
                    height="80"
                    width="80"
                    color="#9aa1ad"
                    ariaLabel="puff-loading"
                    wrapperClass=""
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="m-auto flex justify-center pt-[150px]">
                <Puff
                    visible={true}
                    height="80"
                    width="80"
                    color="#9aa1ad"
                    ariaLabel="puff-loading"
                    wrapperClass=""
                />
            </div>
        );
    }

    //const Users = formatUserResponse(data as user_response);
    const actions = [
        {
            label: 'Lock',
            onClick: handleOpenConfirmationModal,
            icon: <IoLockOpen size={19} color="white" />,
            className: 'rounded bg-[--disableButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[--disableHover] duration-300',
        },
        {
            label: 'Delete',
            onClick: () => setIsDeletionOpen(true),
            icon: <HiOutlineTrash size={19} color="white" />,
            className: 'rounded bg-[--deleteButton] px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/50 duration-300',
        },
    ];
    const link = {
        label: <FaEye size={19} />,
        to: 'userDetails',
    };

  return (
    <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
      {/* CONFIRMATION MODAL FOR DELETION OF USER */}
      <ConfirmationModal open={IsDeletionopen} setOpen={() => setIsDeletionOpen(false)} msg={"User has been Deleted Successfully"} title={"Delete User"} desc={"Are you sure you want to delete this User?"} />
      {/* CONFIRMATION MODAL FOR DISABLING A USER */}
      <ConfirmationForDisableModal open={isConfirmationModalOpen} onClose={handleCloseConfirmationModal} msg={"User has been Disabled Successfully"} title ="" />
      <FilterButton fields={tabContext.selectedTabId?fieldsConfigCotumer:fieldsConfig} onFilter={handleFilter}/>
      <div className="flex justify-between">
        <h2 className="px-4 text-base font-semibold leading-7 text-[--txt] sm:px-6 lg:px-8" >Users</h2>
        <div className="flex gap-4 mr-4" >

          <Link to={"available-users/"}>
            <PrimaryButton text="Add User" /></Link>
                    <ExportButton/>


        </div>


        {/* SLIDE OVER FOR ADDING USER */}

      </div>
      <SharedTable columns={userColumns} data={renderData} actions={actions} link = {link} />
      <Pagination setRecords={setRecords} array={renderData} pages={9} />
    </div >
  )
}
