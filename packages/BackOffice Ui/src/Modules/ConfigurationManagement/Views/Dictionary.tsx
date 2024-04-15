import PrimaryButton from "@components/Button";
import { TextGenerateEffect } from "@components/Text-Generate-Effect"
import { BsFilter } from "react-icons/bs";
import DictionaryTable from "../Components/DictionaryTable";
import { useState } from "react";
import AddDictionary from "../Components/AddDictionary";
import Filter from "@components/Filter";

const words = `Dictionary Management
`;
const Dictionary = () => {
  const [addDictionarySlideOver, setAddDictionarySlideOver] = useState(false);
  const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <div className="flex justify-center items-center gap-4">
        <button
          type="button"
          className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
          onClick={()=>setFilter(!filter)}
        >
          <BsFilter size={20} />
          Filter
        </button>
        <PrimaryButton text="Add Dictionary" onClick={() => setAddDictionarySlideOver(true)} />
      </div>
      {/* FILTER COMPONENT */}
      {filter? <Filter close={()=>setFilter(false)} /> : null}
    

      <DictionaryTable />
      <AddDictionary open={addDictionarySlideOver} setOpen={() => setAddDictionarySlideOver(false)} />
    </div>
  )
}

export default Dictionary