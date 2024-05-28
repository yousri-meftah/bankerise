import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import PrimaryButton from '@components/Button';
import { toast } from 'react-toastify';
import { TransformedUserData } from './available_users_table';
import { useGetAllRolesQuery } from '../../../store/admin-API/roles-controller/roles-controller_endpoints';
import { useAddUserMutation } from '../../../store/admin-API/user-app-management-controller/user_app_management_controller_endpoints';
import { Role } from '../../../store/admin-API/user-app-management-controller/user_app_management_controller_schema';
import { Puff } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

interface AddUserProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: TransformedUserData[];
}

const dummy = [{
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  keycloak: "",
}];

const mapRolesByName = (rolesData: Role[]): Record<string, Role> => {
  return rolesData.reduce((acc, role) => {
    acc[role.name] = role;
    return acc;
  }, {} as Record<string, Role>);
};

const transformroles = (dataArray: Role[]): string[] => {
  return dataArray.map(data => data.name || "");
};

const AddUser: React.FC<AddUserProps> = ({ open, setOpen, content }) => {
  const { id, index } = useParams();

  const indexstring = index !== undefined ? Number(index) : 0;
  const validIndex = isNaN(indexstring) ? 0 : indexstring;

  const { data: dataroles, error: roleserror, isLoading: rolesloading } = useGetAllRolesQuery(id);
  const [addUser] = useAddUserMutation();

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    keycloak: '',
  });

  useEffect(() => {
    if (open) {
      setFormData({
        username: content[validIndex]?.username || '',
        firstname: content[validIndex]?.firstname || '',
        lastname: content[validIndex]?.lastname || '',
        email: content[validIndex]?.email || '',
        role: content[validIndex]?.role || '',
        keycloak: content[validIndex]?.keycloakId || '',
      });
    } else {
      setFormData(dummy[0]);
    }
  }, [open, content, validIndex]);

  if (rolesloading || roleserror ) {
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

  const rolesmap = mapRolesByName(dataroles.content);
  const rolesdata = transformroles(dataroles?.content || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.role === "") {
      toast.error('Choose a role !!');
      return;
    }
    const selectedRole = rolesmap[formData.role];
    const userPayload = {
      id: null,
      user: {
        id: null,
        name: formData.username,
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        phoneNumber: "",
        audience: "ADMINISTRATION",
        keycloakId: formData.keycloak,
        createdDate: null,
        gender: null,
        country: null,
        city: null,
        address: null,
        homePhone: null,
        identityNumber: null,
        passportNumber: null,
        identityCarteExpiryDate: null,
        passportExpiryDate: null,
        attributes: null,
      },
      devices: [],
      role: selectedRole || {},
      active: true,
      preferredLanguage: null,
      segmentAssignmentLevel: null,
      segmentAssignmentId: null,
      segmentId: null,
      blockingReason: null,
      attributes: null,
    };
    try {
      await addUser({ appId: Number(id), data: userPayload }).unwrap();
      toast.success('User Successfully Created');
      setOpen(false);
    } catch {
      toast.error('There was an error');
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="leading-6 text-lg font-bold bg-gradient-to-r from-[#08203e] to-[#557c93] bg-clip-text text-transparent border-b border-black">
                          Add User
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
                          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                          <div className="relative">
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                Username
                              </label>
                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  value={formData.username}
                                  onChange={handleChange}
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                First name
                              </label>
                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                <input
                                  type="text"
                                  name="firstname"
                                  id="firstname"
                                  value={formData.firstname}
                                  onChange={handleChange}
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                Last name
                              </label>
                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                <input
                                  type="text"
                                  name="lastname"
                                  id="lastname"
                                  value={formData.lastname}
                                  onChange={handleChange}
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                Email address
                              </label>
                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                <input
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  type="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                Role
                              </label>
                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                <select
                                  id="role"
                                  name="role"
                                  value={formData.role}
                                  onChange={handleChange}
                                  autoComplete="Role-name"
                                  className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option value="">Select a role</option>
                                  {rolesdata.map((roleName, index) => (
                                    <option key={index} value={roleName}>{roleName}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='flex justify-center mt-20'>
                              <PrimaryButton text="Save" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddUser;
