
import BarChart from './Components/BarChart';
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import PieChart from './Components/PieChart';
import Dropdown from './Components/Dropdown';
import LineChart from './Components/LineChart';
import {useGetloginstatsQuery,useGetplatforminfoQuery,useGethourstatsQuery} from "../../store/admin-API/dashboard-controller/dashboard_controller_endpoints";
import { Puff } from 'react-loader-spinner';
const LineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    datasets: [
      {
        label: 'API Requests',
        data: [65, 59, 80, 81, 56, 4, 40, 45, 23, 17, 35, 65, 80, 85, 78, 92, 105, 75, 60, 45, 32, 55, 65, 72],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };
type DataItem = {
    name: string;
    count: number;
};

function splitData(data: DataItem[]): { names: string[], counts: number[] } {
    const names: string[] = [];
    const counts: number[] = [];

    data.forEach(item => {
        names.push(item.name);
        counts.push(item.count);
    });

    return { names, counts };
}


type ApplicationDataItem = {
    applicationName: string;
    count: number;
};

function splitApplicationData(data: ApplicationDataItem[]): { applicationNames: string[], applicationCounts: number[] } {
    const applicationNames: string[] = [];
    const applicationCounts: number[] = [];

    data.forEach(item => {
        applicationNames.push(item.applicationName);
        applicationCounts.push(item.count);
    });

    return { applicationNames, applicationCounts };
}

function getFormattedDate(): string {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
const Dashboard = () => {
  const { data, error, isLoading } = useGetloginstatsQuery(0);
  const { data: platformData, error: platformError, isLoading: platformIsLoading } = useGetplatforminfoQuery({});
  const { data: hourData, error: hourError, isLoading: hourIsLoading } = useGethourstatsQuery(getFormattedDate());
  //console.log("platformData = ",platformData)
  //console.log("data = ", hourData)
  if (isLoading || platformIsLoading||hourIsLoading) {
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
  if (error || platformError||hourError) {
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
  const { names, counts } = splitData(platformData as DataItem[]);
  const { applicationNames, applicationCounts } = splitApplicationData(data as ApplicationDataItem[]);
  const BarData = {
    labels: applicationNames,
    datasets: [{
      label: 'Logins per application',
      data: applicationCounts, // Sample data values
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color for the bars
      borderColor: 'rgba(54, 162, 235, 1)', // Border color for the bars
      borderWidth: 1
    }]
  };
  const PieData = {
    labels: names,
    datasets: [
      {
        label: 'User Distribution',
        data: counts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
     <div className="space-y-12 mt-10">
      <span className="flex justify-center my-7 pb-6">
        <TextGenerateEffect words="Dashboard" />
      </span>
      <div className="flex justify-center items-center mx-auto relative">
        <div
          className="bg-white/80 rounded-2xl p-4 m-7 shadow-xl"
          style={{ height: '500px', width: '900px' }}
        >
          <BarChart data={BarData} />
        </div>
        <div
          className="bg-white/80 rounded-2xl p-4 m-7"
          style={{ height: '500px', width: '500px' }}
        >
          <PieChart data={PieData} />
        </div>
      </div>
    <div className='bg-white/80 h-fit rounded-2xl px-auto p-4 m-7 shadow-xl w-[90%] mx-auto'>
        <Dropdown/>
        <LineChart data={LineData}/>
      </div>
    </div>
  );
}

export default Dashboard;
