import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import SharedFilter  from "./SharedFilter"
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const feilds = [
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Filter = ({ close }: any) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-[--filter] max-w-3xl mx-auto rounded-xl relative p-3">
      <SharedFilter
        fields={feilds}
    />
      <button
        type="button"
        className="mx-auto rounded-md bg-[--Button2] px-10 py-2  text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--HoverButton2] duration-200 flex items-center gap-3"
      >
        Clear
      </button>
      <div className="ml-3 h-7 absolute top-2 right-2">
        <button
          type="button"
          className="rounded-md  text-white hover:text-gray-400 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={close}
        >
          <span className="sr-only">Close panel</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  )
}

export default Filter;