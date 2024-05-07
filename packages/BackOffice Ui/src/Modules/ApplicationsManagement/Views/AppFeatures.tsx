import React, { useEffect, useState } from 'react';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AppStatus from "../Components/AppStatus";
import Accordion from "@components/Accordion";
import { SlideNextButton } from "../Components/SlideNextButton";
import { useGetAllFeaturesbyIdQuery } from "../../../store/admin-API/modules-controller/modules-controller_endpoints";
import { Features } from "../utils/Types";
import { Puff } from 'react-loader-spinner'
import { TextGenerateEffect } from '@components/Text-Generate-Effect';
import { toast } from 'react-toastify';

const words = `Application Features Catalogue`;

const AppFeatures = () => {
  const [featuresArray, setFeaturesArray] = useState<Features[]>([]);
  const [leftFeatures, setLeftFeatures] = useState<Features[]>([]);
  const [rightFeatures, setRightFeatures] = useState<Features[]>([]);
  const { data: feature, error, isLoading } = useGetAllFeaturesbyIdQuery(51);

  useEffect(() => {
    if (feature) {
      const halfIndex = Math.ceil(feature.length / 2);
      const leftHalf = feature.slice(0, halfIndex);
      const rightHalf = feature.slice(halfIndex);
      setLeftFeatures(leftHalf);
      setRightFeatures(rightHalf);
    }
  }, [feature]);

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

  return (
    <>
      {/* TITLE HERE */}
      <div className="space-y-12 mt-10 mx-10">
        <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>
      </div>
      <AppStatus role={false} />

      <div className="h-80 flex mx-20 relative">
        <Swiper {...sliderSettings} className="flex-1 flex justify-center items-center relative">
          <SlideNextButton pos={true} setter={setSliderSettings} />
          {isLoading || error ? (
            <div className="absolute">
              <Puff
                visible={true}
                height="80"
                width="80"
                color="#9aa1ad"
                ariaLabel="puff-loading"
                wrapperClass=""
              />
            </div>
          ) : (
            leftFeatures.map((feature) => (
              <SwiperSlide key={feature.id} className="w-[400px] mx-auto">
                <Accordion feature={feature} />
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <Swiper {...sliderSettings} className="flex-1 flex justify-center items-center">
          <SlideNextButton />
          {isLoading || error ? (
            <div className="absolute">
               <Puff
                visible={true}
                height="80"
                width="80'"
                color="#9aa1ad"
                ariaLabel="puff-loading"
                wrapperClass=""
              />
            </div>
          ) : (
            rightFeatures.map((feature) => (
              <SwiperSlide key={feature.id} className="w-[400px] mx-auto">
                <Accordion feature={feature} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        {
          error? toast.error("Failed Fetching data"):  null 
        }
      </div>
    </>
  )
}

export default AppFeatures;
