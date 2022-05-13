import React, { useState } from "react";
import {
  avatarmodal,
  closebtn,
  editavatar,
  pluscolor,
  plusmodal,
  deletemodal,
  closeinputmodal,
  plusmodalinput,
} from "../../svg";
import Button from "../button/Button";
import InputField from "../form-control/InputField";

const Modal = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  const [insertRow, setInsertRow] = useState();
  const handelInsertRow = () => {
    console.log("hello");
  };
  return (
    <div className="bg-black/20 opacity-1 fixed inset-0 z-10   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col max-w-[956px] w-full bg-white  border-4 rounded-xl p-4 ">
          <div className="flex justify-between items-center border-b pb-3">
            <div className="flex  items-center ">
              <div>
                <img src={pluscolor} alt="" />
              </div>
              <h3>スクリプトを作成する</h3>
            </div>
            <div>
              <Button>
                <img src={closebtn} alt="" />
              </Button>
            </div>
          </div>
          <div className="flex mt-5 justify-between items-center">
            <div className="pr-5 border-r-2 w-full ">
              <InputField
                label="シナリオ名"
                placeholder="インタビュースケジュール"
                className="mb-3"
                classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              ></InputField>
              <InputField
                label="タグ"
                classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              ></InputField>
            </div>
            <div className="flex flex-col justify-center pl-4">
              <h3 className="text-center">アイコン</h3>
              <div className="w-[100px] h-[100px] bg-slate-400 overflow-hidden  rounded-full flex items-center justify-center">
                <div className="relative w-full h-full ">
                  <img
                    src={avatarmodal}
                    alt="User info"
                    className="w-full h-full"
                  />
                  <span className="absolute  bg-bgOrange top-[76%] h-[25px] w-full flex  left-0 cursor-pointer ">
                    <img src={editavatar} className="m-auto h-[15px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      No
                    </th>
                    <th scope="col" className="px-3 py-3 max-w-[230px]">
                      メッセージ
                    </th>
                    <th scope="col" className="px-3 py-3">
                      コントロール
                    </th>
                    <th scope="col" className="px-3 py-3 max-w-[167px]">
                      項目名
                    </th>
                    <th scope="col" className="px-3 py-3">
                      CV地点
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-bgOrange dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td
                      rowspan="2"
                      className="align-text-top pt-2 max-w-[45px] p-3"
                    >
                      01
                    </td>
                    <td
                      rowSpan="2"
                      className="align-text-top pt-2 max-w-[230px] pr-3 pb-3"
                    >
                      <InputField classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></InputField>
                    </td>
                    <td className="py-2">
                      <select
                        id="default"
                        className="py-2 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Option</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </td>
                    <td className="max-w-[167px]">
                      <InputField classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></InputField>
                    </td>
                    <td rowSpan="2" className="align-text-top pl-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <Button>
                          <img src={plusmodal} alt="" />
                        </Button>
                        <Button>
                          <img src={deletemodal} alt="" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="py-3 border-b">
                    <td colSpan="2" className="py-2">
                      <div className="mb-3 flex gap-x-3">
                        <InputField
                          label="オプション1 "
                          className="flex flex-1 relative gap-x-3"
                          classNameInput="rounded-sm "
                          icon={closeinputmodal}
                          flexfull="flex-1"
                          styleSpan="px-2"
                          iconRight
                        ></InputField>
                        <Button
                          icon={plusmodalinput}
                          onClick={handelInsertRow}
                        />
                      </div>
                      <div className="flex items-center  gap-x-3">
                        <InputField
                          label="オプション2 "
                          className="flex flex-1 relative gap-x-3"
                          classNameInput="rounded-sm "
                          icon={closeinputmodal}
                          flexfull="flex-1"
                          styleSpan="px-2"
                          iconRight
                        ></InputField>
                        <Button icon={plusmodalinput} />
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-bgOrange dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td
                      rowspan="2"
                      className="align-text-top pt-2 max-w-[45px] p-3"
                    >
                      01
                    </td>
                    <td
                      rowspan="2"
                      className="align-text-top pt-2 max-w-[230px] pr-3 py-3"
                    >
                      <InputField classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></InputField>
                    </td>
                    <td className="py-2">
                      <select
                        id="default"
                        className="py-2 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Option</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </td>
                    <td className="max-w-[167px]">
                      {" "}
                      <InputField classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></InputField>
                    </td>
                    <td rowspan="2" className="align-text-top pl-3 pb-3">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <Button>
                          <img src={plusmodal} alt="" />
                        </Button>
                        <Button>
                          <img src={deletemodal} alt="" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td colSpan="2" className="py-2">
                      <div className="mb-3 flex gap-x-3">
                        <InputField
                          label="オプション1 "
                          className="flex flex-1 relative gap-x-3"
                          classNameInput="rounded-sm "
                          icon={closeinputmodal}
                          flexfull="flex-1"
                          styleSpan="px-2"
                          iconRight
                        ></InputField>
                        <Button icon={plusmodalinput} />
                      </div>
                      <div className="flex items-center  gap-x-3">
                        <InputField
                          label="オプション2 "
                          className="flex flex-1 relative gap-x-3"
                          classNameInput="rounded-sm "
                          icon={closeinputmodal}
                          flexfull="flex-1"
                          styleSpan="px-2"
                          iconRight
                        ></InputField>
                        <Button icon={plusmodalinput} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-text-top pt-2 max-w-[45px] p-3">01</td>
                    <td className="align-text-top pt-2 max-w-[230px] pr-3">
                      <InputField></InputField>{" "}
                    </td>
                    <td className="py-2">
                      <select
                        id="default"
                        className="py-2 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Option</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </td>
                    <td className="py-2 ">
                      <InputField classNameInput="py-1 px-2 rounded-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"></InputField>
                    </td>
                    <td>
                      <div className="flex items-center gap-x-3 pl-3">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <Button>
                          <img src={plusmodal} alt="" />
                        </Button>
                        <Button>
                          <img src={deletemodal} alt="" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end gap-x-2 mt-5">
            <Button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-black  border "
            >
              キャンセル
            </Button>
            <Button className="rounded px-10 py-2  text-white bg-bgOrange ">
              確定
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
