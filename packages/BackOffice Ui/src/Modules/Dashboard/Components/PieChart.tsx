import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'User Distribution',
      color: 'rgb(17 24 39)',

    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Animation easing function
    },
  },
};

const PieChart = ({ data }) => {
  return <Pie options={options} data={data}/>;
};

export default PieChart;
