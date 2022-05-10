import React from "react";
import { Outlet } from "react-router";

const TotalChart = () => {
  return (
    <div className="px-10 ">
      {/* <Scenario></Scenario> */}
      {/* <Graph></Graph>
      <ScenarioChart></ScenarioChart> */}
      <Outlet></Outlet>
    </div>
  );
};

export default TotalChart;
