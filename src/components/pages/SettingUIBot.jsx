import React from "react";
import { useOutletContext } from "react-router";
import {
  pantone,
  dash,
  files,
  savefile,
  setting,
  sendmessage,
  editavatar,
} from "../../svg/index";
import Button from "../button/Button";
import InputField from "../form-control/InputField";
const SettingUIBot = () => {
  const [marginMenu] = useOutletContext();
  console.log("marginMenu", marginMenu);

  return (
    <div>
      <div className="flex gap-x-6 ">
        <div
          className={`${
            marginMenu ? "max-w-[745px]" : "max-w-[900px]"
          } w-full flex flex-col gap-y-6`}
        >
          <div className="bg-white px-4 rounded-lg ">
            <div className="flex justify-between items-center py-3 border-b">
              <p className="font-black text-black">ヘッダ</p>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <p>背景</p>
                  <button className="bg-colorActiveBtn py-2 px-5 rounded-sm">
                    <img src={pantone} alt="" />
                  </button>
                </div>
                <div className="flex items-center gap-x-2">
                  <p>アイコン</p>
                  <button className="bg-colorActiveBtn py-2 px-5 rounded-sm">
                    <img src={pantone} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 py-4 items-end">
              <div className="w-[100px] h-[100px]  overflow-hidden rounded-full ">
                <div className="relative w-full h-full ">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="User info"
                    className="w-full h-full"
                  />
                  <span className="absolute  bg-bgOrange top-[76%] h-[25px] w-full flex  left-0 cursor-pointer ">
                    <img src={editavatar} className="m-auto h-[15px]" />
                  </span>
                </div>
              </div>
              <div className="w-full flex-1">
                <h3>文書</h3>
                <div className="flex gap-x-6 mb-3 ">
                  {" "}
                  <InputField
                    className="w-full py-0"
                    placeholder="チャットボット"
                    classNameInput="px-4 py-1 focus:ring-colorInput rounded-sm"
                  />
                  <select
                    disabled
                    id="countries_disabled"
                    className="w-16 h-[32px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>14</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <button className="bg-colorActiveBtn py-2 px-5 rounded-sm  flex-shrink-0">
                    <img src={pantone} alt="" />
                  </button>
                </div>
                <div className="flex gap-x-6">
                  <InputField
                    className="w-full"
                    placeholder="24時間受け付けてます！"
                    classNameInput="px-4 py-1 focus:ring-colorInput rounded-sm"
                  />
                  <select
                    disabled
                    id="countries_disabled"
                    className="bg-gray-50 w-16  text-center border  border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>14</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <div className="flex-shrink-0">
                    <button className="bg-colorActiveBtn py-2 px-5 rounded-sm ">
                      <img src={pantone} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-3 border-b rounded-lg">
            <div className="flex justify-between ">
              <h3 className="font-black text-black">チャットボックス</h3>
              <div className="flex items-center gap-x-2">
                <p>背景</p>
                <button className="bg-colorActiveBtn py-2 px-5 rounded-sm">
                  <img src={pantone} alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-x-6 mt-4 items-end">
              <InputField
                label="本文"
                placeholder="お問い合わせ内容を入力していただくか、以下から選んでください。"
                className="w-full"
                classNameInput="px-4 py-1 focus:ring-colorInput rounded-sm"
              ></InputField>
              <select
                disabled
                id="countries_disabled"
                className="w-16 h-[32px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>14</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="flex-shrink-0">
                <button className="bg-colorActiveBtn py-2 px-5 rounded-sm ">
                  <img src={pantone} alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-x-6 mt-4 items-end">
              <InputField
                label="シナリオ"
                placeholder="お問い合わせ内容を入力していただくか、以下から選んでください。"
                className="w-full"
                classNameInput="px-4 py-1 focus:ring-colorInput rounded-sm"
              ></InputField>
              <select
                disabled
                id="countries_disabled"
                className="w-16 h-[32px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>14</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="flex-shrink-0">
                <button className="bg-colorActiveBtn py-2 px-5 rounded-sm">
                  <img src={pantone} alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-x-6 mt-4 items-end">
              <InputField
                label="入力欄"
                placeholder="お問い合わせ内容を入力していただくか、以下から選んでください。"
                className="w-full"
                classNameInput="px-4 py-1 focus:ring-colorInput rounded-sm"
              ></InputField>
              <select
                disabled
                id="countries_disabled"
                className="w-16 h-[32px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>14</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="flex-shrink-0">
                <button className="bg-colorActiveBtn px-5  py-2  rounded-sm">
                  <img src={pantone} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[382px] bg-white rounded-t-xl flex flex-col justify-between">
          <div className="bg-colorActiveBtn rounded-t-xl p-3 flex justify-between items-center h-[68px]">
            <div className="flex gap-x-3 ">
              <div className="w-[40px] h-[40px] ">
                <img
                  src="https://image.shutterstock.com/image-photo/woman-futuristic-costume-female-modern-260nw-2130564614.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white text-sm ">チャットボット</h3>
                <p className="text-white text-sm ">24時間受け付けてます！</p>
              </div>
            </div>
            <div>
              <img src={dash} alt="" />
            </div>
          </div>
          <div className="bg-slate-400 p-[10px]">
            <div className="flex items-center relative">
              <InputField
                classNameInput="p-2 rounded-lg text-sm "
                className="w-full"
                placeholder="お問い合わせ内容を入力ください。"
              />
              <Button className="absolute right-2">
                <img src={sendmessage} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 p-4 rounded-lg">
        <h3 className="text-black font-black mb-6">埋め込みリンク</h3>
        <div className="flex justify-between gap-x-4 items-center">
          <InputField
            className="w-full text-colorText"
            label=" チャットボットを表示したいページのタグの前に以下のHTMLを埋め込んでください。"
            classNameInput=" px-3 py-1 focus:ring-colorInput  rounded-sm "
          ></InputField>
          <Button className="w-[32px] h-[32px] bg-bgOrange mt-5 flex justify-center items-center rounded-full">
            <img src={files} alt="" />
          </Button>
        </div>
      </div>
      <div className="flex justify-end mt-6 gap-x-6 items-center">
        <Button className="bg-white py-2 px-4  border border-slate-300 rounded-sm flex gap-x-1 items-center">
          <img src={setting} alt="" />
          デフォルトに戻す
        </Button>
        <p>元に戻す</p>
        <Button className="bg-bgOrange flex gap-x-1 py-2 px-4 rounded-sm items-center text-white">
          <img src={savefile} alt="" />
          保存する
        </Button>
      </div>
    </div>
  );
};

export default SettingUIBot;
