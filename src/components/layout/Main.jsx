import React, { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../sidebar/SideBar";
import Header from "./Header";

const Main = ({ textHeader, onChangeHeader }) => {
  const [marginMenu, setMarginMenu] = useState(true);
  return (
    <div className="flex h-screen">
      <SideBar
        onChangeHeader={onChangeHeader}
        onToggleSlideBar={setMarginMenu}
      ></SideBar>
      <div
        className={`${
          marginMenu ? "ml-[206px]" : "ml-[40px]"
        } placeholder:right-content  flex-1 flex flex-col duration-500 `}
      >
        <Header textHeader={textHeader}></Header>
        <div className="px-10 pb-4 flex-1 mt-12 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
