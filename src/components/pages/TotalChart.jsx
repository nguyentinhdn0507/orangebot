import React from "react";
import { Outlet } from "react-router";

const TotalChart = () => {
  return (
    <div className="px-10">
      <Outlet></Outlet>
    </div>
  );
};

export default TotalChart;
