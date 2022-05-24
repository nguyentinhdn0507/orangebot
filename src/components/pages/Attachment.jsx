import React from "react";
import { filtertable } from "../../svg";

const Attachment = () => {
  return (
    <div className="p-4 bg-white mt-5 rounded-lg">
      <table className="table-auto w-full ">
        <thead className="text-xs text-gray-700 uppercase bg-colorTable dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-left">
            <th scope="col" className="py-3 px-4">
              <span>項番</span>
            </th>
            <th scope="row" className="py-3 px-4">
              <div className="w-full flex items-center justify-between">
                <span>ファイル名</span>
                <span className="mr-5">
                  <img src={filtertable} alt="" />
                </span>
              </div>
            </th>
            <th className="py-3 px-4 ">
              <span>クリック数</span>
            </th>
            <th className="py-3 px-4">シナリオ</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-left border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th
              scope="row"
              className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              1
            </th>
            <th
              scope="row"
              className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td className="px-4 py-4">1000</td>
            <td className="px-4 py-4">面談予約</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attachment;
