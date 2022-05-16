import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
  labels: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  datasets: [
    { data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 45, 50, 60], barThickness: 10 },
  ],
};
const options = { plugins: { legend: { display: false } } };
const BarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
