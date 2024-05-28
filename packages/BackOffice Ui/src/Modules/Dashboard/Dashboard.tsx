
import BarChart from './Components/BarChart';
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import PieChart from './Components/PieChart';


const Dashboard = () => {
  // Example data for the chart
  const BarData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sample Data',
      data: [65, 59, 80, 81, 56, 55, 40], // Sample data values
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color for the bars
      borderColor: 'rgba(54, 162, 235, 1)', // Border color for the bars
      borderWidth: 1
    }]
  };
  const PieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'User Distribution',
        data: [12, 19, 3, 5, 2, 3],
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
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words="Dashboard" /></span>
      <div className='flex justify-center items-center mx-auto'>
        <div className='w-2/3 bg-white/80 rounded-2xl px-auto p-4 m-7 shadow-xl'>
        <BarChart data={BarData} />
      </div>
      <div className='bg-white/80 w-1/3 rounded-2xl px-auto p-4 m-7 '>
        <PieChart data={PieData}/>
      </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
