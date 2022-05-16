import React from "react";
import {
  arrowdownfill,
  beamin,
  callspectrum,
  lazada,
  scenariopiechart,
  spectrum,
  tiki,
  unsplash,
  shadownspectrum,
  shadownunplash,
  shadownlazada,
  shadownbeamin,
  shadowntiki,
} from "../../svg";
import InputCheckbox from "../form-control/InputCheckbox";

const ScenarioChart = () => {
  return (
    <div className="w-full">
      <div className="flex mt-4 gap-x-3 ">
        <div className="bg-white w-full p-4 rounded-lg">
          <h3 className="text-black font-bold">シナリオがよく使われたページ</h3>
          <div className="grid gap-x-5 grid-cols-3 mt-5 ">
            <div className="w-full mb-6">
              <div
                className="bg-bgSpectrum
               overflow-hidden  flex justify-between rounded-lg "
              >
                <img className=" p-3" src={callspectrum} alt="" />
                <div className="flex flex-col p-3">
                  <span className="text-white">spectrrum</span>
                  <span className="text-white font-bold">912,873</span>
                </div>
                <div className="flex relative">
                  <img src={shadownspectrum} alt="" />
                  <img src={spectrum} alt="" className="absolute right-0" />
                </div>
              </div>
              <p className="text-center">spectrum.com</p>
            </div>
            <div className="w-full mb-6">
              <div className="bg-bgUnplash overflow-hidden  flex justify-between rounded-lg ">
                <img className=" p-3" src={callspectrum} alt="" />
                <div className="flex flex-col p-3">
                  <span className="text text-white">spectrrum</span>
                  <span className=" text-white font-bold">912,873</span>
                </div>
                <div className="flex relative">
                  <img src={shadownunplash} alt="" />
                  <img src={unsplash} alt="" className="absolute right-0" />
                </div>
              </div>
              <p className="text-center">unsplash.com</p>
            </div>
            <div className="w-full mb-6">
              <div className="bg-bgLazada overflow-hidden  flex justify-between rounded-lg ">
                <img className=" p-3" src={callspectrum} alt="" />
                <div className="flex flex-col p-3">
                  <span className="text-white">spectrrum</span>
                  <span className=" text-white font-bold">912,873</span>
                </div>
                <div className="flex relative">
                  <img src={shadownlazada} alt="" />
                  <img src={lazada} alt="" className="absolute right-0" />
                </div>
              </div>
              <p className="text-center">lazada.com</p>
            </div>
            <div className="w-full mb-6">
              <div className="bg-bgBeamin overflow-hidden  flex justify-between rounded-lg ">
                <img className=" p-3" src={callspectrum} alt="" />
                <div className="flex flex-col p-3">
                  <span className="text-white">spectrrum</span>
                  <span className="text-white font-bold">912,873</span>
                </div>
                <div className="flex relative">
                  <img src={shadownbeamin} alt="" />
                  <img src={beamin} alt="" className="absolute right-0" />
                </div>
              </div>
              <p className="text-center">Baemin.com</p>
            </div>
            <div className="w-full mb-6">
              <div className="bg-bgTiki  overflow-hidden  flex justify-between rounded-lg ">
                <img className=" p-3" src={callspectrum} alt="" />
                <div className="flex flex-col p-3">
                  <span className="text-white">spectrrum</span>
                  <span className="text-white font-bold">912,873</span>
                </div>
                <div className="flex relative">
                  <img src={shadownspectrum} alt="" />
                  <img src={tiki} alt="" className="absolute right-0" />
                </div>
              </div>
              <p className="text-center">Tiki.com</p>
            </div>
          </div>
        </div>
        <div className=" bg-white p-4 rounded-lg">
          <h3 className="text-black font-bold">シナリオ間の使用率</h3>
          <div className="flex justify-center">
            <div className="w-[176px] h-[176px]">
              {" "}
              <img
                className="w-full h-full object-cover"
                src={scenariopiechart}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center gap-1">
              <span className="w-[20px] h-[20px] bg-orange-300 rounded-sm"></span>
              <span className="whitespace-nowrap"> 面談日程</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-[20px] h-[20px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-sm"></span>
              <span className="whitespace-nowrap"> 航空券予約</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-[20px] h-[20px] bg-pink-300 rounded-sm"></span>
              <span className="whitespace-nowrap">クーポン</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-5 rounded-lg">
        <table className="table-auto w-full ">
          <thead className="text-xs text-gray-700 uppercase bg-colorTable dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-left">
              <th scope="col" className="py-3 px-4">
                <span>項番</span>
              </th>
              <th scope="row" className="py-3 px-4">
                <div className="w-full flex items-center justify-between">
                  <span>シナリオ名</span>
                </div>
              </th>
              <th className="py-3 px-4 ">
                <span>使用回数</span>
              </th>
              <th className="py-3 px-4">ランディングページ</th>
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
                面談予約
              </th>
              <td className="px-4 py-4">1000</td>
              <td className="px-4 py-4">Spectrum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScenarioChart;
