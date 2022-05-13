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
    },
  ],
};
const options = {
  // scales: {
  //   yAxes: [
  //     {
  //       ticks: {
  //         beginAtZero: true,
  //       },
  //     },
  //   ],
  // },
  plugins: { legend: { display: false } },
  layout: { padding: { bottom: 100 } },
  scales: {
    y: {
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
      grid: {
        color: "#243240",
      },
    },
    x: {
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
    },
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
