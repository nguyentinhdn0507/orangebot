import React, { useState, useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const BarChart = () => {
  const ref = useRef(null);
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 700,
      },
    },
  };
  const [data, setData] = useState({
    labels: [
      "10am",
      "11am",
      "12am",
      "01am",
      "02am",
      "03am",
      "04am",
      "05am",
      "06am",
      "07am",
      "08am",
      "09am",
      "10am",
    ],
    datasets: [
      {
        data: [452, 250, 470, 320, 330, 210, 420, 150, 302, 305, 610, 500, 640],
        label: "",
        fill: true,
        tension: 0.4,
        barThickness: 10,
      },
    ],
  });
  const createGradient = (ctx, area, start, end) => {
    const colorStart = start;
    const colorEnd = end;
    const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  };
  useEffect(() => {
    setData({
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(
          ref.current.ctx,
          ref.current.chartArea,
          "#344FDB",
          "#CF6BFF"
        ),
      })),
    });
  }, []);
  return (
    <div>
      <Bar data={data} options={options} ref={ref} />
    </div>
  );
};

export default BarChart;
