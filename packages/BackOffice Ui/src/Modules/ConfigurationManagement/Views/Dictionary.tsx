import PrimaryButton from "@components/Button";
import { TextGenerateEffect } from "@components/Text-Generate-Effect"
import DictionaryTable from "../Components/DictionaryTable";
import { useState } from "react";
import AddDictionary from "../Components/AddDictionary";
import FilterButton from "@components/FilterButton";
const words = `Dictionary Management`;

const my_fields = [
  {
    type: 'text',
    name: 'search',
    label: 'Search'
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'agent', label: 'Agent' }
    ]
  }
];


const Dictionary = () => {
  const [addDictionarySlideOver, setAddDictionarySlideOver] = useState(false);

  //const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <FilterButton fields={my_fields} />
      <div className="flex justify-center items-start gap-4">

        <PrimaryButton text="Add Dictionary" onClick={() => setAddDictionarySlideOver(true)} />
      </div>
      <DictionaryTable />
      <AddDictionary open={addDictionarySlideOver} setOpen={() => setAddDictionarySlideOver(false)} />
    </div>
  )
}

export default Dictionary