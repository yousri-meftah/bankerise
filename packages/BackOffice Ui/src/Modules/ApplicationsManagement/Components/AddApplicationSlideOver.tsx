import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'
import { Button } from './Moving-border'
import { useTranslation } from 'react-i18next'

export default function AddApplicationSlideOver({ open, setOpen }) {
      const { t } = useTranslation();


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
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen h-screen max-w-md ">

                                    <div className="flex h-full flex-col overflow-y-scroll bg-white/40 backdrop-blur-md py-6 shadow-xl rounded-md">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-semibold leading-6 text-gray-900 border-b border-black">
                                                    { t("add_application")}
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md  text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-200"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">{ t("close_panel")}</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">

                                            <div className='relative'>
                                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                        { t("name")}
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
                                                    <label htmlFor="oauth" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                                        { t("oauth_client_id")}
                                                    </label>
                                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                        <select
                                                            id="oauth"
                                                            name="oauth"
                                                            defaultValue={'Choose one'}
                                                            className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        >
                                                            <option>test</option>
                                                            <option>test</option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="comment" className="flex justify-center text-sm font-medium leading-6 text-gray-900 mt-9">
                                                        { t("description")}
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea
                                                            rows={4}
                                                            name="comment"
                                                            id="comment"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>


                                                <div className='flex justify-center mt-20 ' >
                                                    <div className="size-fit" onClick={() => {
                                                        toast.success("Application created successfully!");
                                                        setOpen(false);
                                                    }}>
                                                        <Button
                                                            type="button"
                                                            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-[white] shadow-sm hover:scale-105 duration-300 "
                                                        >
                                                            { t("add")}
                                                        </Button>
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
