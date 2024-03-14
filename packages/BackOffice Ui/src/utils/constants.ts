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
import {logo, logoxs} from '../../public/Images/index'
export const Modules = [
    {name:"Dashboard",link:"dashboard",icon:MdOutlineDashboard},
    {name:"Applications Management",link:"applications-management",icon:LuFileStack},
    {name:"Configuration Management",link:"configuration-management",icon:IoSettingsSharp},
    {name:"Message Center",link:"message-center",icon:AiFillMessage},
    {name:"Users Management",link:"users-management",icon:FaUsers},
    {name:"Jobs Management",link:"jobs-management",icon:PiSuitcaseSimpleDuotone},
    {name:"Cache Maintenance",link:"cache-maintenance",icon:MdOutlineCached},
    {name:"Lookups Configuration",link:"lookups-configuration",icon:TbSettingsSearch},
    {name:"Audit",link:"audit",icon:AiOutlineAudit},
    {name:"Forms Management",link:"forms-management",icon:SiGoogleforms},
    {name:"Content Management",link:"content-management",icon:BiSolidBookContent },
    {name:"BPMN Configuration",link:"bpmn-configuration",icon:FaProjectDiagram },
]

export const Applications = [
    { 
      title: "Bankerise Studio", 
      description: "Bankerise's Official Studio" ,
      service:"administration",
      type:"app"
    },
    { 
      title: "BackOffice", 
      description: "The centralized administrative dashboard for Bankerise, providing control over all Bankerise applications" ,
      service:"administration",
      type:"app"
    },
    { 
      title: "CSA", 
      description: "" ,
      service:"administration",
      type:"app"
    },
    { 
      title: "API-Gateway Admin", 
      description: "Gateway Management for Administration Apps" ,
      service:"administration",
      type:"gateway"
    },
    { 
      title: "API-Gateway front", 
      description: "Gateway Management front" ,
      service:"administration",
      type:"gateway"
    },
    { 
      title: "Customer", 
      description: "Customer  Application for the CSA" ,
      service:"customer",
      type:"app"
    }
  ];
  
export const MainColor="#0d0f1d"

export const Logos = {logo,logoxs}
