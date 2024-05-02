import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";

import ExportButton from "@components/ExportButton";
import { BsFilter } from "react-icons/bs";

const tabs = [
    { id: "1", name: 'Inherited Parameters' },
    { id: "2", name: 'Overriden Parameters' },
]
const configOverride = [
    {}
]
const config = [
    {
        feature: "add_local_multiple_transfer",
        type: 'sample_transfer',
        param_name: "FROM_ACCOUNT_ELIGIBLE",
        data_type: "integer",
        data_value: "[126]"
    },
    {
        feature: "OTP POLICY",
        type: 'Security Policies',
        param_name: "otp_challenge_template",
        data_type: "string",
        data_value: "OTPMessage"
    },
    {
        feature: "change_user_password",
        type: 'User Management',
        param_name: "password_change_policy",
        data_type: "string",
        data_value: "ChangePassword"
    },
    {
        feature: "view_transactions",
        type: 'Transaction Management',
        param_name: "transaction_view_policy",
        data_type: "string",
        data_value: "ViewTransaction"
    }
]


const ConfigureSegmentsTable = () => {
    const [records, setRecords] = useState(config)
    const [tabss, setTabss] = useState('1')
    return (
        <>
            <div className="  m-10 flex justify-center">

                <div className=" border-[--textPrimary]">
                    <nav className="-mb-px flex gap-3" aria-label="Tabs">
                        {tabs
                            .map((tab) => (
                                <div
                                    key={tab.id}
                                    onClick={() => setTabss(tab.id)}
                                    className={`${tab.id === tabss
                                        ? 'border-indigo-300 text-indigo-300'
                                        : 'border-transparent text-[--txt2] hover:border-gray-300 hover:text-[--textPrimary]'
                                        } rounded-lg  border-b-2 py-4 px-1 text-center text-sm font-medium hover:cursor-pointer duration-200`}
                                >
                                    {tab.name}
                                </div>
                            ))}
                    </nav>
                </div>
            </div>
            <div className="flex justify-end mx-40 gap-4">
                <button
                    type="button"
                    className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"

        >
                <BsFilter size={20} />
                Filter
            </button>
            <ExportButton />
        </div >
            <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10 mx-20">

                {/* TABLE ITERATION LOGIC */}
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                        <tr>
                            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                                Feature
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                Parameter Name
                            </th>
                            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                Data Type
                            </th>
                            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                Data Value
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[--border-Devide]">
                        {tabss == "1" ? records.map((item, i) => (
                            <>
                                <motion.tr
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.3 * i }}
                                    key={item.feature}>
                                    <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-x-4">
                                            <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.feature}</div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.param_name}</div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.data_type}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 sm:table-cell ">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">
                                                <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="name"
                                                        className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--txt] focus:ring-0 sm:text-sm sm:leading-6"
                                                        defaultValue={item.data_value}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </motion.tr>
                            </>
                        )) : configOverride.map((item, i) => (
                            <>
                                <motion.tr
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.3 * i }}
                                    key={item.feature}>
                                    <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-x-4">
                                            <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.feature}</div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.param_name}</div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.data_type}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 sm:table-cell ">
                                        <div className="flex gap-x-3">
                                            <div className="font-mono text-sm leading-6 text-[--textSeconday]">
                                                <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="name"
                                                        className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--txt] focus:ring-0 sm:text-sm sm:leading-6"
                                                        defaultValue={item.data_value}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </motion.tr>
                            </>
                        ))}
                    </tbody>
                </table>
                <Pagination pages={6} setRecords={setRecords} array={config} />
            </div >
        </>
    )
}

export default ConfigureSegmentsTable