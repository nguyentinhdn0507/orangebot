import React, { useState } from "react";
import Button from "../button/Button";
import InputField from "../form-control/InputField";
import { edit, editavatar, updateedit, savefile } from "../../svg/index";
import InputPassword from "../form-control/InputPassword";
const Profile = () => {
  const [formEdit, setFormEdit] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const handleEditPassword = () => {
    console.log("Open Form");
    setFormEdit(!formEdit);
  };
  const cancelEditPassword = () => {
    console.log("Open Form");
    setFormEdit(!formEdit);
  };
  const handleChangeAvatar = () => {
    setChangeAvatar(!changeAvatar);
  };
  const CancelEditAvatar = () => {
    setChangeAvatar(!changeAvatar);
  };
  const [userDetail, setUserDetail] = useState("本田 圭佑");
  return (
    <div className="flex  h-auto w-full gap-x-6 px-10 ">
      <div className="bg-white max-w-[256px] p-4  w-full  rounded-2xl  flex flex-col items-center justify-center  ">
        <div className="py-8 flex-1 ">
          <div className="text-center flex flex-col items-center">
            <div className="w-[128px] h-[128px] overflow-hidden rounded-full ">
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
            {changeAvatar ? (
              <div className="w-[60%] ">
                {" "}
                <InputField
                  className="mt-2 mb-2"
                  classNameInput="outline-none px-1 py-[2px]"
                />{" "}
              </div>
            ) : (
              <p className="mt-1">本田 圭佑</p>
            )}
            {/* <p className="mt-1">本田 圭佑</p> */}
            {changeAvatar ? (
              <div className="w-[60%]">
                <InputField classNameInput="outline-none px-1 py-[2px]" />
              </div>
            ) : (
              <p className="mt-2">1985 - 06 - 13</p>
            )}
          </div>
        </div>
        {changeAvatar ? (
          <div className="flex gap-x-3">
            <Button onClick={CancelEditAvatar} className="text-red-400">
              キャンセル
            </Button>
            <Button className="flex items-center py-[1px] px-2  bg-bgOrange text-white">
              <span className="mr-2">
                <img src={savefile} alt="" />
              </span>
              保存
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleChangeAvatar}
            className="bg-bgOrange  flex items-center  py-[1px] px-2 rounded-sm text-white mb-2">
            <img className="mr-2" src={updateedit} alt="" />
            編集
          </Button>
        )}
      </div>
      <div className="flex flex-col max-w-[873px] w-full bg-white p-4 rounded-2xl">
        <h3 className="text-xl font-black text-slate-900 mb-6">詳細 </h3>
        <form action="" className="flex flex-col ">
          <InputField
            label="電子メールアドレス"
            className="mb-6 relative"
            classNameInput="focus:outline-slate-200 px-3 py-2  rounded-sm "
            iconRight
            icon={edit}
            placeholder="Example"
            styleSpan="bg-colorItem p-3.5 rounded-r-sm border-l "
            styleInput="p-[14px]"
            type="text"
          />

          <InputPassword
            label="パスワード"
            className="mb-0 relative"
            classNameInput="focus:outline-slate-200 px-3 py-2 rounded-sm"
            styleSpan="bg-colorItem p-3.5 rounded-r-sm border-l"
            iconRight
            icon={edit}
            styleInput="p-[14px] z-10 border-l"
            placeholder="Enter Your Password"
            onclickRightIcon={handleEditPassword}
          />
          {formEdit && (
            <>
              <div action="" className="flex flex-col mt-3">
                <InputPassword classNameInput="px-3 py-2 rounded-sm outline-none" />
                <div className="flex gap-x-3 mt-2">
                  <InputPassword
                    className="w-full "
                    classNameInput="px-3 py-2 rounded-sm outline-none"
                  />
                  <InputPassword
                    className="w-full"
                    classNameInput="px-3 py-2 rounded-sm outline-none"
                  />
                </div>
                <div className="flex justify-end mt-3 gap-x-3">
                  <Button onClick={cancelEditPassword} className="text-red-400">
                    キャンセル
                  </Button>
                  <Button className="bg-bgOrange text-white rounded-sm flex items-center  p-[1px] px-2">
                    <img className="mr-2" src={savefile} alt="" /> 保存
                  </Button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
