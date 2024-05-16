import { FaEye } from "react-icons/fa";
import SharedTable from "../../../Components/SharedTable";
import { Dictionary, GlobalParams } from "../utils/constants";
import { useState } from "react";
import Pagination from "@components/Pagination";


const userColumns = [
  { header: 'Code', accessor: 'code' },
  { header: 'Content', accessor: 'content' },
  { header: 'Category', accessor: 'category' },
];

export default function DictionaryTable() {
  const [, setRecords] = useState(GlobalParams)

  const link = {
    label: <FaEye size={19} />,
    to: "userDetails",
  }
    return (
        <div className="px-16">
        <SharedTable data={Dictionary} columns={userColumns} link={link} />
        <Pagination setRecords={setRecords} array={GlobalParams} pages={9} />
        </div>
    )
}
