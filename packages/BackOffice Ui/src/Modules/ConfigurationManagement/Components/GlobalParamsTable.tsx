
import SharedTable from "./sharedTable"
import { GlobalParams } from "../utils/constants"

const columns = [
  { key: "name"},
  { key: "helpText"},
  { key: "value"}
];

// Usage example in a component



const GlobalParamsTable = () => {
    //const [records, setRecords] = useState(GlobalParams)
  return (
    <SharedTable data={GlobalParams} columns={columns} />
  )
}

export default GlobalParamsTable