import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { StickyScroll } from "@components/Sticky-Scroll";
import React, { useRef, useState } from 'react';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { motion } from "framer-motion";
const words = `Application Features Catalogue
`;
const permissions = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Access Dashboard module.',
    subPermissions: [
      { id: 'view-dashboard', label: 'View Dashboard', description: 'Permission to view dashboard.' },
      { id: 'edit-dashboard', label: 'Edit Dashboard', description: 'Permission to edit dashboard.' },
    ],
  },
  {
    id: 'applications-management',
    label: 'Applications Management',
    description: 'Access Applications Management module.',
    subPermissions: [
      { id: 'create-application', label: 'Create Application', description: 'Permission to create applications.' },
      { id: 'edit-application', label: 'Edit Application', description: 'Permission to edit applications.' },
      { id: 'delete-application', label: 'Delete Application', description: 'Permission to delete applications.' },
    ],
  },
  {
    id: 'configuration-management',
    label: 'Configuration Management',
    description: 'Access Configuration Management module.',
    subPermissions: [
      { id: 'manage-configuration', label: 'Manage Configuration', description: 'Permission to manage configurations.' },
    ],
  },
  {
    id: 'message-center',
    label: 'Message Center',
    description: 'Access Message Center module.',
    subPermissions: [
      { id: 'send-message', label: 'Send Message', description: 'Permission to send messages.' },
      { id: 'receive-message', label: 'Receive Message', description: 'Permission to receive messages.' },
    ],
  },
  {
    id: 'users-management',
    label: 'Users Management',
    description: 'Access Users Management module.',
    subPermissions: [
      { id: 'create-user', label: 'Create User', description: 'Permission to create users.' ,  },
      { id: 'edit-user', label: 'Edit User', description: 'Permission to edit users.' },
      { id: 'delete-user', label: 'Delete User', description: 'Permission to delete users.' },
    ],
  },
  {
    id: 'jobs-management',
    label: 'Jobs Management',
    description: 'Access Jobs Management module.',
    subPermissions: [
      { id: 'create-job', label: 'Create Job', description: 'Permission to create jobs.' },
      { id: 'edit-job', label: 'Edit Job', description: 'Permission to edit jobs.' },
      { id: 'delete-job', label: 'Delete Job', description: 'Permission to delete jobs.' },
    ],
  },
  {
    id: 'cache-maintenance',
    label: 'Cache Maintenance',
    description: 'Access Cache Maintenance module.',
    subPermissions: [
      { id: 'clear-cache', label: 'Clear Cache', description: 'Permission to clear cache.' },
    ],
  },
  {
    id: 'lookups-configuration',
    label: 'Lookups Configuration',
    description: 'Access Lookups Configuration module.',
    subPermissions: [
      { id: 'manage-lookups', label: 'Manage Lookups', description: 'Permission to manage lookups.' },
    ],
  },
  {
    id: 'audit',
    label: 'Audit',
    description: 'Access Audit module.',
    subPermissions: [
      { id: 'view-audit-logs', label: 'View Audit Logs', description: 'Permission to view audit logs.' },
    ],
  },
  {
    id: 'forms-management',
    label: 'Forms Management',
    description: 'Access Forms Management module.',
    subPermissions: [
      { id: 'create-form', label: 'Create Form', description: 'Permission to create forms.' },
      { id: 'edit-form', label: 'Edit Form', description: 'Permission to edit forms.' },
      { id: 'delete-form', label: 'Delete Form', description: 'Permission to delete forms.' },
    ],
  },
  {
    id: 'content-management',
    label: 'Content Management',
    description: 'Access Content Management module.',
    subPermissions: [
      { id: 'create-content', label: 'Create Content', description: 'Permission to create content.' },
      { id: 'edit-content', label: 'Edit Content', description: 'Permission to edit content.' },
      { id: 'delete-content', label: 'Delete Content', description: 'Permission to delete content.' },
    ],
  },
  {
    id: 'bpmn-configuration',
    label: 'BPMN Configuration',
    description: 'Access BPMN Configuration module.',
    subPermissions: [
      { id: 'configure-bpmn', label: 'Configure BPMN', description: 'Permission to configure BPMN.' },
    ],
  },
];



// const content = [
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     content: (
//       <div>
//         <div className="relative flex items-start">
//           <div className="flex h-6 items-center">
//             <input
//               id="comments"
//               aria-describedby="comments-description"
//               name="comments"
//               type="checkbox"
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//           </div>
//           <div className="ml-3 text-sm leading-6">
//             <label htmlFor="comments" className="font-medium text-gray-200">
//               Comments
//             </label>
//             <p id="comments-description" className="text-gray-500">
//               Get notified when someone posts a comment on a posting.
//             </p>
//           </div>
//         </div>
//         {/* Nested checkboxes */}
//         <div className="ml-6">
//           <div className="relative flex items-start">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested1"
//                 aria-describedby="nested1-description"
//                 name="nested1"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested1" className="font-medium text-gray-200">
//                 Nested Checkbox 1
//               </label>
//               <p id="nested1-description" className="text-gray-500">
//                 Description for Nested Checkbox 1.
//               </p>
//             </div>
//           </div>
//           <div className="relative flex items-start mt-2">
//             <div className="flex h-6 items-center">
//               <input
//                 id="nested2"
//                 aria-describedby="nested2-description"
//                 name="nested2"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="ml-3 text-sm leading-6">
//               <label htmlFor="nested2" className="font-medium text-gray-200">
//                 Nested Checkbox 2
//               </label>
//               <p id="nested2-description" className="text-gray-500">
//                 Description for Nested Checkbox 2.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
// ];

const AppFeatures = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    checkboxRef.current!.indeterminate = false;
  };

  const handleIndeterminate = () => {
    checkboxRef.current!.indeterminate = true;
  };

  const [openPermissions, setOpenPermissions] = useState<string[]>([]);

  const togglePermission = (permissionId: string) => {
    setOpenPermissions((prevOpenPermissions) => {
      if (prevOpenPermissions.includes(permissionId)) {
        return prevOpenPermissions.filter((id) => id !== permissionId);
      } else {
        return [...prevOpenPermissions, permissionId];
      }
    });
  };
  const halfLength = Math.ceil(permissions.length / 2);
  const firstHalf = permissions.slice(0, halfLength);
  const secondHalf = permissions.slice(halfLength);
  const renderSubPermissions = (subPermissions: any[], parentId: string) => {
    return subPermissions.map((subPermission) => (
      <div key={subPermission.id} className={`ml-6 ${openPermissions.includes(parentId) ? 'block' : 'hidden'}`}>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id={subPermission.id}
              aria-describedby={`${subPermission.id}-description`}
              name={subPermission.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={subPermission.id} className="font-medium text-gray-200">
              {subPermission.label}
            </label>
            <p id={`${subPermission.id}-description`} className="text-gray-500">
              {subPermission.description}
            </p>
          </div>
        </div>
      </div>
    ));
  };


  const renderPermissions = (perms: any[]) => {
    return perms.map((permission, i) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2*i }}
        className="m-5">
        <div key={permission.id} className="relative flex items-start gap-2 ">
        {permission.subPermissions && (
          <div onClick={() => togglePermission(permission.id)}>
            {openPermissions.includes(permission.id) ? (
              <IoChevronUpSharp color="gray" className="duration-200 " />
            ) : (
              <IoChevronDownSharp color="gray" className="duration-200 " />
            )}
          </div>
        )}
          <div className="flex h-6 items-center">
            <input
              id={permission.id}
              aria-describedby={`${permission.id}-description`}
              name={permission.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={permission.id} className="font-medium text-gray-200">
              {permission.label}
            </label>
            <p id={`${permission.id}-description`} className="text-gray-500">
              {permission.description}
            </p>
            {permission.subPermissions && renderSubPermissions(permission.subPermissions, permission.id)}
          </div>
        </div>
      </motion.div>
    ));
  };

  return (
    <>
      <div className="space-y-12 mt-10 mx-10">
        <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} />
        </span></div>
      {/* <div className=""><StickyScroll content={content} /></div> */}


      <div className="space-y-5 mx-24 flex justify-around  ">
        <div className="  ">{renderPermissions(firstHalf)}</div>
        <div className="">{renderPermissions(secondHalf)}</div>
      </div>

      <div className="mt-6 flex justify-center">

        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </>
  )
}

export default AppFeatures;
