import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { EvervaultCard } from "./Evervault-card";
interface CardDataStatsProps {
  description: string;
  title: string;
}
const AppCard: React.FC<CardDataStatsProps> = ({
  description,
  title,
}) => {
  
  return (
    <div className="rounded-lg border border-stroke py-6 px-7 shadow-default border-[#363a4a] backdrop-filter backdrop-blur-sm bg-[#464a5c]/10 hover:cursor-pointer relative aspect-auto size-full hover:scale-105 duration-300">
      <EvervaultCard  />
      
      <div className="mt-4 flex items-end justify-between ">
        <div>
          <h4 className="text-title-md font-bold text-white">
            {title}
          </h4>
          <span className="text-sm font-medium text-gray-500">{description}</span>
        </div>
        <div className='absolute right-6 bottom-4 hover:scale-125 duration-300'><FaChevronRight size="19" color='white'/></div>

      </div>
      
    </div>
  );
};
export default AppCard;