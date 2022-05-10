import React, { useState } from "react";
import InputCheckbox from "../form-control/InputCheckbox";
import ScenarioChart from "./ScenarioChart";

const Graph = () => {
  const titleGraph = [
    { id: 1, title: "添付ファイル" },
    { id: 2, title: "シナリオ" },
    { id: 3, title: "アクセス数" },
    { id: 4, title: "開始数・離脱数" },
    // "シナリオ",
    // "アクセス数",
    // "開始数・離脱数",
  ];
  // const [activeItem, setActiveItem] = useState(true);
  return (
    <div>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2 items-center border text-colorTextMenuChart bg-colorMenuChart rounded-full">
            {titleGraph.map((item) => (
              <span
                key={item.id}
                className="bg-bgOrange text-white font-bold cursor-pointer py-2 px-5 rounded-full"
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <ScenarioChart></ScenarioChart>
      </div>
    </div>
  );
};

export default Graph;
