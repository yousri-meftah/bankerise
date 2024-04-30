
import SharedTable from "../../../Components/SharedTable"
import { GlobalParams } from "../utils/constants"

const userColumns = [
  { header: 'name', accessor: 'name' },
  { header: 'helpText', accessor: 'helpText' },
  { header: 'value', accessor: 'value' },
];



// Usage example in a component



const GlobalParamsTable = () => {
    //const [records, setRecords] = useState(GlobalParams)
  return (
     <div className="px-16">
            <SharedTable data={GlobalParams} columns={userColumns} />
      </div>
  )
}

export default GlobalParamsTable