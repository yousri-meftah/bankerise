import SwitchButton from '@components/Switch';
import { useState ,useEffect} from 'react';
import { CiUser } from "react-icons/ci";
import UserInfo from '../Components/UserInfo';
import UserDevices from '../Components/UserDevices';
import UserDocuments from '../Components/UserDocuments';
import { useParams } from 'react-router-dom';
import { TopLevel_foruser , User , Role} from '../../../store/admin-API/user-app-management-controller/user_app_management_controller_schema';

import { useGetuserbyidQuery} from "../../../store/admin-API/user-app-management-controller/user_app_management_controller_endpoints";

const dummyUser: User = {
  id: 1,
  name: "John Doe",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "123-456-7890",
  audience: "customers",
  keycloakId: "abc123xyz",
  createdDate: Date.now(),
  gender: "Male",
  country: "USA",
  city: "New York",
  address: "123 Main St",
  homePhone: "098-765-4321",
  identityNumber: "987654321"
};

const dummyRole: Role = {
  id: 1,
  name: "Admin",
  applicationId: 1,
  applicationAudience: "general",
  applicationName: "MyApp",
  features: [],
  composedPermissions: []
};

export const dummyTopLevel_foruser: TopLevel_foruser = {
  id: 1,
  user: dummyUser,
  devices: [],
  role: dummyRole,
  active: true,
  segmentAssignmentLevel: "Level 1"
};

const UserSections = [
  { label: 'Profile', id: 1 },
  { label: 'Devices', id: 2 },
  { label: 'Documents', id: 3 },
]

function GetApplication(data: [TopLevel_foruser], appid: number): TopLevel_foruser {
  if (Object.keys(data).length === 0) { return dummyTopLevel_foruser; }
  const result = data.find((item) => item.role.applicationId === appid);
  if (result) {
    return result;
  }
  return {} as TopLevel_foruser;
}
export default function UserDetails() {

  const {userid , id } = useParams();
  // eslint-disable-next-line prefer-const
  let { data, isLoading } = useGetuserbyidQuery(Number(userid));
  const [selectedUserSection, setSelectedUserSection] = useState(1)
  const [enabled, setEnabled] = useState(false);
  const [myData, setMyData] = useState<TopLevel_foruser | null>(null);

  useEffect(() => {
    if (data) {
      //if (Object.keys(data).length === 0) { data = dummyTopLevel_foruser; return; }
      const applicationData = GetApplication(data, Number(id));
      setMyData(applicationData);
      setEnabled(!applicationData.active);
    }
  }, [data, id]);




  if (isLoading) return <div>Loading...</div>;
  const renderUserSection = (user : User) => {
    switch (selectedUserSection) {
      case 1:
        return <UserInfo user={ user || {} } />;
      case 2:
        return <UserDevices />;
      case 3:
        return <UserDocuments />;
      default:
        return null;
    }
  };


  //console.log(data)
  return (
    <div className='flex items-center '>
      {/* PROFILE NAV SECTION */}
      <div className='bg-gray-300/60 h-[750px] min-w-72 mt-9 ml-9 rounded-xl  backdrop:filter shadow-md sticky top-40'>
        <div className='rounded-full border size-fit size mx-auto mt-9 border-black'>
          <CiUser size={80} className='m-4' />
        </div>
        <div className='flex justify-center pt-6 font-semibold'>
          <span  >
            {myData?.user.name}
          </span>
        </div>
        <div className='flex justify-center gap-3 mt-4'>
          <span>
            Blocked:
          </span>
          <SwitchButton bg={true} state={enabled} setstate={setEnabled}  />
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
      {
        myData ? renderUserSection(myData?.user ?? {} as User) : <div>Loading...</div>}
    </div>
  )
}
