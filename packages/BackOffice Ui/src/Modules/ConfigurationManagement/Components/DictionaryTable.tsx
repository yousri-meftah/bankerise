import { FaEye } from "react-icons/fa";
import SharedTable from "../../../Components/SharedTable";
import { Dictionary } from "../utils/constants";


const userColumns = [
  { header: 'Code', accessor: 'code' },
  { header: 'Content', accessor: 'content' },
  { header: 'Category', accessor: 'category' },
];

export default function DictionaryTable() {

  const link = {
    label: <FaEye size={19} />,
    to: "userDetails",
  }
    return (
        <div className="px-16">
            <SharedTable data={Dictionary} columns={userColumns} link={link} />
        </div>
    )
}
