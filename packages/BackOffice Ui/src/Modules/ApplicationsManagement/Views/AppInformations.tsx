import { useState } from "react"
import SwitchButton from "@components/Switch"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { PiLightbulbBold } from "react-icons/pi";
import InfoModal from '../Components/InfoModal'
import PrimaryButton from "@components/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const words = `Application Information
`;
const AppInformations = () => {
    const [MobileSection, showMobileSection] = useState(false)
    const [InfoModalOpened, setInfoModal] = useState(false)
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")

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
                                            placeholder="app name"
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
                                            placeholder="ADMINISTRATION"
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
                                            placeholder="REGULAR_APPLICATION"
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

            <div className="flex flex-col mx-6 ">
                <h2 className="text-lg font-semibold leading-7 text-white pb-6">Application Authentication Configuration</h2>

                <div className="flex flex-col  border border-gray-500 rounded-lg p-4 mx-20">
                    <div className="flex justify-around">
                        <div className=" flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-[--textPrimary] border-b border-[--colorStart] mb-3">Name</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-[--textPrimary] border-b border-[--colorStart] mb-3">Value</p>
                        </div>

                    </div>
                    <div className="flex">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex-col flex-1">
                            <div className="flex items-center mx30 pt-2 justify-center gap-5">
                                <div className="bg-yellow-200/70 rounded-md size-6 flex justify-center items-center hover:cursor-pointer hover:scale-105 duration-200 hover:bg-yellow-200 border border-gray-300" onClick={() => {
                                    setTitle("Redirect WEB URL");
                                    setDesc("Allows configuring the URL to which the user will be redirected after logging in against the identity provider (Keycloak). For the web environment, we can leave the default value which is {'{baseUrl}/{action}/oauth2/code/{registrationId}'}. The Gateway is able to convert these parameters to the correct URL. {'{baseUrl}'} takes in consideration X-Forwarded headers in case it's running behind a reverse proxy. Don't forget to register this redirect uri in the identity provider client configuration.");
                                    setInfoModal(true)

                                }}><PiLightbulbBold size={20} color="white" /></div>
                                <span className="block text-md font-medium leading-6 text-[--textPrimary]">Redirect WEB URL :</span>

                            </div>


                        </motion.div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">

                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value="{baseUrl}/{action}/oauth2/code/{registrationId}"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="{baseUrl}/{action}/oauth2/code/{registrationId}"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex-col flex-1">
                            <div className="flex items-center mx-3 pt-2 justify-center gap-5">
                                <div className="bg-yellow-200/70 rounded-md size-6 flex justify-center items-center hover:cursor-pointer hover:scale-105 duration-200 hover:bg-yellow-200 border border-gray-300" onClick={() => {
                                    setTitle("Mapping WEB Referer");
                                    setDesc("This parameter is used to map the web application to the gateway in case we have multiple applications served by the same gateway. It can be a referer or a host. It follows Ant path matcher syntax: https://bits.netbeans.org/11.1/javadoc/org-netbeans-modules-project-ant/index.html?org/netbeans/spi/project/support/ant/PathMatcher.html");
                                    setInfoModal(true)

                                }}><PiLightbulbBold size={20} color="white" /></div>
                                <span className="block text-md font-medium leading-6 text-[--textPrimary]">Mapping WEB Referer :</span>

                            </div>

                        </motion.div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">

                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value="http://studio.platform.test.proxym-it.tn/**"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Authorized redirect URIs"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {InfoModalOpened ? <InfoModal open={InfoModalOpened} setOpen={setInfoModal} title={Title} desc={Desc} /> : null}
                    <div className="flex mt-6">
                        <div className="flex-col flex-1">
                            <span className="flex justify-center text-sm font-medium leading-6 text-[--txt]">Enable Mobile Version</span>
                            <p className="text-[--textPrimary] flex justify-center text-center">Does this application serve mobile channels ?</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">
                                <div className="w-fit" onClick={() => showMobileSection(!MobileSection)}>
                                    <SwitchButton />
                                </div>

                            </div>
                        </div>
                    </div>
                    {MobileSection ?
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex mt-6">
                            <div className="flex-col flex-1">
                                <div className="flex items-center mx30 pt-2 justify-center gap-5">
                                    <div className="bg-yellow-200/70 rounded-md size-6 flex justify-center items-center hover:cursor-pointer hover:scale-105 duration-200 hover:bg-yellow-200 border border-gray-300" onClick={() => {
                                        setTitle("Redirect Mobile Scheme");
                                        setDesc("Allows configuring the URL to which the user will be redirected after logging in against the identity provider (Keycloak). It should be a mobile url scheme such as bankerise://callback or bankerise://login. Don't forget to register this redirect uri in the identity provider client configuration.");
                                        setInfoModal(true)

                                    }}><PiLightbulbBold size={20} color="white" /></div>
                                    <span className="block text-md font-medium leading-6 text-[--textPrimary]">Redirect Mobile Scheme :</span>
                                </div>

                            </div>
                            <div className="flex-1 my-auto">
                                <div className="sm:col-span-4">

                                    <div className="mt-2">
                                        <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Redirection URL"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div> : null}

                </div>
            </div>

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