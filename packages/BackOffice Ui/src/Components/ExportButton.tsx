import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdOutlineFileUpload } from 'react-icons/md'

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

export default function ExportButton() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-[--disableButton] px-4 rounded-md py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3">
        <MdOutlineFileUpload  size={20}/>
          Export
          
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-300 text-gray-900 rounded-lg' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  PDF
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-300 text-gray-900 rounded-lg' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  EXCEL
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#">

            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

