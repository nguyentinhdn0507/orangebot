import React, { useState } from "react";
import {
  arrowdownfill,
  dashboardperse,
  messageperse,
  shopcenario,
  turbo,
} from "../../svg";
import { DateRangePicker } from "react-date-range";
import DatePicker from "react-datepicker";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-datepicker/dist/react-datepicker.css";
import InputCheckbox from "../form-control/InputCheckbox";

const Scenario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const selectRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "selection",
  // };
  const handleSlected = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <img src={shopcenario} alt="" />
            <div className="flex gap-x-4">
              <span>クーポン</span>
              <img src={arrowdownfill} alt="" />
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>期間</span>
            <div className="border flex justify-center px-4 rounded-lg">
              <div className="flex items-center">
                <div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    width={50}
                  />
                </div>
                <span className="mx-4 text-gray-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6422 9.31563L11.0797 6.06563C11.033 6.00629 10.9734 5.95832 10.9055 5.92531C10.8375 5.89229 10.763 5.87509 10.6875 5.875H9.675C9.57031 5.875 9.5125 5.99531 9.57656 6.07812L11.8313 8.9375H2.375C2.30625 8.9375 2.25 8.99375 2.25 9.0625V10C2.25 10.0687 2.30625 10.125 2.375 10.125H13.2484C13.6672 10.125 13.9 9.64375 13.6422 9.31563Z"
                      fill="black"
                      fill-opacity="0.25"
                    />
                  </svg>
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
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
