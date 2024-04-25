import PrimaryButton from "@components/Button";
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { BsFilter } from "react-icons/bs";
import SegmentsTable from "../Components/SegmentsTable";
import { useState } from "react";
import AddSegment from "../Components/AddSegmentSlideOver";

const words = `Segments
`;
const AppSegments = () => {
  const [addSegement,  setAddSegment] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <AddSegment open={addSegement} setOpen={()=>setAddSegment(false)}/>
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <div className="w-full flex justify-center items-center gap-4 relative">
        <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Master Segement
        </span>
        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
          Segment
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Sub Segement
        </span>
        <div className="absolute right-20">
          <div className="flex justify-center items-center gap-3">
          <button
          type="button"
          className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
        >
          <BsFilter size={20} />
          Filter
        </button>
            <PrimaryButton text={"Add"} onClick={()=>setAddSegment(true)} />
          </div>
          
        </div>
      </div>

      <SegmentsTable/>
    </div>

  )
}

export default AppSegments