
import { useGetglobalparamsQuery } from "../../../store/admin-API/global-parameter-controller/global_parameter_controller_endpoints";
import SharedTable from "../../../Components/SharedTable"
//import { GlobalParams } from "../utils/constants"
import {global_reponse} from "../../../store/admin-API/global-parameter-controller/global_parameter_controller_schema"
import FilterButton from "@components/FilterButton";
const userColumns = [
  { header: 'name', accessor: 'name' },
  { header: 'helpText', accessor: 'helpText' },
  { header: 'value', accessor: 'value' },
];

interface GlobalParam {
  name: string;
  helpText: string;
  value: {
    value: string;
    type: string;
    flag: boolean;
    valueRanges: string[];
  };
}
function transformResponse(response: global_reponse[]): GlobalParam[] {
  return response.map((item) => ({
    name: item.name,
    helpText: item.helpText,
    value: {
      value: item.paramValue || item.defaultValue || "",
      type: "select", // Setting type to select
      flag: true, // Assuming all values are flags
      valueRanges: item.valueRanges || [], // Including valueRanges
    },
  }));
}
const my_fields = [
  {
    type: 'text',
    name: 'search',
    label: 'Search'
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'agent', label: 'Agent' }
    ]
  }
];


const GlobalParamsTable = () => {
  const { data, error, isLoading} = useGetglobalparamsQuery({});
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error:</div>
  }
  const GlobalParams = transformResponse(data as global_reponse[])
  //console.log("data = ", GlobalParams)
  return (
    <div className="px-16">
      <FilterButton fields={my_fields} />
            <SharedTable data={GlobalParams} columns={userColumns} />
      </div>
  )
}

export default GlobalParamsTable