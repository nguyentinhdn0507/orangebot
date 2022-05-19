import React, { useRef, useState } from "react";
import Button from "../button/Button";
import { searchinfoImg } from "../../assets/index";
import { plus, savecomment, selectarrowdown, sendComment } from "../../svg/index";
import EditorComponent from "../editor/EditorComponent";

const Marketing = () => {
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);
  const [active, setActive] = useState({});
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const today = new Date();
  const handleCreate = () => {
    console.log(1);
    setCreate(true);
    setIsEdit(false);
    setActive({});
  };
  return (
    <div className="flex gap-x-6 h-full ">
      <div className="bg-white max-w-[367px] w-full rounded-lg flex flex-col justify-between">
        <div className="px-10 mt-10">
          <div className="w-[200px] h-[200px] mx-auto">
            <img src={searchinfoImg} alt="" className="w-full" />
          </div>
          <h3 className="text-center">まだ投稿はありません。 今すぐ投稿を作成しましょう！</h3>
        </div>
        <div className="px-10 mb-[16px]">
          <Button
            bgColor="bg-bgOrange"
            className="w-full py-2 text-white rounded-sm flex items-center justify-center gap-x-2"
            icon={plus}>
            新規投稿作成
          </Button>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg p-4">
        <div>
          <EditorComponent />
          <div className="flex justify-between mt-2 mb-[16px] items-center">
            <div className="flex">
              <Button className="flex items-center  border rounded-sm border-slate-300 py-2 px-3">
                <span className="mr-2">
                  <img src={sendComment} />
                </span>
                <span>今すぐ投稿</span>
              </Button>
              <Button className="py-3 px-4 border rounded-sm ">
                <span>
                  <img src={selectarrowdown} alt="" />
                </span>
              </Button>
            </div>
            <Button
              // onClick={log}
              className="bg-bgOrange text-white py-2 px-8 flex items-center gap-3 rounded-sm">
              <img src={savecomment} alt="" />
              保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
