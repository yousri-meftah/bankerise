import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PiLightbulbBold } from 'react-icons/pi';
import InfoModal from './InfoModal';
import SwitchButton from "@components/Switch"

const mapper = {
    "gateway.redirect.web.url": "Redirect WEB URL",
    "application.mobile.versions.enabled": "Mapping WEB Referer",
    "gateway.mapping.web.referer": "Enable Mobile Version",
}

const description_mapper = {
    "gateway.redirect.web.url": "Allows configuring the URL to which the user will be redirected after logging in against the identity provider (Keycloak). For the web environment, we can leave the default value which is {'{baseUrl}/{action}/oauth2/code/{registrationId}'}. The Gateway is able to convert these parameters to the correct URL. {'{baseUrl}'} takes in consideration X-Forwarded headers in case it's running behind a reverse proxy. Don't forget to register this redirect uri in the identity provider client configuration.",
    "application.mobile.versions.enabled": "This parameter is used to enable or disable the mobile version of the application.",
    "gateway.mapping.web.referer": "This parameter is used to map the web application to the gateway in case we have multiple applications served by the same gateway. It can be a referer or a host. It follows Ant path matcher syntax: https://bits.netbeans.org/11.1/javadoc/org-netbeans-modules-project-ant/index.html?org/netbeans/spi/project/support/ant/PathMatcher.html",

}


interface ConfigItem {
    id: number;
    name: string;
    value: string;
    scopeId: string;
    scope: string;
}

interface AppAuthConfigProps {
    configItems: ConfigItem[];
}

const AppAuthConfig: React.FC<AppAuthConfigProps> = ({ configItems }) => {
    console.log("clg = ", configItems)
    const [MobileSection, showMobileSection] = useState(false)
    const [InfoModalOpened, setInfoModal] = useState(false)
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    if (configItems.length === 0) return null;
    return (
        <div className="flex flex-col mx-6">
            <h2 className="text-lg font-semibold leading-7 text-white pb-6">
                Application Authentication Configuration
            </h2>

            <div className="flex flex-col border border-gray-500 rounded-lg p-4 mx-20">
                <div className="flex justify-around">
                        <div className=" flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-[--textPrimary] border-b border-[--colorStart] mb-3">Name</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="block text-sm font-medium leading-6 text-[--textPrimary] border-b border-[--colorStart] mb-3">Value</p>
                        </div>

                    </div>
                {configItems.map((item) => (
                    item.name === "application.mobile.versions.enabled" ?
                        <div>
                     <div className="flex mt-6">
                        <div className="flex-col flex-1">
                            <span className="flex justify-center text-sm font-medium leading-6 text-[--txt]">Enable Mobile Version</span>
                            <p className="text-[--textPrimary] flex justify-center text-center">Does this application serve mobile channels ?</p>
                        </div>
                        <div className="flex-1 my-auto">
                            <div className="sm:col-span-4">
                                <SwitchButton bg={true} state={MobileSection} setstate={showMobileSection}    />
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

                    :
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-between p-2"
                    >
                        <div className="flex-1">
                            <div className='flex items-center mx-3 pt-2 justify-center gap-5'>
                            <div className="bg-yellow-200/70 rounded-md size-6 flex justify-center items-center hover:cursor-pointer hover:scale-105 duration-200 hover:bg-yellow-200 border border-gray-300" onClick={() => {
                                    setTitle(mapper[item.name as keyof typeof mapper]);
                                    setDesc(description_mapper[item.name as keyof typeof description_mapper]);
                                    setInfoModal(true)

                                }}><PiLightbulbBold size={20} color="white" /></div>
                                <span className="block text-md font-medium leading-6 text-white">{mapper[item.name as keyof typeof mapper]}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            {['true', 'false'].includes(item.value.toLowerCase()) ? (
                                <input
                                    type="checkbox"
                                    checked={item.value.toLowerCase() === 'true'}
                                    className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                    readOnly
                                />
                            ) : (
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-[--inputBg] ring-1 ring-inset ring-[--inputBg] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">

                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            value={item.value}
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-[--textPrimary] focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder={item.value}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}

            </div>
            {InfoModalOpened ? <InfoModal open={InfoModalOpened} setOpen={setInfoModal} title={Title} desc={Desc} /> : null}
        </div>

    );
};

export default AppAuthConfig;
