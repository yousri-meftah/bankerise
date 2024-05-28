import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import Filter from './Filter'

type Option = {
    value: string | number;
    label: string;
};

type FieldProps = {
    type: 'select' | 'text' | 'date' | 'range' | 'checkbox' | 'radio';
    name: string;
    label: string;
    options?: Option[];
    min?: number;
    max?: number;
};

type SharedFilterProps = {
  fields: FieldProps[];
  onFilter: (filterState: { [key: string]: string }) => void;
};




const FilterButton: React.FC<SharedFilterProps>  = ({ fields , onFilter }) => {
    const [filter, setFilter] = useState(false)

  return (
      <div className="space-y-12 ">
      <div className="flex justify-center items-center gap-4">
        <button
          type="button"
          className="rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
          onClick={() => setFilter(!filter)}
        >
          <BsFilter size={20} />
          Filter
        </button>
      </div>


        {filter && <div>
          <Filter fields={fields} onFilter={onFilter} close={() => setFilter(false)} />
        </div>}

    </div>
  )
}

export default FilterButton