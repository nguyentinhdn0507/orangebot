import React from "react";
import Button from "../button/Button";
import InputCheckbox from "../form-control/InputCheckbox";
import InputField from "../form-control/InputField";
import InputPassword from "../form-control/InputPassword";
import { iconcolor, lock } from "../../svg/index";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator("/");
  };
  return (
    <div className="mt-7">
      <div className="text-center mt-5 mb-10">
        <div className="flex justify-center items-end ">
          <span>
            <svg
              width="51.42"
              height="51.09"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.28 55.6283C63.9524 61.8602 61.5545 68.0033 57.0716 72.9474L39.6463 55.6283H64.28Z"
                fill="#FE8D00"
              />
              <path
                d="M37.5463 57.7303L54.9716 75.0493C49.9972 79.5049 43.8165 81.8882 37.5463 82.2138V57.7303V57.7303Z"
                fill="#FE8D00"
              />
              <path
                d="M34.5676 57.7303V82.2138C28.2975 81.8882 22.1167 79.4901 17.1572 75.0493L34.5676 57.7303Z"
                fill="#FE8D00"
              />
              <path
                d="M32.4677 55.6283L15.0424 72.9474C10.5594 68.0033 8.16161 61.8602 7.83395 55.6431H32.4677V55.6283Z"
                fill="#FE8D00"
              />
              <path
                d="M15.0424 35.3635L32.4677 52.6826H7.83395C8.16161 46.4358 10.5594 40.3076 15.0424 35.3635Z"
                fill="#FE8D00"
              />
              <path
                d="M17.1572 33.2615L34.5825 50.5806V26.097C28.2975 26.4227 22.1316 28.8059 17.1572 33.2615Z"
                fill="#FE8D00"
              />
              <path
                d="M57.0716 35.3635C61.5545 40.3076 63.9524 46.4506 64.28 52.6826H39.6612L57.0716 35.3635Z"
                fill="#FE8D00"
              />
              <path
                d="M13.8807 31.9441C26.1677 19.7319 46.11 19.7319 58.3971 31.9441C70.6842 44.1563 70.6842 63.977 58.3971 76.1891C46.11 88.4013 26.1677 88.4013 13.8807 76.1891C1.5936 63.977 1.5936 44.1711 13.8807 31.9441ZM10.5892 28.6727C7.13395 32.1069 4.46803 36.1036 2.65103 40.5592C0.893605 44.8668 0 49.4112 0 54.074C0 58.7368 0.893605 63.2812 2.65103 67.5888C4.46803 72.0444 7.13395 76.0411 10.5892 79.4753C14.0445 82.9095 18.0657 85.5592 22.5486 87.3651C26.8826 89.1118 31.4549 90 36.1463 90C40.8378 90 45.4101 89.1118 49.744 87.3651C54.227 85.5592 58.2482 82.9095 61.7035 79.4753C65.1587 76.0411 67.8247 72.0444 69.6417 67.5888C71.3991 63.2812 72.2927 58.7368 72.2927 54.074C72.2927 49.4112 71.3991 44.8668 69.6417 40.5592C67.8247 36.1036 65.1587 32.1069 61.7035 28.6727C58.2482 25.2385 54.227 22.5888 49.744 20.7829C45.4101 19.0362 40.8378 18.148 36.1463 18.148C31.4549 18.148 26.8826 19.0362 22.5486 20.7829C18.0508 22.5888 14.0296 25.2385 10.5892 28.6727Z"
                fill="#FE8D00"
              />
              <path
                d="M88.2128 0H37.8581C36.8752 0 36.0709 0.799342 36.0709 1.77632V29.5609C36.0709 30.7599 37.0539 31.7368 38.2603 31.7368H40.8368V43.1349L52.3047 31.7368H88.1979C89.1808 31.7368 89.9851 30.9375 89.9851 29.9605V1.77632C90 0.799342 89.1957 0 88.2128 0ZM50.0409 18.3405C48.3431 18.3405 46.958 16.9638 46.958 15.2763C46.958 13.5888 48.3431 12.2122 50.0409 12.2122C51.7388 12.2122 53.1239 13.5888 53.1239 15.2763C53.1239 16.9638 51.7388 18.3405 50.0409 18.3405ZM63.311 18.3405C61.6131 18.3405 60.228 16.9638 60.228 15.2763C60.228 13.5888 61.6131 12.2122 63.311 12.2122C65.0088 12.2122 66.3939 13.5888 66.3939 15.2763C66.3939 16.9638 65.0088 18.3405 63.311 18.3405ZM76.5661 18.3405C74.8683 18.3405 73.4832 16.9638 73.4832 15.2763C73.4832 13.5888 74.8683 12.2122 76.5661 12.2122C78.264 12.2122 79.6491 13.5888 79.6491 15.2763C79.6491 16.9638 78.2789 18.3405 76.5661 18.3405Z"
                fill="#FFA940"
              />
            </svg>
          </span>
          <span className="bg-bgColor text-3xl text-bgOrange font-[600]">
            OrangeBot
          </span>
        </div>
      </div>
      <div className="mx-auto max-h-[384px] w-[408px] loginForm flex flex-col bg-white rounded-lg shadow-2xl ">
        <h3 className="mt-6 text-center text-2xl font-[700]">ログイン</h3>
        <form action="" className="p-6" onSubmit={handleSubmit}>
          <InputField
            type="text"
            label="ユーザー名"
            name="email"
            className="mb-6"
            styleSpan="ml-2"
            placeholder="ユーザー名を入力してください。"
            classNameInput="focus:outline-none focus:ring-1 focus:ring-bgOrange px-6 py-2 rounded-lg"
            icon={iconcolor}
          />
          <InputPassword
            type="password"
            label=" パスワード"
            placeholder="パースワードを入力してください。"
            styleSpan="ml-2"
            className="mb-6"
            showEyes={false}
            classNameInput="focus:outline-none focus:ring-1 px-6 py-2 focus:ring-bgOrange rounded-lg "
            name="password"
            icon={lock}
          />
          <div className="flex justify-between mb-6">
            <InputCheckbox
              className="transition-all mr-1 text-sm flex items-center"
              name="rememberpassword"
              text="パースワードを保存"
            ></InputCheckbox>
            <span className="text-colorInput cursor-pointer">
              <a className="text-sm">パスワードをお忘れですか？</a>
            </span>
          </div>
          <Button
            className="py-2 font-[600] text-sm text-white  w-full bg-bgOrange rounded-lg"
            handleSubmit={handleSubmit}
          >
            サインイン
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
