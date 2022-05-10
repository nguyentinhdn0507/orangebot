import React from "react";
import Button from "../button/Button";
import InputField from "../form-control/InputField";
import { edit, editavatar, eyesclose, updateedit } from "../../svg/index";
import InputPassword from "../form-control/InputPassword";
const Profile = () => {
  return (
    <div className="flex max-h-[312px] h-full w-full gap-x-6 px-10 ">
      <div className="bg-white max-w-[256px] w-full  rounded-2xl flex flex-col items-center justify-center  ">
        <div className="py-8">
          <div className="text-center">
            <div className="w-[128px] h-[128px]  overflow-hidden rounded-full ">
              <div className="relative w-full h-full ">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="User info"
                  className="w-full h-full"
                />
                <span className="absolute  bg-bgOrange top-[76%] h-[32px] w-full flex  left-0 cursor-pointer ">
                  <img src={editavatar} className="h-[15px] m-auto" />
                </span>
              </div>
            </div>
            <p className="mt-1">本田 圭佑</p>
            <p className="mt-2">1985 - 06 - 13</p>
          </div>
        </div>
        <Button className="bg-bgOrange  flex items-center gap-x-2 py-[1px] px-2 rounded-sm text-white mb-2">
          <img src={updateedit} alt="" />
          編集
        </Button>
      </div>
      <div className="flex flex-col max-w-[873px] w-full bg-white p-4 rounded-2xl">
        <h3 className="text-xl font-black text-slate-900 mb-6">詳細 </h3>
        <form action="" className="flex flex-col">
          <InputField
            label="電子メールアドレス"
            className="mb-6"
            classNameInput="focus:outline-slate-200 px-6 py-2  rounded-sm "
            iconRight
            icon={edit}
            placeholder="Example"
            styleSpan="bg-colorItem p-3.5 rounded-r-sm border-l "
            styleInput="p-[14px]"
            type="text"
          />
          <InputPassword
            label="パスワード"
            className="mb-0"
            classNameInput="focus:outline-slate-200 px-6 py-2 rounded-sm"
            styleSpan="bg-colorItem p-3.5 rounded-r-sm border-l"
            iconRight
            icon={edit}
            styleInput="p-[14px] z-10 border-l"
            placeholder="Enter Your Password"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
