import React, { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  const ref = useRef(null);
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
        borderColor: "#5bc4ff",
        backgroundColor: "#3e95cd21",
        fill: true,
        tension: 0.4,
      },
    ],
  });
  const createGradient = (ctx, area, start, end) => {
    const colorStart = start;
    const colorEnd = end;
    const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);
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
          "#5bc4ff21",
          "#ff5bef21"
        ),
        borderColor: createGradient(ref.current.ctx, ref.current.chartArea, "#5bc4ff", "#ff5bef"),
      })),
    });
  }, []);
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 800,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} ref={ref} />
    </div>
  );
};

export default LineChart;
