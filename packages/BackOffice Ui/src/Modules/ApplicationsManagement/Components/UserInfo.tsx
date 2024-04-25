import PrimaryButton from "@components/Button"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
const UserInfo = () => {
  return (
    <>
      {/* INFO SECTION */}
      <div className='bg-[--tableBg] backdrop-blur-lg backdrop:filter my-10 px-14 w-full mx-10'>
        <div className="px-4 pb-2 sm:px-0 border-b border-[--border-color]">
          <h3 className="text-base font-semibold leading-7 text-[--txt] flex justify-center">Customer Information</h3>
        </div>
        <div className="mt-6">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.1 }}>
            <div className='flex gap-10'>
              <div className="relative flex-1">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John"
                />
              </div>

              <div className="relative flex-1">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className="relative flex justify-center items-center gap-4 mt-7 ">
                <label htmlFor="Role" className="block text-sm leading-6 sm:pt-1.5 text-[--txt] font-semibold">
                  Role:
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    id="Role"
                    name="Role"
                    autoComplete="Role-name"
                    className="block w-full rounded-md border-1 bg-white/10 py-1.5 text-[--txt] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Admin</option>
                    <option>Agent</option>
                  </select>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Complementary Information */}
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="px-4 pb-2 sm:px-0 border-b border-[--border-color] pt-16">
              <h3 className="text-base font-semibold leading-7 text-[--txt] flex justify-center">Complementary Information</h3>
            </div>

            <div className='flex justify-around items-center'>
              <div className="relative flex justify-center items-center gap-4 mt-7">
                <label htmlFor="gender" className="block text-sm leading-6 sm:pt-1.5 text-[--txt] font-semibold">
                  Gender
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0 w-44">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender-name"
                    className="block w-full rounded-md border-1 bg-white/10 py-1.5 text-[--txt] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="relative flex justify-center items-center gap-4 mt-7 ">
                <label htmlFor="id" className="block text-sm leading-6 sm:pt-1.5 text-[--txt] font-semibold">
                  ID Type:
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0 w-44">
                  <select
                    id="id"
                    name="id"
                    autoComplete="id-name"
                    className="block w-full rounded-md border-1 bg-white/10 py-1.5 text-[--txt] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Passport</option>
                    <option>ID Card</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-8 gap-20'>
              <div className="relative flex-1">
                <label
                  htmlFor="id-number"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  name="id-number"
                  id="id-number"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
              </div>
              <div className="relative flex-1">
                <label
                  htmlFor="exp-date"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="exp-date"
                  id="exp-date"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
              </div>
            </div>

          </motion.div>

          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="px-4 pb-2 sm:px-0 border-b border-[--border-color] pt-16">
              <h3 className="text-base font-semibold leading-7 text-[--txt] flex justify-center">Contact Information</h3>
            </div>
            <div className='flex gap-10 my-10'>
              <div className="relative flex-1">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John"
                />
              </div>

              <div className="relative flex-1">
                <label
                  htmlFor="country"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className='flex gap-10'>
              <div className="relative flex-1">
                <label
                  htmlFor="city"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John"
                />
              </div>

              <div className="relative flex-1">
                <label
                  htmlFor="address"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className='flex gap-10 my-10'>
              <div className="relative flex-1">
                <label
                  htmlFor="phone"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Mobile Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="John"
                />
              </div>

              <div className="relative flex-1">
                <label
                  htmlFor="home-number"
                  className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                >
                  Home Phone Number
                </label>
                <input
                  type="text"
                  name="home-number"
                  id="home-number"
                  className="block w-full bg-white/10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Doe"
                />
              </div>
            </div>

          </motion.div>


          {/* BUTTONS */}
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link to={"/private/applications-management"}>
              <button type="button" className="text-sm font-semibold leading-6 text-[--textPrimary]">
                Cancel
              </button>
            </Link>
            <Link to={"/private/applications-management/edit/users"}  >
              <PrimaryButton text={"Save"} onClick={() => toast.success("Successfully Saved.")} />
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default UserInfo