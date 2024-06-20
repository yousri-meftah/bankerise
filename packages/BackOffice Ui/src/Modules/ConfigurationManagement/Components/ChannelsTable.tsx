
import Pagination from "@components/Pagination";
import { originalRoles } from "@utils/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ChannelAccordion from "./ChannelAccordion";
import { useGetAllChannelsQuery } from '../../../store/admin-API/modules-controller/modules-controller_endpoints'
import { Puff } from "react-loader-spinner";
import { toast } from "react-toastify";


function classifyFeaturesByModule(features) {
    const classifiedFeatures = {};

    features.forEach(feature => {
        const moduleName = feature.featureModuleName;
        if (!classifiedFeatures[moduleName]) {
            classifiedFeatures[moduleName] = [];
        }
        classifiedFeatures[moduleName].push(feature);
    });

    return classifiedFeatures;
}


const ChannelsTable = () => {

    const { data: channels, error, isLoading } = useGetAllChannelsQuery('ADMINISTRATION');
    const [classifiedFeatures, setClassifiedFeatures] = useState({});

    useEffect(() => {
        if (channels) {
            const featuresClassified = classifyFeaturesByModule(channels);
            setClassifiedFeatures(featuresClassified);
        }
    }, [channels]);

    const [records, setRecords] = useState<{ name: string; }[]>([]);
    console.log(channels);
    return (

        <div className=" backdrop-filter backdrop-blur-sm relative">
            <div className="mx-auto max-w-7xl">
                <div className=" py-3">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-[--border-color]">
                                        {isLoading || error ? (
                                            <div className="flex justify-center ">
                                                <Puff
                                                    visible={true}
                                                    height="100"
                                                    width="100"
                                                    color="#9aa1ad"
                                                    ariaLabel="puff-loading"
                                                    wrapperClass=""
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                            Module
                                                        </th>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                            Feature
                                                        </th>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                            WEB
                                                        </th>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                            MOB
                                                        </th>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[--txt] sm:pl-0">
                                                            API
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-[--border-Devide] ">
                                                    {
                                                        Object.entries(classifiedFeatures).map(([moduleName, moduleFeatures], i) => (
                                                            <motion.tr
                                                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                transition={{ duration: 0.2 * i }}
                                                                key={moduleName}>
                                                                <td colSpan="5" className="whitespace-nowrap px-3 py-4 text-sm text-[--txt]">
                                                                    <ChannelAccordion moduleName={moduleName} features={moduleFeatures} />
                                                                </td>
                                                            </motion.tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination setRecords={setRecords} array={originalRoles} pages={6} />
            {error ? toast.error("Failed Fetching Data") : null}
        </div>
    );

}

export default ChannelsTable