import React, { useState } from "react";
import Button from "../button/Button";
import InputCheckbox from "../form-control/InputCheckbox";
import InputField from "../form-control/InputField";
import InputPassword from "../form-control/InputPassword";
import { iconcolor, lock, logologionform } from "../../svg/index";
import { useNavigate } from "react-router";
import axios from "axios";
import { setLocale } from "yup";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const login = () => {
    console.log(userName);
    axios
      .post("https://orangebot-backend.herokuapp.com/user/login", {
        username: userName,
        password: userPassword,
      })
      .then((res) => {
        console.log("data", res);
        localStorage.setItem("auth", true);
        navigator("/");
      })
      .catch((err) => {
        console.log("loi", err);
      });
  };
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="mt-7">
      <div className="text-center mt-5 mb-10">
        <div className="flex justify-center items-end ">
          <span>
            <img src={logologionform} alt="" />
          </span>
          <span className="bg-bgColor text-3xl text-bgOrange font-[600]">OrangeBot</span>
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
            placeholder="ユーザー名を --> nguyentinh"
            classNameInput="focus:outline-none focus:ring-1 focus:ring-bgOrange px-6 py-2 rounded-lg"
            icon={iconcolor}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputPassword
            type="password"
            label="パスワード"
            placeholder="パスワード --> nguyentinh"
            styleSpan="ml-2"
            className="mb-6"
            showEyes={false}
            classNameInput="focus:outline-none focus:ring-1 px-6 py-2 focus:ring-bgOrange rounded-lg "
            name="password"
            icon={lock}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className="flex justify-between items-center mb-6">
            <InputCheckbox
              className="transition-all mr-1 text-sm flex items-center"
              name="rememberpassword"
              text="パースワードを保存"></InputCheckbox>
            <span className="text-colorInput cursor-pointer">
              <a className="text-sm">パスワードをお忘れですか？</a>
            </span>
          </div>
          <Button
            className="py-2 font-[600] text-sm text-white  w-full bg-bgOrange rounded-lg"
            handleSubmit={handleSubmit}>
            サインイン
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
