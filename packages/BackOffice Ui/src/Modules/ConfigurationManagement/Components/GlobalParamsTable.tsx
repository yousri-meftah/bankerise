import { useGetglobalparamsQuery, useGetglobalparamsbynameQuery } from "../../../store/admin-API/global-parameter-controller/global_parameter_controller_endpoints";
import SharedTable from "../../../Components/SharedTable";
import { global_reponse } from "../../../store/admin-API/global-parameter-controller/global_parameter_controller_schema";
import FilterButton from "@components/FilterButton";
import { Puff } from "react-loader-spinner";
import Pagination from "@components/Pagination";
import { useEffect, useState } from "react";

const userColumns = [
  { header: 'name', accessor: 'name' },
  { header: 'helpText', accessor: 'helpText' },
  { header: 'value', accessor: 'value' },
];

interface GlobalParam {
  name: string;
  helpText: string;
  value: {
    value: string;
    type: string;
    flag: boolean;
    valueRanges: string[];
  };
}

function transformResponse(response: global_reponse[]): GlobalParam[] {
  if(response.length === 0) return []
  return response.map((item) => ({
    name: item.name,
    helpText: item.helpText,
    value: {
      value: item.paramValue || item.defaultValue || "",
      type: "select",
      flag: true,
      valueRanges: item.valueRanges || [],
    },
  }));
}

const my_fields = [
  {
    type: 'text',
    name: 'search',
    label: 'Search'
  },
];

const GlobalParamsTable = () => {
  const [queryParams, setQueryParams] = useState<{ name: string }>();
  const { data: initialData, error: initialError, isLoading: initialLoading } = useGetglobalparamsQuery({});
  const { data: filteredData, error: filterError, isLoading: filterLoading } = useGetglobalparamsbynameQuery(queryParams?.name);
  const [records, setRecords] = useState<GlobalParam[]>([]);
  const [loading, setLoading] = useState(true);
  //console.log(" q = ",queryParams)
  const handleFilter = (filterState: { [key: string]: string }) => {
    //console.log("filterState = ", filterState)
    setQueryParams({ name: filterState.search });
  };

  useEffect(() => {
    if (queryParams?.name) {
      if (filteredData&&!filterLoading) {
        setRecords(transformResponse(filteredData.content as global_reponse[]));
        setLoading(false);
      }
    } else {
      if (initialData) {
        setRecords(transformResponse(initialData as global_reponse[]));
        setLoading(false);
      }
    }
  }, [initialData, filteredData, queryParams]);

  if (initialLoading || filterLoading || loading) {
    return (
      <div className="m-auto flex justify-center pt-[150px]">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#9aa1ad"
          ariaLabel="puff-loading"
          wrapperClass=""
        />
      </div>
    );
  }

  if (initialError || filterError) {
    return (
      <div className="m-auto flex justify-center pt-[150px]">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#9aa1ad"
          ariaLabel="puff-loading"
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="px-16">
      <FilterButton fields={my_fields} onFilter={handleFilter} />

        <>
          <SharedTable data={records} columns={userColumns} />
          <Pagination setRecords={setRecords} array={records} pages={9} />
        </>

    </div>
  );
};

export default GlobalParamsTable;
