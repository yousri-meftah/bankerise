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
    {name:"Applications Management",link:"/",icon:LuFileStack},
    {name:"Configuration Management",link:"/",icon:IoSettingsSharp},
    {name:"Message Center",link:"/",icon:AiFillMessage},
    {name:"Users Management",link:"/",icon:FaUsers},
    {name:"Jobs Management",link:"/",icon:PiSuitcaseSimpleDuotone},
    {name:"Cache Maintenance",link:"/",icon:MdOutlineCached},
    {name:"Lookups Configuration",link:"/",icon:TbSettingsSearch},
    {name:"Audit",link:"/",icon:AiOutlineAudit},
    {name:"Forms Management",link:"/",icon:SiGoogleforms},
    {name:"Content Management",link:"/",icon:BiSolidBookContent },
    {name:"BPMN Configuration",link:"/",icon:FaProjectDiagram },
]

export const MainColor="#0d0f1d"

export const Logos = {logo,logoxs}
