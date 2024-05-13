import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import PrimaryButton from '@components/Button'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import { FilterButton } from '@components/Button'
export default function AddDictionary({ open, setOpen }) {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll rounded-xl bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className=" text-lg font-bold bg-gradient-to-r from-[#08203e] to-[#557c93] bg-clip-text text-transparent leading-6 text-gray-900 border-b border-black">
                                                    Add Dictionary
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  ">
                                                {/* Radial gradient for the container to give a faded look */}
                                                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                                                <div className='relative'>

                                                    <div>
                                                        <label htmlFor="code" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                                                            Code
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="code"
                                                                id="code"
                                                                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6"
                                                                placeholder="code"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Category
                                                        </label>
                                                        <select
                                                            id="location"
                                                            name="location"
                                                            className="mt-2 block w-full rounded-full border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6"
                                                            defaultValue="Canada"
                                                        >
                                                            <option>Exceptions</option>
                                                            <option>Error</option>
                                                            <option>Warning</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="code" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                                                        Content (English)
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="code"
                                                                id="code"
                                                                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="code" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                                                        Content (French)
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="code"
                                                                id="code"
                                                                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="code" className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900">
                                                        Content (Arabic)
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="code"
                                                                id="code"
                                                                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center mt-20 ' onClick={() => toast.success('Dictionary Successfully Created')}>
                                                        <PrimaryButton text="Save" onClick={setOpen} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
