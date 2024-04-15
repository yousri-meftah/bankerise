import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
const Filter = ({ close }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-[--filter] max-w-3xl mx-auto rounded-xl relative p-3">
      <div className="flex justify-center items-center">
        <div className='flex justify-center items-center flex-1 '>
          <div className="relative flex justify-center items-center gap-4 ">
            <label htmlFor="category" className="block text-sm leading-6  text-gray-900 font-semibold">
              Category:
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <select
                id="category"
                name="category"
                autoComplete="category-name"
                className="block w-full text-gray-900 rounded-md border-1 bg-white/10 py-1.5 text-[--txt] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Admin</option>
                <option>Agent</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 sm:py-6 flex-1">
          <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900 ">
            Code
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              type="text"
              name="code"
              id="code"
              autoComplete="family-name"
              className="block w-full bg-white/10 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
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

export default Filter