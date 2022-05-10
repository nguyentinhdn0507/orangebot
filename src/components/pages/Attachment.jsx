import React from "react";

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
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.08989 8.82031C3.08989 9.02773 3.2563 9.19531 3.46255 9.19531H6.53755C6.7438 9.19531 6.9102 9.02773 6.9102 8.82031V6.52344H3.08989V8.82031ZM9.31372 0.804688H0.686375C0.399265 0.804688 0.219969 1.11758 0.364109 1.36719L2.95747 5.77344H7.04497L9.63833 1.36719C9.78013 1.11758 9.60083 0.804688 9.31372 0.804688Z"
                      fill="black"
                      fill-opacity="0.25"
                    />
                  </svg>
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
              className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              1
            </th>
            <th
              scope="row"
              className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
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
