import PrimaryButton from "@components/Button";
import { PaperClipIcon } from "@heroicons/react/24/outline"
import { IoDocumentAttachOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion"
const documents = [
  { name: 'resume_back_end_developer.pdf', size: '2.4mb' },
  { name: 'coverletter_back_end_developer.pdf', size: '4.5mb' },
  { name: 'coverletter_front_end_developer.pdf', size: '2.5mb' }
];

const UserDocuments = () => {
  return (
    <>
      <div className="flex-col justify-center mx-auto mt-10 ">
        <div className="hover:scale-105 duration-200">
          <motion.button
            initial={{ opacity: 0, scale: 0.9, }}
            animate={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.1 }}
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <IoDocumentAttachOutline className="flex justify-center mx-auto text-gray-300" size={44} />
            <span className="mt-2 block text-sm font-semibold text-[--txt]">Add Document</span>
          </motion.button>

        </div>

        <div className="border-t border-[--border-color] px-4 py-6 sm:col-span-2 sm:px-0 w-[600px] mt-16">
          <dt className="text-sm font-medium leading-6 text-[--txt]">Attachments</dt>
          <dd className="mt-2 text-sm text-[--txt]">
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
              {documents.map((document, i) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.3 * i }}
                  key={document.name} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">{document.name}</span>
                      <span className="flex-shrink-0 text-gray-400">{document.size}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="mt-14 flex items-center justify-center gap-x-6">
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
    </>

  )
}

export default UserDocuments