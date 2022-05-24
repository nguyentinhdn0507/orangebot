import React, { useEffect, useRef, useState } from "react";
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

  const handleSave = () => {
    if (isEdit) {
      active.content = content;
      setCreate(false);
      return;
    }
    const today = new Date();
    setData([
      ...data,
      {
        stt: "テーマ",
        status: "無効",
        date: today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate(),
        content: content,
      },
    ]);
    setCreate(false);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleEdit = () => {
    setCreate(true);
  };

  const handlePost = (item) => {
    item.status === "有効" ? (item.status = "無効") : (item.status = "有効");
    setData([...data]);
  };

  const handleActive = (item) => {
    setActive(item);
    setIsEdit(true);
  };

  const handleDelete = () => {
    setData(data.filter((item) => item !== active));
    setIsEdit(false);
    setCreate(false);
  };
  return (
    <div className="flex gap-x-6 h-full ">
      <div className="bg-white max-w-[367px] w-full rounded-lg flex flex-col justify-between">
        <div className="px-10 mt-10">
          {data.length === 0 ? (
            <div>
              <div className="w-[200px] h-[200px] mx-auto">
                <img src={searchinfoImg} alt="" className="w-full" />
              </div>
              <h3 className="text-center">まだ投稿はありません。 今すぐ投稿を作成しましょう！</h3>
            </div>
          ) : (
            <div className="shadow-md overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-3 text-center">
                      投稿一覧
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      スターテス
                    </th>
                    <th scope="col" className="px-2 py-3 text-center">
                      作成日
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr className="hover:bg-gray-300 " key={item.date}>
                      <td className="px-2 py-3 text-center">
                        <div className="flex items-center gap-x-2">
                          <span> {item.stt}</span>
                          <span className="py-[2px] overflow-hidden px-2  rounded-full">
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-3 text-center">
                        <Button className="bg-bgOrange py-2 px-6 rounded-lg text-white">
                          {item.status}
                        </Button>
                      </td>
                      <td className="px-2 py-3 text-center">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
          <EditorComponent active={active} setContent={setContent} />
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
              onClick={handleSave}
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
