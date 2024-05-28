import FilterButton from "@components/FilterButton";
import AVUT from '../Components/available_users_table'
import { TextGenerateEffect } from "@components/Text-Generate-Effect";

const words = `available users`;

function AvailableUsers() {
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words={words} /></span>

      <AVUT />
    </div>
  )
}

export default AvailableUsers