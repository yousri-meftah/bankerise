import { motion } from "framer-motion"
import { TextGenerateEffect } from "@components/Text-Generate-Effect";

import PrimaryButton from "@components/Button";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetApplicationByIdQuery } from "../../../store/admin-API/applications-controller/applications_controller_endpoints";
import AuthenticationConfiguration from "../Components/authconfigapp";
import { attribute } from "../../../store/admin-API/applications-controller/application_controller_schemas";
const words = `Application Information`;


const AppInformations  = () => {
    const { id } = useParams();
    //console.log(id)

    const { data, error, isLoading } = useGetApplicationByIdQuery({id,attr : true});
    if (isLoading) {
    return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: </p>;
    }
    const myconfig = data.attributes.filter((item: attribute) => Object.prototype.hasOwnProperty.call(item, 'id'));
    return (
        <form>
            <div className="space-y-12 mt-10 mx-10">
                <div className=" pb-12">
                    <span className="font-extrabold text-xl flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
                    <div className="flex items-center">
                        <div className='flex flex-col flex-1 mx-8 gap-3'>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled
                                            readOnly

                                            placeholder={data.name}
                                        />
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }} className="sm:col-span-4">
                                <label htmlFor="target" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                    Target Audience
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="target"
                                            id="target"
                                            autoComplete="target"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled

                                            readOnly
                                            placeholder={data.audience}
                                        />
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }} className="sm:col-span-4">
                                <label htmlFor="type" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                    Application Type
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="type"
                                            id="type"
                                            autoComplete="type"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled

                                            readOnly
                                            placeholder={data.type}
                                        />
                                    </div>
                                </div>

                            </motion.div>

                        </div>
                        <div className='flex-1 mx-8'>
                            <div className="sm:col-span-3 flex flex-col gap-5">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }} >
                                    <label htmlFor="oauth" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Oauth Client ID
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="oauth"
                                            name="oauth"
                                            autoComplete="oauth"
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:bg-[--inputBg] focus:text-[--textPrimary] focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                                        >
                                            <option>Bankerise APP</option>

                                        </select>
                                    </div></motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }} className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-[--textPrimary]">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-[--inputBg] py-1.5 text-[--textPrimary] shadow-sm ring-1 ring-inset ring-[--inputBg] focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<AuthenticationConfiguration configItems={myconfig} />

            <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link to={"/private/applications-management"}>
                    <button type="button" className="text-sm font-semibold leading-6 text-[--textPrimary]">
                        Cancel
                    </button>
                </Link>
                <Link to={"/private/applications-management"}  >
                    <PrimaryButton text={"Save"} onClick={() => toast.success("Successfully Saved.")} />
                </Link>
            </div>


        </form >
    )
}

export default AppInformations