import { logo, logoxs } from '../../public/Images/index'
import { en_flag,fr_flag } from '../../public/Images/index'
import { MdOutlineDashboard } from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { MdOutlineCached } from "react-icons/md";
import { TbSettingsSearch } from "react-icons/tb";
import { AiOutlineAudit } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { BiSolidBookContent } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
export const Modules = [
    { name: "Dashboard", link: "dashboard", icon: MdOutlineDashboard },
    { name: "Applications Management", link: "applications-management", icon: LuFileStack },
    { name: "Configuration Management", link: "configuration-management", icon: IoSettingsSharp },
    { name: "Message Center", link: "message-center", icon: AiFillMessage },
    { name: "Users Management", link: "users-management", icon: FaUsers },
    { name: "Jobs Management", link: "jobs-management", icon: PiSuitcaseSimpleDuotone },
    { name: "Cache Maintenance", link: "cache-maintenance", icon: MdOutlineCached },
    { name: "Lookups Configuration", link: "lookups-configuration", icon: TbSettingsSearch },
    { name: "Audit", link: "audit", icon: AiOutlineAudit },
    { name: "Forms Management", link: "forms-management", icon: SiGoogleforms },
    { name: "Content Management", link: "content-management", icon: BiSolidBookContent },
    { name: "BPMN Configuration", link: "bpmn-configuration", icon: FaProjectDiagram },
]
export const permissions = [
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

export const originalRoles = [
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

export const Users = [
  
    {
      UserName: 'michaelfoster',
      Email: 'michaelfoster@example.com',
      FirstName: 'Michael',
      LastName: 'Foster',
      Status: 'Active',
      Role: 'Admin',
      CreationDate: '2023-01-23T11:00',
    },
    {
      UserName: 'lindsaywalton',
      Email: 'lindsaywalton@example.com',
      FirstName: 'Lindsay',
      LastName: 'Walton',
      Status: 'Active',
      Role: 'User',
      CreationDate: '2023-01-23T09:00',
    },
    {
      UserName: 'courtneyhenry',
      Email: 'courtneyhenry@example.com',
      FirstName: 'Courtney',
      LastName: 'Henry',
      Status: 'Inactive',
      Role: 'User',
      CreationDate: '2023-01-23T00:00',
    },
    {
      UserName: 'courtneyhenry',
      Email: 'courtneyhenry@example.com',
      FirstName: 'Courtney',
      LastName: 'Henry',
      Status: 'Active',
      Role: 'Admin',
      CreationDate: '2023-01-21T13:00',
    },
    {
      UserName: 'michaelfoster',
      Email: 'michaelfoster@example.com',
      FirstName: 'Michael',
      LastName: 'Foster',
      Status: 'Active',
      Role: 'User',
      CreationDate: '2023-01-18T12:34',
    },
    {
      UserName: 'courtneyhenry',
      Email: 'courtneyhenry@example.com',
      FirstName: 'Courtney',
      LastName: 'Henry',
      Status: 'Active',
      Role: 'Admin',
      CreationDate: '2023-01-16T15:54',
    },
    {
      UserName: 'michaelfoster',
      Email: 'michaelfoster@example.com',
      FirstName: 'Michael',
      LastName: 'Foster',
      Status: 'Active',
      Role: 'User',
      CreationDate: '2023-01-16T11:31',
    },
    {
      UserName: 'whitneyfrancis',
      Email: 'whitneyfrancis@example.com',
      FirstName: 'Whitney',
      LastName: 'Francis',
      Status: 'Active',
      Role: 'User',
      CreationDate: '2023-01-09T08:45',
    },
    // Add more items as needed...
  ];

export const MainColor = "#0d0f1d"

export const Logos = { logo, logoxs }
export const Flags = {
    en_flag,
    fr_flag
}
