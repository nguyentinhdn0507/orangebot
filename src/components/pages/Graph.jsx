import React, { useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Graph = () => {
  const titleGraph = [
    { id: 1, title: "シナリオ", path: "/chart/graph/attachment" },
    { id: 2, title: "添付ファイル", path: "/chart/graph/scenarioChart" },
    { id: 3, title: "アクセス数", path: "/chart/graph/scenarioChart" },
    { id: 4, title: "開始数・離脱数", path: "/chart/graph/scenarioChart" },
  ];
  const [activeLink, setActiveLink] = useState(true);
  const [activeItem, setActiveItem] = useState(titleGraph.title);

  return (
    <div>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <nav className="flex gap-x-2 items-center border text-colorTextMenuChart bg-colorBgChart rounded-full">
            {titleGraph.map((item, index) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={`${
                  activeItem === item.title
                    ? "bg-bgOrange text-white font-bold"
                    : ""
                }transition duration-300 cursor-pointer py-2 px-5 rounded-full `}
                onClick={() => {
                  setActiveLink(!activeLink);
                  setActiveItem(item.title);
                }}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Graph;
