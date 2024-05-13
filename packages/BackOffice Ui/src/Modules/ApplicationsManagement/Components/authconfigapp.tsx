import React from 'react';
import { motion } from 'framer-motion';

const mapper = {
    "gateway.redirect.web.url": "Redirect WEB URL",
    "application.mobile.versions.enabled": "Mapping WEB Referer",
    "gateway.mapping.web.referer": "Enable Mobile Version",
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
    return (
        <div className="flex flex-col mx-6">
            <h2 className="text-lg font-semibold leading-7 text-white pb-6">
                Application Authentication Configuration
            </h2>
            <div className="flex flex-col border border-gray-500 rounded-lg p-4 mx-20">
                {configItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-between p-2"
                    >
                        <div className="flex-1">
                            <span className="block text-md font-medium leading-6 text-white">{mapper[item.name as keyof typeof mapper]}</span>
                        </div>
                        <div className="flex-1">
                            {['true', 'false'].includes(item.value.toLowerCase()) ? (
                                <input
                                    type="checkbox"
                                    checked={item.value.toLowerCase() === 'true'}
                                    className="align-middle"
                                    readOnly
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={item.value}
                                    className="border border-gray-300 rounded px-2 py-1 w-full"
                                    readOnly
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AppAuthConfig;
