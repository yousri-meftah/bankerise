import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Column {
  header: string;
  accessor: string; // matches keys from the data array
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
}

const SharedTable: React.FC<SharedTableProps> = ({ columns, data, actions ,link}) => {
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left">
      <thead className="border-b border-[--border-color] text-sm leading-6 text-[--txt]">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className={`py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8 `}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-[--border-Devide] ">
        {data.map((item, index) => (
          <motion.tr
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.1 * index }}
            key={item.Email}
          >
            {columns.map((column) => (
              <td key={column.accessor} className={`py-4 pl-4 sm:pl-6 lg:pl-8 `}>
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-sm leading-6 text-[--textSeconday]">{item[column.accessor]}</div>
                </div>
              </td>
            ))}
             {(actions || link) && (
              <td className="py-4 pl-6 pr-4 sm:pr-8">
                <div className="flex gap-x-3 justify-end items-center">
                  {link  && (
                    <Link to={link.to} className="text-[--indigoText] hover:text-indigo-300">
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
        ))}
      </tbody>
    </table>
  );
};

export default SharedTable;
