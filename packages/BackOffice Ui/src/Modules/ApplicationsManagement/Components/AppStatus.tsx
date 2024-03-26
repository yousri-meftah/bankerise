import { motion } from "framer-motion"
const AppStatus = ({ role }: any) => {
  return (
    <div className="m-20 flex justify-center gap-9">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.1 }}>
        <label htmlFor="Audience" className="block text-sm font-medium leading-6 text-[--txt]">
          Audience
        </label>
        <div className="mt-2 ">
          <input
            type="Audience"
            name="Audience"
            id="Audience"
            defaultValue="Adminstration"
            disabled
            className="bg-[--inputBg] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-[--inputBg] disabled:text-[--textSeconday] disabled:ring-gray-600 sm:text-sm sm:leading-6 px-1 backdrop:filter"
            placeholder="you@example.com"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2 }}>
        <label htmlFor="appname" className="block text-sm font-medium leading-6 text-[--txt]">
          Application Name
        </label>
        <div className="mt-2">
          <input
            type="appName"
            name="appName"
            id="appName"
            defaultValue="studio"
            disabled
            className="bg-[--inputBg] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-[--inputBg] disabled:text-[--textSeconday] disabled:ring-gray-600 sm:text-sm sm:leading-6 px-1 backdrop:filter"
            placeholder="you@example.com"
          />
        </div>
      </motion.div>
      {role ?
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <label htmlFor="Role Name" className="block text-sm font-medium leading-6 text-[--txt]">
            Role Name
          </label>
          <div className="mt-2">
            <input
              type="roleName"
              name="roleName"
              id="roleName"
              defaultValue="strole"
              disabled
              className="bg-[--inputBg] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-[--inputBg] disabled:text-[--textSeconday] disabled:ring-gray-600 sm:text-sm sm:leading-6 px-1 backdrop:filter"
              placeholder="you@example.com"
            />
          </div>
        </motion.div>
        : null}

    </div>
  )
}

export default AppStatus