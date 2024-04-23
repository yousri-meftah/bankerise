import SwitchButton from '@components/Switch';
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import UserInfo from '../Components/UserInfo';
import UserDevices from '../Components/UserDevices';
import UserDocuments from '../Components/UserDocuments';

const UserSections = [
  { label: 'Profile', id: 1 },
  { label: 'Devices', id: 2 },
  { label: 'Documents', id: 3 },
]

export default function UserDetails() {
  const [selectedUserSection, setSelectedUserSection] = useState(1)
  const renderUserSection = () => {
    switch (selectedUserSection) {
      case 1:
        return <UserInfo />;
      case 2:
        return <UserDevices />;
      case 3:
        return <UserDocuments />;
      default:
        return null;
    }
  };
  return (

    <div className='flex items-center '>
      {/* PROFILE NAV SECTION */}
      <div className='bg-gray-300/60 h-[750px] min-w-72 mt-9 ml-9 rounded-xl  backdrop:filter shadow-md sticky top-40'>
        <div className='rounded-full border size-fit size mx-auto mt-9 border-black'>
          <CiUser size={80} className='m-4' />
        </div>
        <div className='flex justify-center pt-6 font-semibold'>
          <span  >
            Laith Ferjeoui
          </span>
        </div>
        <div className='flex justify-center gap-3 mt-4'>
          <span>
            Blocked:
          </span>
          <SwitchButton bg={true} />
        </div>
        <div className='w-full mt-16'>
          {UserSections.map((section) => (
            <div
              key={section.id}
              className={`flex justify-center mx-7 h-8 pt-1 rounded-md mb-5 hover:cursor-pointer duration-300 ${section.id === selectedUserSection ? 'bg-gray-700' : 'bg-gray-900'
                }`}
              onClick={() => setSelectedUserSection(section.id)}
            >
              <span className='text-gray-300'>{section.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* USER TABULATION RENDERING FUNCTION */}
     
        {renderUserSection()}
      
      

    
    </div>
  )
}
