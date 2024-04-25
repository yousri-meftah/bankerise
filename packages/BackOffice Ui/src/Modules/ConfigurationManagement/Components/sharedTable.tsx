import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";
import { GlobalParams } from "../utils/constants";

type ColumnDefinition = {
  key: string;
};

type TableProps = {
  data: any[]; // Array of data objects
  columns: ColumnDefinition[]; // Array of column definitions
};

const SharedTable: React.FC<TableProps> = ({ data, columns }) => {
    const [, setRecords] = useState(GlobalParams)
  return (
    <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
                {/* TABLE ITERATION LOGIC */}
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                    <tr>
                        {columns.map((column : ColumnDefinition) => (
                        <th key={column.key} scope="col">
                            {column.key}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={index}>
                            {columns.map(column => (
                                <td key={`${column.key}-${index}`} className="py-4 pl-4 text-sm text-gray-800">
                                {item[column.key]}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                </table>
                <Pagination pages={6} setRecords={setRecords} array={GlobalParams} />
            </div >
  )
}

export default SharedTable