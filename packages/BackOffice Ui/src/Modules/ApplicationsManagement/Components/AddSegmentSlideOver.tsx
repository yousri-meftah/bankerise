import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import PrimaryButton from '@components/Button'
import { toast } from 'react-toastify'
import { motion } from "framer-motion"

export default function AddSegment({ open, setOpen }) {
    const [typeSelection, setTypeSelection] = useState("Master Segment");
    const [parentSegment, setParentSegment] = useState("");

    const handleTypeChange = (e) => {
        setTypeSelection(e.target.value);
        setParentSegment(""); // Reset parent segment selection when type changes
    }

    const handleParentSegmentChange = (e) => {
        setParentSegment(e.target.value);
    }
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

                <div className="fixed inset-0 overflow-hidden ">
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
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className=" leading-6 text-lg font-bold bg-gradient-to-r from-[#08203e] to-[#557c93] bg-clip-text text-transparent border-b border-black">
                                                    Add Segment
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
                                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                        <label htmlFor="Type" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                            Type
                                                        </label>
                                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                            <select
                                                                id="Type"
                                                                name="Type"
                                                                value={typeSelection}
                                                                onChange={handleTypeChange}
                                                                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                            >
                                                                <option>Master Segment</option>
                                                                <option>Segment</option>
                                                                <option>Sub Segment</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Parent Segment Select */}
                                                    {typeSelection === "Segment" && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                            <label htmlFor="ParentSegment" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                                Master Segment
                                                            </label>
                                                            <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                                <select
                                                                    id="ParentSegment"
                                                                    name="ParentSegment"
                                                                    value={parentSegment}
                                                                    onChange={handleParentSegmentChange}
                                                                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                                >
                                                                    {/* Populate options based on your data */}
                                                                    <option value="Segment1">Master Segment 1</option>
                                                                    <option value="Segment2">Master Segment 2</option>
                                                                </select>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                    {typeSelection === "Sub Segment" && (
                                                        <motion.div
                                                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                         className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                            <label htmlFor="ParentSegment" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                                Segment
                                                            </label>
                                                            <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                                <select
                                                                    id="ParentSegment"
                                                                    name="ParentSegment"
                                                                    value={parentSegment}
                                                                    onChange={handleParentSegmentChange}
                                                                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                                >
                                                                    {/* Populate options based on your data */}
                                                                    <option value="Segment1">sub Segment 1</option>
                                                                    <option value="Segment2">sub Segment 2</option>
                                                                </select>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                            Code
                                                        </label>
                                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                id="username"
                                                                autoComplete="given-name"
                                                                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                            Name
                                                        </label>
                                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                autoComplete="given-name"
                                                                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                            Description
                                                        </label>
                                                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                        <div className="mt-2">
                                                        <textarea
                                                            rows={4}
                                                            name="comment"
                                                            id="comment"
                                                            className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className='flex justify-center mt-20 ' onClick={() => toast.success('Segment Successfully Added')}>
                                                        <PrimaryButton text="Confirm" onClick={setOpen} />
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
