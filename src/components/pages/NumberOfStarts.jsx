import React from "react";
import BarChart from "../chart/BarChart";
import LineChart from "../chart/LineChart";

const NumberOfStarts = () => {
  return (
    <div className="mt-5">
      <div className="bg-white px-4 py-5 rounded-lg">
        {" "}
        <h3 className="font-bold text-black">チャットボットの途中で離脱数 </h3>
        <div className="mt-5">
          <BarChart></BarChart>
        </div>
      </div>
      <div className="bg-white mt-5 px-4 py-5 rounded-lg">
        {" "}
        <h3 className="font-bold text-black">チャットボットの途中で離脱数 2</h3>
        <div className="mt-5">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
  );
};

export default NumberOfStarts;
