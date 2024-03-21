import { useState } from "react"
import SwitchButton from "@components/Switch"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
const words = `Application Information
`;
const AppInformations = () => {
    const [MobileSection, showMobileSection] = useState(false)
    return (
        <form>
            <div className="space-y-12 mt-10 mx-10">
                <div className=" pb-12">
                    <span className="font-extrabold text-xl flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
                    <div className="flex items-center">
                        <div className='flex flex-col flex-1 mx-8 gap-3'>
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled
                                            placeholder="app name"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="target" className="block text-sm font-medium leading-6 text-white">
                                    Target Audience
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="target"
                                            id="target"
                                            autoComplete="target"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled
                                            placeholder="ADMINISTRATION"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="type" className="block text-sm font-medium leading-6 text-white">
                                    Application Type
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="type"
                                            id="type"
                                            autoComplete="type"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            disabled
                                            placeholder="REGULAR_APPLICATION"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='flex-1 mx-8'>
                            <div className="sm:col-span-3 flex flex-col gap-5">
                                <div>
                                    <label htmlFor="oauth" className="block text-sm font-medium leading-6 text-white">
                                        Oauth Client ID
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="oauth"
                                            name="oauth"
                                            autoComplete="oauth"
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:bg-gray-700 focus:text-white focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                                        >
                                            <option>Bankerise APP</option>

                                        </select>
                                    </div></div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mx-6 ">
                <h2 className="text-lg font-semibold leading-7 text-white pb-6">Application Authentication Configuration</h2>

                <div className="flex flex-col w-full border border-gray-500 rounded-lg p-4">
                    <div className="flex justify-around">
                        <div className=" flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-gray-300">Name</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-gray-300">Value</p>
                        </div>

                    </div>
                    <div className="flex">
                        <div className="flex-col flex-1">
                            <span className="block text-sm font-medium leading-6 text-gray-400">Redirect WEB URL</span>
                            <p className="text-gray-200">Allows configuring the URL to which the user will be redirected after logging in against the identity provider (Keycloak). For the web environment, we can leave the default value which is {'{baseUrl}/{action}/oauth2/code/{registrationId}'}. The Gateway is able to convert these parameters to the correct URL. {'{baseUrl}'} takes in consideration X-Forwarded headers in case it's running behind a reverse proxy. Don't forget to register this redirect uri in the identity provider client configuration.</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">

                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value="{baseUrl}/{action}/oauth2/code/{registrationId}"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="{baseUrl}/{action}/oauth2/code/{registrationId}"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="flex-col flex-1">
                            <span className="block text-sm font-medium leading-6 text-gray-400 ">Mapping WEB Referer</span>
                            <p className="text-gray-200">This parameter is used to map the web application to the gateway in case we have multiple applications served by the same gateway. It can be a referer or a host. It follows Ant path matcher syntax: https://bits.netbeans.org/11.1/javadoc/org-netbeans-modules-project-ant/index.html?org/netbeans/spi/project/support/ant/PathMatcher.html</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">

                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value="http://studio.platform.test.proxym-it.tn/**"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Authorized redirect URIs"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex mt-6">
                        <div className="flex-col flex-1">
                            <span className="block text-sm font-medium leading-6 text-gray-400">Enable Mobile Version</span>
                            <p className="text-gray-200">Does this application serve mobile channels ?</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <div onClick={() => showMobileSection(!MobileSection)} className="sm:col-span-4">
                                <SwitchButton />
                            </div>
                        </div>
                    </div>
                    {MobileSection ?
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4  }}
                            className="flex mt-6">
                            <div className="flex-col flex-1">
                                <span className="block text-sm font-medium leading-6 text-gray-400">Redirect Mobile Scheme</span>
                                <p className="text-[--textPrimary]">Allows configuring the URL to which the user will be redirected after logging in against the identity provider (Keycloak). It should be a mobile url scheme such as bankerise://callback or bankerise://login. Don't forget to register this redirect uri in the identity provider client configuration.</p>
                            </div>
                            <div className="flex-1 my-auto">
                                <div className="sm:col-span-4">

                                    <div className="mt-2">
                                        <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
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
                <button
                    type="submit"
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Save
                </button>
                <button type="button" className="text-sm font-semibold leading-6 text-white">
                    Cancel
                </button>

            </div>
        </form>
    )
}

export default AppInformations