import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";

const words = `Process Configuration
`;
const ProcessConfig = () => {
  const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <div className="flex justify-center items-center gap-4">
        <button
          type="button"
          onClick={() => setFilter(true)}
          className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
        >
          <BsFilter size={20} />
          Filter
        </button>
        </div>

        </div>
  )
}

export default ProcessConfig