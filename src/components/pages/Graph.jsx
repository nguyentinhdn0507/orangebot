import React from "react";
import InputCheckbox from "../form-control/InputCheckbox";

const Graph = () => {
  return (
    <div>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2 items-center border text-colorTextMenuChart bg-colorMenuChart rounded-full">
            <span className="bg-bgOrange text-white font-semibold py-2 px-5 rounded-full">
              添付ファイル
            </span>
            <span className="  py-2 px-5 rounded-full">シナリオ</span>
            <span className="py-2 px-5">アクセス数</span>
            <span className="py-2 px-5">開始数・離脱数</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Graph;
