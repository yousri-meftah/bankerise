import { motion } from "framer-motion"
import Pagination from "@components/Pagination";
import { useState } from "react";
const GlobalParams = [
    { name: "otp_challenge_template", helpText: "The one time password challenge template to use, should be available in the message center", value: "OTP message" },
    { name: "email_verification_template", helpText: "The email verification template to use, should be available in the message center", value: "3" },
    { name: "password_reset_template", helpText: "The password reset template to use, should be available in the message center", value: "2" },
    // Add more entries as needed
];

const GlobalParamsTable = () => {
    const [records, setRecords] = useState(GlobalParams)
  return (
    <div className="bg-[--tableBg] backdrop-blur-sm backdrop:filter px-10">
                {/* TABLE ITERATION LOGIC */}
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
                        <tr>
                            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                                Name
                            </th>
                            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                Help Text
                            </th>
                            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                Values
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[--border-Devide]">
                        {records.map((item, i) => (
                            <motion.tr
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.3 * i }}
                                key={item.name}>
                                <td className="py-4 pl-4 sm:pl-6 lg:pl-8">
                                    <div className="flex items-center gap-x-4">
                                        <div className="truncate text-sm font-medium leading-6 text-[--txt]">{item.name}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.helpText}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-sm leading-6 text-[--textSeconday]">{item.value}</div>
                                    </div>
                                </td>

                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <Pagination pages={6} setRecords={setRecords} array={GlobalParams} />
            </div >
  )
}

export default GlobalParamsTable