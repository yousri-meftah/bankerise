import PrimaryButton from "@components/Button";
import { TextGenerateEffect } from "@components/Text-Generate-Effect"
import { BsFilter } from "react-icons/bs";
import DictionaryTable from "../Components/DictionaryTable";
import { useState } from "react";
import FilterModal from "@components/FilterModal";
import AddDictionary from "../Components/AddDictionary";

const words = `Dictionary Management
`;
const Dictionary = () => {
  const [filter, setFilter] = useState(false)
  const [addDictionarySlideOver, setAddDictionarySlideOver] = useState(false);
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
        <PrimaryButton text="Add Dictionary" onClick={() => setAddDictionarySlideOver(true)} />
      </div>
      <DictionaryTable />
      <FilterModal open={filter} setOpen={setFilter} />
      <AddDictionary open={addDictionarySlideOver} setOpen={() => setAddDictionarySlideOver(false)} />
    </div>
  )
}

export default Dictionary