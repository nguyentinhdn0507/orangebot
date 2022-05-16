import React, { useState } from "react";
import {
  arrowdownfill,
  calendarswapright,
  dashboardperse,
  messageperse,
  shopcenario,
  turbo,
} from "../../svg";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-datepicker/dist/react-datepicker.css";
import InputCheckbox from "../form-control/InputCheckbox";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
const Scenario = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const img = calendarswapright;
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2 relative">
            <img src={shopcenario} alt="" />
            <div className="flex gap-x-4">
              <span>クーポン</span>
              <img src={arrowdownfill} alt="" />
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <span>期間</span>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="cursor-pointer border p-2 rounded-sm"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                className="absolute top-[30%] right-[7%]"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
              />
            )}
          </div>
        </div>
        <table className="table-auto w-full mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-colorTable dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-left h-full">
              <th className="py-3 px-4">
                <span className="">#</span>
              </th>
              <th className="py-3 px-4">名前</th>
              <th className="py-3 px-4">人数</th>
              <th className="py-3 px-4">開始日</th>
              <th className="py-3 px-4">終了日</th>
              <th className="py-3 px-4">電話番号</th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-x-2">
                  <span>電話番号</span>
                  <span>
                    <img src={arrowdownfill} alt="" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-left dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 ">
              <th
                scope="row"
                className=" px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                1
              </th>
              <th
                scope="row"
                className=" px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className=" px-4 py-4">Sliver</td>
              <td className=" px-4 py-4">Laptop</td>
              <td className=" px-4 py-4">$2999</td>
              <td className=" px-4 py-4 ">2139871309</td>
              <td className=" px-4 py-4 text-center">
                <InputCheckbox />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-md p-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <img src={turbo} alt="" />
            <div className="flex gap-x-4">
              <span>クーポン</span>
              <img src={arrowdownfill} alt="" />
            </div>
          </div>
          <div>
            <span>期間</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md p-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <img src={messageperse} alt="" />
            <div className="flex gap-x-4">
              <span>クーポン</span>
              <img src={arrowdownfill} alt="" />
            </div>
          </div>
          <div>
            <span>期間</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md p-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <img src={dashboardperse} alt="" />
            <div className="flex gap-x-4">
              <span>クーポン</span>
              <img src={arrowdownfill} alt="" />
            </div>
          </div>
          <div>
            <span>期間</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenario;
