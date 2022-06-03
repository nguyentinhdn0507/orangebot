import React, { useEffect, useRef, useState } from "react";
import { databaseImg } from "../../assets";
import InputCheckbox from "../form-control/InputCheckbox";
import { formatDate, timeSince, formatSize } from "../../format/index";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import {
  filedoc,
  fileimg,
  filevideo,
  filezip,
  filtertable,
  iconfiledoc,
  iconfileimg,
  iconfilevideo,
  iconfilezip,
  trash,
} from "../../svg";

const Appended = ({ shouldGetData }) => {
  const [selectAll, setSelectAll] = useState(true);
  const [selectItem, setSelectItem] = useState(false);
  const url = "https://orangebot-backend.herokuapp.com/data";
  // const url = "http://localhost:9000/datafile";
  const { isFetching, error, data } = useQuery("gethuhu", () => axios.get(url));
  console.log("data", data);

  const checkType = (type) => {
    switch (type) {
      case "text/plain":
        return iconfiledoc;
      case "image/jpeg":
        return iconfileimg;
      case "video":
        return iconfilevideo;
      case "application/x-zip-compressed":
        return iconfilezip;
      default:
        break;
    }
  };

  const handelDeleteFile = (id) => {
    const item = data.filter((item) => item._id !== id);
    setData(item);
  };

  const handleSelectAll = () => {
    const newData = [...data].map((x) => {
      return {
        ...x,
        status: selectAll ? true : false,
      };
    });
    setSelectAll(!selectAll);
    setData(newData);
  };

  const handleSelectItem = (id) => {
    console.log("object");
    // const index = [...data].findIndex((item) => item._id === id);
    // console.log(index);
    // setSelectItem((x) => !x);
    // setSelectAll();
    // const newData = [...data];
    // newData[index].status = !newData[index].status;
    // setData(newData);
  };

  return (
    <div className="px-10">
      <div className="flex gap-x-5">
        <div
          className="total_file bg-white gap-x-3 rounded-lg flex py-[10px] px-4
        items-center ">
          <span>
            <img src={filedoc} alt="" />
          </span>
          <div>
            <span className="font-bold">1.5 GB</span>
            <p className="text-sm font-normal">ドキュメント</p>
          </div>
        </div>
        <div
          className="total_img  gap-x-3 bg-white rounded-lg flex 
        items-center justify-around py-[10px] px-4">
          <span>
            <img src={fileimg} alt="" />
          </span>
          <div>
            <span className="font-bold">1.5 GB</span>
            <p className="text-sm font-normal">写真</p>
          </div>
        </div>
        <div
          className="total_videos  gap-x-3  bg-white  rounded-lg flex  py-[10px] px-4
        items-center justify-around ">
          <img src={filevideo} alt="" />
          <div>
            <span className="font-bold">10.5 GB</span>
            <p className="text-sm font-normal">ビデオ</p>
          </div>
        </div>
        <div
          className="total_docs  gap-x-3 py-[10px] px-4 bg-white  rounded-lg flex 
        items-center justify-around ">
          <img src={filezip} alt="" />
          <div>
            <span className="font-bold">5.5 GB</span>
            <p className="text-sm font-normal">その他</p>
          </div>
        </div>
        <div className="total_database w-full  bg-white rounded-lg flex-1 py-[10px] px-2">
          <div className="flex gap-x-2">
            <img src={databaseImg} alt="data base" />
            <span className="font-black">保管所</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-6 rounded-2xl">
        <table className="table-auto w-full">
          <thead className="text-xs text-gray-700 uppercase bg-colorTable dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-left">
              <th className="px-2 py-4 ">
                <InputCheckbox onChange={handleSelectAll} />
              </th>
              <th className="m-w-[250px]">
                <div className="w-full flex items-center justify-between">
                  <span> ファイル名</span>
                  <span className="mr-5">
                    <img src={filtertable} alt="" />
                  </span>
                </div>
              </th>
              <th className=" ">
                <div>
                  <span>作成日</span>
                </div>
              </th>
              <th className="">サイズ</th>
              <th className="">更新日</th>
              <th className="">
                <span className="cursor-pointer" onClick={handelDeleteFile}>
                  <img src={trash} alt="" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 odd:bg-white text-left even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"></tr>
            {data?.data.map((item, index) => (
              <tr key={index}>
                <td className="px-2">
                  <InputCheckbox
                    checked={item.status}
                    onChange={() => handleSelectItem(item._id)}
                  />
                </td>
                <td scope="row" className=" font-medium dark:text-white whitespace-nowrap py-4">
                  <div className="text-gray-900 flex items-center gap-x-5">
                    <span>
                      <img src={checkType(item.mimetype)} alt="" />
                    </span>
                    <span> {item.originalname}</span>
                  </div>
                </td>
                <td className="py-4">
                  <span>{timeSince(new Date(item.dateUpload))} Ago</span>
                </td>
                <td className="py-4">{formatSize(item.size)}</td>
                {/* <td className=" py-4">{formatDate(new Date(item.dateUpload))}</td> */}
                <td className=" py-4">{new Date(item.dateUpload).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appended;
