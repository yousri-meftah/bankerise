import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';


const Pagination = ({setRecords,array,pages}:any) => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = pages; // Number of records per page
    const totalRecords = array.length;
    const totalPages = Math.ceil(totalRecords / pageSize);



    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, totalRecords);
        //console.log("firstIndex",startIndex , "endIndex",endIndex , "totalRecords",totalRecords)
        setRecords([])
        setRecords(array.slice(startIndex, endIndex));
    }, [currentPage, pageSize, totalRecords]);

  return (
    <div className="pt-5 p-24 sticky bottom-0 mt-20">
                <nav className="flex items-center justify-between border-t border-[--border-color] px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <button
                            type="button"
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-[--textSeconday] hover:border-gray-300 hover:text-gray-400 disabled:text-gray-500/60 disabled:cursor-not-allowed"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Previous
                        </button>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                            <a
                                href="#"
                                key={n}
                                className={`${currentPage === n
                                    ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                                    : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-400'
                                    }`}
                                onClick={() => setCurrentPage(n)}
                            >
                                {n}
                            </a>
                        ))}
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-[--textSeconday] hover:border-gray-300 hover:text-gray-400 disabled:text-gray-500/60 disabled:cursor-not-allowed"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </div>
  )
}

export default Pagination