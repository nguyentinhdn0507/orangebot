import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const data = {
  labels: [
    "10am",
    "11am",
    "11am",
    "01am",
    "02am",
    "03am",
    "04am",
    "05am",
    "06am",
    "07am",
  ],
  datasets: [
    {
      data: [450, 550, 350, 410, 100, 300, 350, 300, 550, 610],
      pointRadius: 6,
      pointBorderColor: "#AE8FF7",
      fill: true,
      tension: 0.4,
      
    },
  ],
};
const options = {
  plugins: { legend: { display: false } },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
