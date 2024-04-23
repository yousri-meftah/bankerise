import React, { useState } from "react";
import { DiAndroid } from "react-icons/di";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaApple } from "react-icons/fa";
import DatePicker from "@components/DatePicker";
import PrimaryButton from "@components/Button";
import { toast } from "react-toastify";
const VersionsSectionsAndroid = [
    { label: 'V 1.0.0 - DISABLED', id: 1 },
    { label: 'V 1.0.0 - ACTIVE', id: 2 },
]
const VersionsSectionsIOS = [
    { label: 'V 1.0.0 - ACTIVE', id: 1 },
]

export function AccordionCustomStyles() {
    const [open, setOpen] = React.useState(0);
    const [selectedVersionSectionAndroid, setSelectedVersionSectionAndroid] = useState(1)
    const [selectedVersionSectionIOS, setSelectedVersionSectionIOS] = useState(1)
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} className="mb-2 rounded-lg border border-[--disableButton] px-4 backdrop-blur-md">
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors ${open === 1 ? "text-[--accordionHeader] hover:!text-blue-700" : "text-[--textSeconday]"
                        }`}
                >
                    <div className="flex justify-center items-center gap-4 w-full">
                        <DiAndroid />
                        <span>Android</span>
                    </div>
                </AccordionHeader>
                <AccordionBody className="pt-0">
                    <div className="flex items-center gap-14 relative">
                        <div className=" bg-[--disableHover] h-[500px] min-w-60 mt-9 ml-9 rounded-xl  backdrop:filter shadow-md sticky top-40 p-4">
                            <span className="flex justify-center text-lg font-bold pt-5 text-[--txt]">Versions: 2</span>
                            <div className='w-full mt-16'>
                                {VersionsSectionsAndroid.map((section) => (
                                    <div
                                        key={section.id}
                                        className={`flex justify-center mx-7 h-8 pt-1 rounded-md mb-5 hover:cursor-pointer duration-300 ${section.id === selectedVersionSectionAndroid ? 'bg-gray-700' : 'bg-gray-900'
                                            }`}
                                        onClick={() => setSelectedVersionSectionAndroid(section.id)}
                                    >
                                        <span className='text-gray-300 font-semibold pt-0.5'>{section.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <PrimaryButton text={"Add"} onClick={() => toast.success("Version Created")} />
                            </div>

                        </div>

                        <div className="w-full">
                            <div className="flex items-center justify-center w-full gap-5">
                                <div className="relative flex-1">
                                    <label
                                        htmlFor="name"
                                        className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                                    >
                                        Version Key
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full bg-[--inputBg] rounded-md border-0 py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="key"
                                        defaultValue="jv1SGWJrNe5Z"
                                    />
                                </div>
                                <div className='flex justify-start  items-center flex-1'>
                                    <div className="relative flex items-center w-full gap-4">
                                        <label htmlFor="Role" className="block text-sm leading-6  text-[--txt] font-semibold">
                                            Status
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
                                            <select
                                                id="Role"
                                                name="Role"
                                                autoComplete="Role-name"
                                                className="block w-full rounded-md border-1 bg-[--inputBg] ring-1 ring-inset ring-gray-300/30 py-1.5 text-[--txt] shadow-sm focus:ring-inset  focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 "
                                            >
                                                <option>Active</option>
                                                <option>Blocked</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-5 my-5">
                                <div className="flex-1 flex items-center gap-3">
                                    <span className="text-[--txt] font-semibold">Creation date</span>
                                    <DatePicker />
                                </div>
                                <div className="flex-1 flex items-center gap-3">
                                    <span className="text-[--txt] font-semibold">Date of the last update</span>
                                    <DatePicker />
                                </div>
                            </div>
                            <div className="flex gap-4 h-6 items-center">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded bg-gray-400 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <span className="text-[--txt]">Notify</span>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center gap-3 mt-3 flex-1">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Notification Text (English)
                                    </label>
                                    <div className="mt-2 w-full">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mt-3 flex-1">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Notification Text (French)
                                    </label>
                                    <div className="mt-2 w-full">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-3 flex-1">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                    Notification Text (Arabic)
                                </label>
                                <div className="mt-2 w-9/12">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className="mb-2 rounded-lg border border-[--disableButton] px-4 backdrop-blur-md">
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors ${open === 2 ? "text-[--accordionHeader] hover:!text-blue-700" : "text-[--textSeconday]"
                        }`}
                >
                    <div className="flex justify-center items-center gap-4 w-full">
                        <FaApple />
                        <span>IOS</span>
                    </div>
                </AccordionHeader>
                <AccordionBody className="pt-0">
                    <div className="flex items-center gap-14 relative">
                        <div className=" bg-[--disableHover] h-[500px] min-w-60 mt-9 ml-9 rounded-xl  backdrop:filter shadow-md sticky top-40 p-4">
                            <span className="flex justify-center text-lg font-bold pt-5 text-[--txt]">Versions: 1</span>
                            <div className='w-full mt-16'>
                                {VersionsSectionsIOS.map((section) => (
                                    <div
                                        key={section.id}
                                        className={`flex justify-center mx-7 h-8 pt-1 rounded-md mb-5 hover:cursor-pointer duration-300 ${section.id === selectedVersionSectionIOS ? 'bg-gray-700' : 'bg-gray-900'
                                            }`}
                                        onClick={() => setSelectedVersionSectionIOS(section.id)}
                                    >
                                        <span className='text-gray-300 font-semibold pt-0.5'>{section.label}</span>
                                    </div>
                                ))}
                                <div className="flex justify-center">
                                <PrimaryButton text={"Add"} onClick={() => toast.success("Version Created")} />
                            </div>
                            </div>

                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-center w-full gap-5">
                                <div className="relative flex-1">
                                    <label
                                        htmlFor="name"
                                        className="absolute -top-2 left-2 inline-block  px-1 text-xs font-medium text-[--txt]"
                                    >
                                        Version Key
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full bg-[--inputBg] rounded-md border-0 py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-gray-300/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="key"
                                        defaultValue="jv1SGWJrNe5Z"
                                    />
                                </div>
                                <div className='flex justify-start  items-center flex-1'>
                                    <div className="relative flex items-center w-full gap-4">
                                        <label htmlFor="Role" className="block text-sm leading-6  text-[--txt] font-semibold">
                                            Status
                                        </label>
                                        <div className="mt-2 sm:col-span-2 sm:mt-0 w-full">
                                            <select
                                                id="Role"
                                                name="Role"
                                                autoComplete="Role-name"
                                                className="block w-full rounded-md border-1 bg-[--inputBg] ring-1 ring-inset ring-gray-300/30 py-1.5 text-[--txt] shadow-sm focus:ring-inset  focus:text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 "
                                            >
                                                <option>Active</option>
                                                <option>Blocked</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-5 my-5">
                                <div className="flex-1 flex items-center gap-3">
                                    <span className="text-[--txt] font-semibold">Creation date</span>
                                    <DatePicker />
                                </div>
                                <div className="flex-1 flex items-center gap-3">
                                    <span className="text-[--txt] font-semibold">Date of the last update</span>
                                    <DatePicker />
                                </div>
                            </div>
                            <div className="flex gap-4 h-6 items-center">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded bg-gray-400 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <span className="text-[--txt]">Notify</span>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center gap-3 mt-3 flex-1">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Notification Text (English)
                                    </label>
                                    <div className="mt-2 w-full">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mt-3 flex-1">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Notification Text (French)
                                    </label>
                                    <div className="mt-2 w-full">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-3 flex-1">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                    Notification Text (Arabic)
                                </label>
                                <div className="mt-2 w-9/12">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </AccordionBody>
            </Accordion>

        </>
    );
}