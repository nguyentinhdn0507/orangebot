import React, { useEffect, useState } from "react";
import { uploaddata, user } from "../../svg";
import Button from "../button/Button";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { uploadFile } from "../../api/uploadfile";
const Header = ({ textHeader, getData }) => {
  const url = "https://orangebot-backend.herokuapp.com/data";
  const queryClient = useQueryClient();
  // const url = "http://localhost:9000/datafile";
  const upload = async (data) => {
    const result = await axios.post(url, data);
    return result;
  };
  const mutationUpdate = useMutation(upload, {
    onSuccess: () => {
      queryClient.invalidateQueries("gethuhu");
    },
  });
  const handleUploadFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    let result = await uploadFile(file);
    mutationUpdate.mutate({
      file: { name: file.name },
      type: file.type,
      datecreate: new Date(),
      dateupdate: new Date(),
      size: file.size,
      link: result.data,
    });
  };

  return (
    <>
      <header className=" w-full  bg-white shadow-md  ">
        <div className="flex h-[72px] items-center gap-x-4 px-10 justify-between">
          <div className="flex gap-x-3">
            <img src={textHeader.iconHeader} className="inline w-[32px] h-[32px]" />
            <span className="text-slate-900 font-black text-2xl">{textHeader.titleHeader}</span>
          </div>
          <div className="flex items-center gap-x-4 relative">
            {textHeader.buttonHeader && (
              <>
                <Button
                  className=" flex items-center rounded-sm
            bg-bgOrange text-white py-2 px-4 gap-x-3"
                  icon={uploaddata}>
                  <label htmlFor="upload-file">
                    <span className="text-sm">アップロード</span>
                  </label>
                  <input
                    type="file"
                    id="upload-file"
                    style={{ display: "none" }}
                    onChange={handleUploadFile}
                  />
                </Button>
              </>
            )}
            {/* <button onClick={handleButton}> AXY</button> */}
            <span className="text-colorForm font-extrabold ">テナント名</span>
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="テナント①"
                className="placeholder-slate-900 font-normal relative border focus:outline-slate-200  rounded-lg px-4 py-2 cursor-pointer"
              />
              <span className="absolute p-3.5 border-l">
                <img src={user} alt="" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
