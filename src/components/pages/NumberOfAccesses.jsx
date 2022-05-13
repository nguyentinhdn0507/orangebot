import React from "react";
import { arrowdownfill, turbo } from "../../svg";
import LineChart from "../chart/LineChart";

const NumberOfAccesses = () => {
  return (
    <div className="bg-white mt-5 rounded-lg p-4">
      <div className="flex gap-x-2 items-center">
        <p>シナリオ:</p>
        <div>
          <img src={turbo} alt="" />
        </div>
        <div className="flex gap-x-2 items-center">
          {" "}
          <h3>航空券予約</h3>
          <div>
            <img src={arrowdownfill} alt="" />
          </div>
        </div>
      </div>
      <div>
        <LineChart></LineChart>
      </div>
    </div>
  );
};

export default NumberOfAccesses;
