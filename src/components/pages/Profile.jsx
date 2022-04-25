import React from "react";
import Button from "../button/Button";
const Profile = () => {
  return (
    <div className="flex max-h-[312px] h-full gap-x-6">
      <div className="bg-white w-[256px] rounded-2xl flex flex-col items-center justify-center  ">
        <div className="mb-6">
          <div className="text-center">
            <div className="w-[128px] h-[128px] relative  overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="User info"
                className="w-full h-full "
              />
              <span className="absolute top-[85%] h-[20px] w-full flex justify-center bg-bgOrange left-0 cursor-pointer ">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M11.3333 0C11.7013 0 12 0.298667 12 0.666667V1.838L10.6667 3.17133V1.33333H1.33333V6.73333L4 4.06667L6.88533 6.95267L5.942 7.89467L4 5.95333L1.33333 8.61933V10.6667H8.35533L8.82733 10.6673L9.71333 9.78067L10.6 10.6667H10.6667V8.828L12 7.49467V11.3333C12 11.7013 11.7013 12 11.3333 12H0.666667C0.3 12 0 11.7 0 11.3333V0.666667C0 0.298667 0.298667 0 0.666667 0H11.3333ZM12.5187 3.20533L13.4613 4.148L8.276 9.33333L7.332 9.332L7.33333 8.39067L12.5187 3.20533ZM8.33333 2.66667C8.88533 2.66667 9.33333 3.11467 9.33333 3.66667C9.33333 4.21867 8.88533 4.66667 8.33333 4.66667C7.78133 4.66667 7.33333 4.21867 7.33333 3.66667C7.33333 3.11467 7.78133 2.66667 8.33333 2.66667Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <p className="mt-1">本田 圭佑</p>
            <p className="mt-2">1985 - 06 - 13</p>
          </div>
        </div>
        <Button className="bg-bgOrange mt-14 flex items-center gap-x-2 py-[1px] px-2 rounded-sm text-white">
          <span>
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.304 8.3329L8.22017 2.41673L7.39533 1.5919L1.47917 7.50807V8.3329H2.304ZM2.78758 9.49957H0.3125V7.02448L6.98292 0.354065C7.09231 0.244707 7.24065 0.183273 7.39533 0.183273C7.55001 0.183273 7.69836 0.244707 7.80775 0.354065L9.458 2.00432C9.56736 2.11371 9.62879 2.26205 9.62879 2.41673C9.62879 2.57141 9.56736 2.71976 9.458 2.82915L2.78758 9.49957ZM0.3125 10.6662H10.8125V11.8329H0.3125V10.6662Z"
                fill="white"
              />
            </svg>
          </span>
          編集
        </Button>
      </div>
      <div className="flex flex-col max-w-[873px] w-full bg-white p-4 rounded-2xl">
        <h3 className="text-xl font-black text-slate-900 mb-6">詳細 </h3>
        <form action="" className="flex flex-col">
          <label
            htmlFor="電子メールアドレス"
            className="mb-2 text-colorForm font-bold"
          >
            電子メールアドレス
          </label>
          <input
            type="text"
            placeholder="Email"
            className=" border focus:outline-none  rounded-lg px-4 py-2 mb-6"
          />
          <label htmlFor="パスワード" className="mb-2 text-colorForm font-bold">
            パスワード
          </label>
          <input
            type="Password"
            placeholder="Enter Your Password"
            className=" border focus:outline-none  rounded-lg px-4 py-2 "
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
