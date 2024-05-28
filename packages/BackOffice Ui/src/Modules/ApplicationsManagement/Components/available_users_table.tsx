import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import Pagination from "@components/Pagination";
import SharedTable from "../../../Components/SharedTable";
import { useGetavailableusersidQuery } from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_endpoints";

import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";
import PrimaryButton from "@components/Button";

import {   useParams } from "react-router-dom";
const userColumns = [
    { header: 'Username', accessor: 'username' },
    { header: 'Email', accessor: 'email' },
    { header: 'Firstname', accessor: 'firstname' },
    { header: 'Lastname', accessor: 'lastname' },
];


interface UserData {
    audience: string;
    email: string; // Assuming devices can be of any type
    id: number;
    keycloakId: string;
    firstName: string;
    name: string;
    lastName: string;

}

export interface TransformedUserData {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    role?: string;
    keycloakId :string
}


const transformDataArray = (dataArray: UserData[]): TransformedUserData[] => {
    return dataArray
        .filter(data => data.id===undefined)
        .map(data => ({
            username: data.name ? data.name : "",
            email: data.email,
            firstname: data.firstName ? data.firstName : "",
            lastname: data.lastName ? data.lastName : "",
            keycloakId: data.keycloakId
        }));
};









const AVUT = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useGetavailableusersidQuery({ appId: Number(id), param: 1 });
    console.log("data = ",data)
    const [, setIsSlideOverOpen] = useState(false);
    //console.log("rolesdata",data)
    const [open, setOpen] = useState(false);
    const [records, setRecords] = useState<TransformedUserData[]>([]);
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
    const link = {
        label: <PrimaryButton text="Add User" onClick={() => setIsSlideOverOpen(true)} />,
        to: 'addUser',
    };

    const roles = transformDataArray(data.content);

    console.log("roles data  = ",roles);
    return (
        <>
            {isLoading || error ? (
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
            ) : (
                <div className=" backdrop-filter backdrop-blur-sm ">
                    <div className="mx-auto max-w-7xl">
                        <div className=" py-3">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h1 className="text-base font-semibold leading-6 text-[--txt]">Keycloak Users</h1>

                                    </div>
                                    </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

                                            <SharedTable columns={userColumns} data={records} link={link} component={true} />
                                            <ConfirmationModal open={open} setOpen={() => setOpen(false)} title={"Delete Role"} desc={"Are you sure you want to delete this role?"} msg={'Role has been Deleted Successfully'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination setRecords={setRecords} array={roles} pages={6} />
                    </div>

            )};
            {
                error ? toast.error(error) : null
            }

        </>
    );
};

export default AVUT;