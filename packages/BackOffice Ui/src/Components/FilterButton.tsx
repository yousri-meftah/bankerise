
import { BsFilter } from 'react-icons/bs'
import Filter from './Filter'
function FilterButton({filter,setFilter}) {
    

  return (
      <>
        <button
          type="button"
          className=" rounded-md bg-[--disableButton] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:text-[--txt] hover:bg-[--disableHover] duration-300 flex items-center gap-3"
          onClick={()=>setFilter(!filter)}
        >
          <BsFilter size={20} />
          Filter
        </button>

      {filter? <Filter fields={my_fields} close={()=>setFilter(false)} /> : null}
      
      </>
  )
}

export default FilterButton