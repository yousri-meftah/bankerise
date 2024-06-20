import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Application Calls Activity',
      color: 'rgb(17 24 39)',
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Animation easing function
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'rgb(17 24 39)', // X-axis tick color
      }
    },
    y: {
      ticks: {
        color: 'rgb(17 24 39)', // Y-axis tick color
      }
    },
  },
};

const LineChart = ({ data }) => {
  return <Line options={options} data={data} />;
};

export default LineChart;