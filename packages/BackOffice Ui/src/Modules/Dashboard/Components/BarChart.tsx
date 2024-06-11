import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
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
      text: 'Logins Per Application',
      color: 'rgb(17 24 39 )',
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Animation easing function
    },
  },

};

const BarChart = ({ data }) => {
  return <Bar options={options} data={data} />;
};

export default BarChart;

