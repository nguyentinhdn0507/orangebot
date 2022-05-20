import React, { useEffect, useRef, useState } from "react";
import { databaseImg } from "../../assets";
import InputCheckbox from "../form-control/InputCheckbox";
import { formatDate, timeSince, formatSize } from "../../format/index";
import axios from "axios";
import { trash } from "../../svg";
const Appended = () => {
  const [data, setData] = useState([]);
  const handleFetchData = useRef();
  const url = "http://localhost:9000/datafile";
  handleFetchData.current = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(url);
      console.log("Có Dữ liệu :", response);
      console.log(response.data);
      setData(response?.data || []);
    
    } catch (error) {
      console.log("error", error);
      
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, []);
  const handelDeleteFile = (id) => {
    const item = data.filter((item) => item._id !== id);
    setData(item);
  };
  // useEffect(() => {
  //   const url = "http://localhost:9000/datafile";
  //   const fetchData = () => {
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         console.log("data", setData(res.data));
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //   };
  //   fetchData();
  // }, []);

  console.log("data", data);
  return (
    <div className="px-10">
      <div className="flex gap-x-5">
        <div
          className="total_file bg-white gap-x-3 rounded-lg flex py-[10px] px-4
        items-center ">
          <span>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.1" width="60" height="60" rx="30" fill="#5B93FF" />
              <path
                d="M39 27V38.993C39.0009 39.1243 38.976 39.2545 38.9266 39.3762C38.8772 39.4979 38.8043 39.6087 38.7121 39.7022C38.6199 39.7957 38.5101 39.8701 38.3892 39.9212C38.2682 39.9723 38.1383 39.9991 38.007 40H21.993C21.7298 40 21.4774 39.8955 21.2912 39.7095C21.105 39.5235 21.0003 39.2712 21 39.008V20.992C21 20.455 21.447 20 21.998 20H32V26C32 26.2652 32.1054 26.5196 32.2929 26.7071C32.4804 26.8946 32.7348 27 33 27H39ZM39 25H34V20.003L39 25Z"
                fill="#40A9FF"
              />
            </svg>
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
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.2" width="60" height="60" rx="30" fill="#FFD66B" />
              <path
                d="M23 29.1L25 27.1L30.5 32.6L34 29.1L37 32.1V23H23V29.1ZM22 21H38C38.2652 21 38.5196 21.1054 38.7071 21.2929C38.8946 21.4804 39 21.7348 39 22V38C39 38.2652 38.8946 38.5196 38.7071 38.7071C38.5196 38.8946 38.2652 39 38 39H22C21.7348 39 21.4804 38.8946 21.2929 38.7071C21.1054 38.5196 21 38.2652 21 38V22C21 21.7348 21.1054 21.4804 21.2929 21.2929C21.4804 21.1054 21.7348 21 22 21V21ZM33.5 28C33.1022 28 32.7206 27.842 32.4393 27.5607C32.158 27.2794 32 26.8978 32 26.5C32 26.1022 32.158 25.7206 32.4393 25.4393C32.7206 25.158 33.1022 25 33.5 25C33.8978 25 34.2794 25.158 34.5607 25.4393C34.842 25.7206 35 26.1022 35 26.5C35 26.8978 34.842 27.2794 34.5607 27.5607C34.2794 27.842 33.8978 28 33.5 28V28Z"
                fill="#FFA940"
              />
            </svg>
          </span>
          <div>
            <span className="font-bold">1.5 GB</span>
            <p className="text-sm font-normal">写真</p>
          </div>
        </div>
        <div
          className="total_videos  gap-x-3  bg-white  rounded-lg flex  py-[10px] px-4
        items-center justify-around ">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.1" width="60" height="60" rx="30" fill="#FF8F6B" />
            <path
              d="M21 21.993C21 21.445 21.445 21 21.993 21H38.007C38.555 21 39 21.445 39 21.993V38.007C38.9997 38.2703 38.895 38.5227 38.7089 38.7089C38.5227 38.895 38.2703 38.9997 38.007 39H21.993C21.7297 38.9997 21.4773 38.895 21.2911 38.7089C21.105 38.5227 21.0003 38.2703 21 38.007V21.993ZM28.622 26.415C28.5618 26.3748 28.4919 26.3518 28.4196 26.3482C28.3473 26.3447 28.2755 26.3608 28.2116 26.3949C28.1478 26.4289 28.0944 26.4797 28.0572 26.5417C28.0199 26.6037 28.0001 26.6747 28 26.747V33.253C28.0001 33.3253 28.0199 33.3963 28.0572 33.4583C28.0944 33.5203 28.1478 33.5711 28.2116 33.6051C28.2755 33.6392 28.3473 33.6553 28.4196 33.6518C28.4919 33.6482 28.5618 33.6252 28.622 33.585L33.501 30.333C33.5559 30.2965 33.6009 30.247 33.632 30.1889C33.6631 30.1308 33.6794 30.0659 33.6794 30C33.6794 29.9341 33.6631 29.8692 33.632 29.8111C33.6009 29.753 33.5559 29.7035 33.501 29.667L28.621 26.415H28.622Z"
              fill="#FF7875"
            />
          </svg>
          <div>
            <span className="font-bold">10.5 GB</span>
            <p className="text-sm font-normal">ビデオ</p>
          </div>
        </div>
        <div
          className="total_docs  gap-x-3 py-[10px] px-4 bg-white  rounded-lg flex 
        items-center justify-around ">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.1" width="60" height="60" rx="30" fill="#605BFF" />
            <path
              d="M28 20V22H30V20H38.007C38.555 20 39 20.444 39 20.992V39.008C38.9979 39.2706 38.8926 39.5219 38.7068 39.7075C38.521 39.8931 38.2696 39.9982 38.007 40H21.993C21.7298 40 21.4774 39.8955 21.2912 39.7095C21.105 39.5235 21.0003 39.2712 21 39.008V20.992C21.0021 20.7294 21.1074 20.4781 21.2932 20.2925C21.479 20.1069 21.7304 20.0018 21.993 20H28ZM30 22V24H32V22H30ZM28 24V26H30V24H28ZM30 26V28H32V26H30ZM28 28V30H30V28H28ZM30 30V32H28V35H32V30H30Z"
              fill="#9254DE"
            />
          </svg>
          <div>
            <span className="font-bold">5.5 GB</span>
            <p className="text-sm font-normal">その他</p>
          </div>
        </div>
        <div className="total_database w-full  bg-white rounded-lg flex-1 py-[10px] px-4">
          <div className="flex p-2">
            <img src={databaseImg} alt="data base" />
            <span>保管所</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-6 rounded-2xl">
        <table className="table-auto w-full">
          <thead className="text-xs text-gray-700 uppercase bg-colorTable dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-left">
              <th className="px-2 py-4 w-8">
                <InputCheckbox />
              </th>
              <th className="m-w-[250px]">
                <div className="w-full flex items-center justify-between">
                  <span> ファイル名</span>
                  <span className="mr-5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.08989 8.82031C3.08989 9.02773 3.2563 9.19531 3.46255 9.19531H6.53755C6.7438 9.19531 6.9102 9.02773 6.9102 8.82031V6.52344H3.08989V8.82031ZM9.31372 0.804688H0.686375C0.399265 0.804688 0.219969 1.11758 0.364109 1.36719L2.95747 5.77344H7.04497L9.63833 1.36719C9.78013 1.11758 9.60083 0.804688 9.31372 0.804688Z"
                        fill="black"
                        fill-opacity="0.25"
                      />
                    </svg>
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
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-2">
                  <InputCheckbox />
                </td>
                <td scope="row" className=" font-medium dark:text-white whitespace-nowrap py-4">
                  <div className="text-gray-900 flex items-center gap-x-5">
                    <span>
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 5.00001V12.9953C12.0006 13.0829 11.984 13.1697 11.951 13.2508C11.9181 13.3319 11.8695 13.4058 11.808 13.4681C11.7466 13.5305 11.6734 13.5801 11.5928 13.6141C11.5121 13.6482 11.4255 13.6661 11.338 13.6667H0.662C0.486542 13.6667 0.318261 13.597 0.194131 13.473C0.070001 13.349 0.000176695 13.1808 0 13.0053V0.994677C0 0.636677 0.298 0.333344 0.665333 0.333344H7.33333V4.33334C7.33333 4.51015 7.40357 4.67972 7.5286 4.80475C7.65362 4.92977 7.82319 5.00001 8 5.00001H12ZM12 3.66668H8.66667V0.335344L12 3.66668Z"
                          fill="#40A9FF"
                        />
                      </svg>
                    </span>
                    <span> {item.originalname}</span>
                  </div>
                </td>
                <td className="py-4">
                  <span>{timeSince(new Date(item.dateUpload))} Ago</span>
                </td>
                <td className="py-4">{formatSize(item.size)}</td>
                <td className=" py-4">{formatDate(new Date(item.dateUpload))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appended;
