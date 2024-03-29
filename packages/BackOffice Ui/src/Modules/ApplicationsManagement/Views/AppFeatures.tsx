import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { useEffect, useState } from 'react';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { permissions } from '@utils/constants'
import { motion } from "framer-motion";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import AppStatus from "../Components/AppStatus";
import Accordion from "@components/Accordion";
import { SlideNextButton } from "../Components/SlideNextButton";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const words = `Application Features Catalogue
`;
const AppFeatures = () => {

  const [openPermissions, setOpenPermissions] = useState<string[]>([]);
  const togglePermission = (permissionId: string) => {
    setOpenPermissions((prevOpenPermissions) => {
      if (prevOpenPermissions.includes(permissionId)) {
        return prevOpenPermissions.filter((id) => id !== permissionId);
      } else {
        return [...prevOpenPermissions, permissionId];
      }
    });
  };
  const halfLength = Math.ceil(permissions.length / 2);
  const firstHalf = permissions.slice(0, halfLength);
  const secondHalf = permissions.slice(halfLength);
 
  const [sliderSettings, setSliderSettings] = useState({
    slidesPreview: 1,
    spaceBetween: 60,
    direction: "vertical",
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 5
      }
    }
  });
  const renderSubPermissions = (subPermissions: any[], parentId: string) => {
    return subPermissions.map((subPermission) => (
      <div key={subPermission.id} className={`ml-6 ${openPermissions.includes(parentId) ? 'block' : 'hidden'}`}>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id={subPermission.id}
              aria-describedby={`${subPermission.id}-description`}
              name={subPermission.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={subPermission.id} className="font-medium text-gray-200">
              {subPermission.label}
            </label>
            <p id={`${subPermission.id}-description`} className="text-gray-500">
              {subPermission.description}
            </p>
          </div>
        </div>
      </div>
    ));
  };


  const renderPermissions = (perms: any[]) => {
    return perms.map((permission, i) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.2 * i }}
        className="m-5">
        <div key={permission.id} className="relative flex items-start gap-2 ">
          {permission.subPermissions && (
            <div onClick={() => togglePermission(permission.id)}>
              {openPermissions.includes(permission.id) ? (
                <IoChevronUpSharp color="gray" className="duration-200 " />
              ) : (
                <IoChevronDownSharp color="gray" className="duration-200 " />
              )}
            </div>
          )}
          <div className="flex h-6 items-center">
            <input
              id={permission.id}
              aria-describedby={`${permission.id}-description`}
              name={permission.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor={permission.id} className="font-medium text-gray-200">
              {permission.label}
            </label>
            <p id={`${permission.id}-description`} className="text-gray-500">
              {permission.description}
            </p>
            {permission.subPermissions && renderSubPermissions(permission.subPermissions, permission.id)}
          </div>
        </div>
      </motion.div>
    ));
  };

  useEffect(()=> {
    if (sliderSettings) {
      console.log('sliderSettings',sliderSettings);
    }
  }, [sliderSettings])

  return (
    <>
      {/* TITLE HERE */}
      <div className="space-y-12 mt-10 mx-10">
        <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} />
        </span>
      </div>
      <AppStatus role={false} />

      <div className=" h-80 flex mx-20">
        <Swiper {...sliderSettings} className=" flex-1 flex justify-center items-center relative">
          <SlideNextButton pos={true} setter={setSliderSettings}/>

          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>

        </Swiper>
        <Swiper {...sliderSettings} className=" flex-1 flex justify-center items-center">
          <SlideNextButton />

          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>
          <SwiperSlide className="w-[400px] mx-auto">
            <Accordion />
          </SwiperSlide>


        </Swiper>


      </div>



    </>
  )
}

export default AppFeatures;
