import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddUser from '../Modules/ApplicationsManagement/Components/AddUser';

function classNames(s1 : string , s2 : string ) {
  return s1+" "+s2;
}
export interface TransformedUserData {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    id: number;
    role?: string;
}
const check = (status: string) => {
  if (status === 'Active') {
    return 'text-green-400 bg-green-400/10'
  }
  return 'text-rose-400 bg-rose-400/10'
}

interface Column {
  header: string;
  accessor: string;
}

interface Action {
  label: string;
  onClick: (id: string) => void;
  icon: JSX.Element;
  className: string;
}
interface Link {
    label: JSX.Element;
    to: string;
}



interface SharedTableProps {
    columns: Column[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    actions?: Action[];
  link?: Link;
  component?: boolean;
}

const SharedTable: React.FC<SharedTableProps> = ({ columns, data, actions, link, component }) => {
  //console.log("data = ",data)
  const { id } = useParams();
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  //console.log("yo = ",data)
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left overflow-hidden">
      <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className={`py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8 `}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      {component && <AddUser
                    open={isSlideOverOpen}
                    setOpen={() => {
                    setIsSlideOverOpen(false);
                    Navigate({ to: `/private/applications-management/edit/${id}/users/available-users/` });
                    }}
                    content={data} // Provide data as content prop
      />
      }
      <tbody className="divide-y divide-[--border-Devide] ">
        {data.map((item, realindex) => (
          <>
          <motion.tr
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.1 * realindex }}
            key={item.Email}
          >

            {columns.map((column) => (

              <td key={column.accessor} className={`py-4 pl-4 sm:pl-6 lg:pl-8 `}>

                <div className="flex gap-x-3">
                  {column.accessor == 'Status' ?
                    (
                      <>
                        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                        <div className={classNames(check(item[column.accessor]) , 'flex-none rounded-full p-1')}>
                          <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>
                          <div className="hidden text-[--txt] sm:block">{item[column.accessor]}</div>
                          </div>
                      </>
                  ) : (
                      <div className="font-mono text-sm leading-6 text-[--textSeconday]">
                        {
                          item[column.accessor]["flag"] ? (
                            item[column.accessor]["type"] === "select" ? (
                              <select
                                value={item[column.accessor]["value"]}
                                className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:bg-[--inputBg] focus:text-[--textPrimary] focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                              >
                                {(item[column.accessor]["valueRanges"].length > 0
                                  ? item[column.accessor]["valueRanges"]
                                  : [item[column.accessor]["value"]]
                                ).map((option:string , index : number) => (
                                  <option key={index} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={item[column.accessor]["type"]}  // Uses the type specified in the column definition
                                value={item[column.accessor]["value"]}
                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                              />
                            )
                          ) : (
                            item[column.accessor]
                          )
                        }
                      </div>


                  )}
                </div>
              </td>
            ))}
             {(actions || link) && (
              <td className="py-4 pl-6 pr-4 sm:pr-8">
                <div className="flex gap-x-3 justify-end items-center">
                  {link  && (
                    <Link to={`${link.to}/${item["id"]?item["id"]:realindex}`}  onClick={() => setIsSlideOverOpen(true)}  className="text-[--indigoText] hover:text-indigo-300">
                      {link.label}
                    </Link>
                  )}
                  {actions&&actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => action.onClick(item.id)}
                      className={action.className}
                    >
                      {action.icon}
                    </button>
                  ))}


                </div>
              </td>

            )}

            </motion.tr>

            </>

        ))}


      </tbody>
    </table>
  );
};

export default SharedTable;
