import React from "react";
import { uploaddata } from "../../svg";
import Button from "../button/Button";

const Header = ({ textHeader }) => {
  // console.log("textHeader", textHeader);
  return (
    <>
      <header className=" w-full  bg-white shadow-md  ">
        <div className="flex h-[72px] items-center gap-x-4 px-10 justify-between">
          <div className="flex gap-x-3">
            <img
              src={textHeader.iconHeader}
              className="inline w-[32px] h-[32px]"
            />
            <span className="text-slate-900 font-black text-2xl">
              {textHeader.titleHeader}
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            {textHeader.buttonHeader && (
              <Button
                className=" flex items-center rounded-sm
            bg-bgOrange text-white py-2 px-4 gap-x-3"
                icon={uploaddata}
              >
                <span className="text-sm">アップロード</span>
              </Button>
            )}
            <span className="text-colorForm font-extrabold">テナント名</span>
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="テナント①"
                className="placeholder-slate-900 font-normal relative border focus:outline-slate-200  rounded-lg px-4 py-2 cursor-pointer"
              />
              <span className="absolute p-3.5 border-l">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4136 10.9295C12.1189 10.2313 11.6911 9.59711 11.1542 9.06226C10.619 8.52587 9.98491 8.09821 9.28705 7.80289C9.2808 7.79976 9.27455 7.7982 9.2683 7.79508C10.2417 7.09195 10.8745 5.94664 10.8745 4.65445C10.8745 2.51382 9.14017 0.779449 6.99955 0.779449C4.85893 0.779449 3.12455 2.51382 3.12455 4.65445C3.12455 5.94664 3.75736 7.09195 4.7308 7.79664C4.72455 7.79976 4.7183 7.80133 4.71205 7.80445C4.01205 8.09976 3.38393 8.5232 2.84486 9.06383C2.30847 9.59909 1.88081 10.2332 1.58549 10.931C1.29537 11.6142 1.1389 12.3467 1.12455 13.0888C1.12413 13.1055 1.12706 13.1221 1.13315 13.1376C1.13925 13.1532 1.14839 13.1673 1.16004 13.1792C1.17169 13.1912 1.18561 13.2007 1.20098 13.2071C1.21636 13.2136 1.23287 13.217 1.24955 13.217H2.18705C2.2558 13.217 2.31049 13.1623 2.31205 13.0951C2.3433 11.8888 2.82768 10.7591 3.68393 9.90289C4.56986 9.01695 5.74643 8.52945 6.99955 8.52945C8.25268 8.52945 9.42924 9.01695 10.3152 9.90289C11.1714 10.7591 11.6558 11.8888 11.687 13.0951C11.6886 13.1638 11.7433 13.217 11.812 13.217H12.7495C12.7662 13.217 12.7827 13.2136 12.7981 13.2071C12.8135 13.2007 12.8274 13.1912 12.8391 13.1792C12.8507 13.1673 12.8599 13.1532 12.8659 13.1376C12.872 13.1221 12.875 13.1055 12.8745 13.0888C12.8589 12.342 12.7042 11.6154 12.4136 10.9295ZM6.99955 7.34195C6.28236 7.34195 5.60736 7.06226 5.09955 6.55445C4.59174 6.04664 4.31205 5.37164 4.31205 4.65445C4.31205 3.93726 4.59174 3.26226 5.09955 2.75445C5.60736 2.24664 6.28236 1.96695 6.99955 1.96695C7.71674 1.96695 8.39174 2.24664 8.89955 2.75445C9.40736 3.26226 9.68705 3.93726 9.68705 4.65445C9.68705 5.37164 9.40736 6.04664 8.89955 6.55445C8.39174 7.06226 7.71674 7.34195 6.99955 7.34195Z"
                    fill="black"
                    fillOpacity="0.85"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
