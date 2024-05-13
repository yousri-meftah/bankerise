import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import ProcessConfigTable from "../Components/ProcessConfigTable";
import FilterButton from "@components/FilterButton";
const words = `Process Configuration`;
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
const ProcessConfig = () => {
  //const [filter, setFilter] = useState(false)
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <FilterButton fields={my_fields} />
      <ProcessConfigTable />

    </div>
  )
}

export default ProcessConfig