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
import {logo, logoxs} from '../../public/Images/index.js'
export const Modules = [
    {name:"Dashboard",link:"/",icon:MdOutlineDashboard},
    {name:"Applications Management",link:"/applications-management",icon:LuFileStack},
    {name:"Configuration Management",link:"/configuration-management",icon:IoSettingsSharp},
    {name:"Message Center",link:"/message-center",icon:AiFillMessage},
    {name:"Users Management",link:"/users-management",icon:FaUsers},
    {name:"Jobs Management",link:"/jobs-management",icon:PiSuitcaseSimpleDuotone},
    {name:"Cache Maintenance",link:"/cache-maintenance",icon:MdOutlineCached},
    {name:"Lookups Configuration",link:"/lookups-configuration",icon:TbSettingsSearch},
    {name:"Audit",link:"/audit",icon:AiOutlineAudit},
    {name:"Forms Management",link:"/forms-management",icon:SiGoogleforms},
    {name:"Content Management",link:"/content-management",icon:BiSolidBookContent },
    {name:"BPMN Configuration",link:"/bpmn-configuration",icon:FaProjectDiagram },
]

export const MainColor="#0d0f1d"

export const Logos = {logo,logoxs}
