import { IconType } from "react-icons/lib";

export interface IModule {
    hasSubModules: boolean;
    icon: IconType;
    link: string;
    name: string;
    subModules?: ISubModule[]; // Ensure subModules is always an array or undefined
  }
  
  export interface ISubModule {
    name: string;
    link: string;
    icon: IconType;
  }
