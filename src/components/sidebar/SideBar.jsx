import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SideBar = ({ onChangeHeader }) => {
  const [activeLink, setActiveLink] = useState("プロファイル");
  const routes = [
    {
      path: "/profile",
      titleLink: "プロファイル",
      icon: "../../../svg/user.svg",
      iconHeader: "../../../assets/User_perspective_matte.png",
    },
    {
      path: "/appended",
      titleLink: "添付",
      icon: "../../../svg/stick.svg",
      iconHeader: "../../../assets/Clip_perspective_matte.png",
      buttonHeader: true,
    },
    {
      path: "/settingUIBot",
      titleLink: "チャットボットUIの設定",
      icon: "../../../svg/color.svg",
      iconHeader: "../../../assets/Paints_perspective_matte.png",
    },
    {
      path: "/postsettings",
      titleLink: "投稿の設定",
      icon: "../../../svg/ads.svg",
      iconHeader: "../../../assets/Marketing_perspective_matte.png",
    },
    {
      path: "/scenariosettings",
      titleLink: "シナリオの設定",
      icon: "../../../svg/file.svg",
      iconHeader: "../../../assets/Page_perspective_matte.png",
    },
    {
      path: "/chart",
      titleLink: "集計",
      icon: "../../../svg/chart.svg",
      iconHeader: "../../../assets/Diagram_perspective_matte.png",
    },
  ];
  return (
    <div className="flex w-full flex-col gap-y-6 fixed sidebar drop-shadow-xl h-screen ">
      <div className="flex p-2 items-end mt-2 py-3 relative">
        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8588 19.779C22.7423 21.9948 21.8896 24.179 20.2954 25.9369L14.0988 19.779H22.8588Z"
              fill="#FE8D00"
            />
            <path
              d="M13.3521 20.5263L19.5487 26.6842C17.7798 28.2684 15.5818 29.1158 13.3521 29.2316V20.5263Z"
              fill="#FE8D00"
            />
            <path
              d="M12.2927 20.5263V29.2316C10.063 29.1158 7.86499 28.2631 6.10132 26.6842L12.2927 20.5263Z"
              fill="#FE8D00"
            />
            <path
              d="M11.546 19.779L5.3493 25.9369C3.75511 24.179 2.90241 21.9948 2.78589 19.7842H11.546V19.779Z"
              fill="#FE8D00"
            />
            <path
              d="M5.3493 12.5737L11.546 18.7316H2.78589C2.90241 16.5105 3.75511 14.3316 5.3493 12.5737Z"
              fill="#FE8D00"
            />
            <path
              d="M6.10132 11.8263L12.298 17.9842V9.27896C10.063 9.39475 7.87028 10.2421 6.10132 11.8263Z"
              fill="#FE8D00"
            />
            <path
              d="M20.2954 12.5737C21.8896 14.3316 22.7423 16.5158 22.8588 18.7316H14.104L20.2954 12.5737Z"
              fill="#FE8D00"
            />
            <path
              d="M4.93616 11.3579C9.30561 7.01579 16.3974 7.01579 20.7668 11.3579C25.1363 15.7 25.1363 22.7474 20.7668 27.0895C16.3974 31.4316 9.30561 31.4316 4.93616 27.0895C0.566705 22.7474 0.566705 15.7053 4.93616 11.3579ZM3.76567 10.1947C2.53693 11.4158 1.58889 12.8368 0.942742 14.4211C0.317778 15.9526 0 17.5684 0 19.2263C0 20.8842 0.317778 22.5 0.942742 24.0316C1.58889 25.6158 2.53693 27.0368 3.76567 28.2579C4.99442 29.479 6.42442 30.4211 8.01861 31.0632C9.55983 31.6842 11.1858 32 12.8541 32C14.5225 32 16.1484 31.6842 17.6897 31.0632C19.2838 30.4211 20.7139 29.479 21.9426 28.2579C23.1713 27.0368 24.1194 25.6158 24.7655 24.0316C25.3905 22.5 25.7083 20.8842 25.7083 19.2263C25.7083 17.5684 25.3905 15.9526 24.7655 14.4211C24.1194 12.8368 23.1713 11.4158 21.9426 10.1947C20.7139 8.97369 19.2838 8.03158 17.6897 7.38948C16.1484 6.76843 14.5225 6.45264 12.8541 6.45264C11.1858 6.45264 9.55983 6.76843 8.01861 7.38948C6.41912 8.03158 4.98912 8.97369 3.76567 10.1947Z"
              fill="#FE8D00"
            />
            <path
              d="M31.3696 0H13.4628C13.1133 0 12.8273 0.284211 12.8273 0.631579V10.5105C12.8273 10.9368 13.1768 11.2842 13.6058 11.2842H14.5221V15.3368L18.6002 11.2842H31.3643C31.7139 11.2842 31.9999 11 31.9999 10.6526V0.631579C32.0052 0.284211 31.7192 0 31.3696 0ZM17.7952 6.52105C17.1914 6.52105 16.6989 6.03158 16.6989 5.43158C16.6989 4.83158 17.1914 4.34211 17.7952 4.34211C18.399 4.34211 18.8915 4.83158 18.8915 5.43158C18.8915 6.03158 18.399 6.52105 17.7952 6.52105ZM22.5142 6.52105C21.9104 6.52105 21.4179 6.03158 21.4179 5.43158C21.4179 4.83158 21.9104 4.34211 22.5142 4.34211C23.118 4.34211 23.6105 4.83158 23.6105 5.43158C23.6105 6.03158 23.118 6.52105 22.5142 6.52105ZM27.2279 6.52105C26.6241 6.52105 26.1316 6.03158 26.1316 5.43158C26.1316 4.83158 26.6241 4.34211 27.2279 4.34211C27.8317 4.34211 28.3243 4.83158 28.3243 5.43158C28.3243 6.03158 27.837 6.52105 27.2279 6.52105Z"
              fill="#FFA940"
            />
          </svg>
        </span>
        <span className="text-bgOrange text-lg font-[600]">Orange Bot</span>
        <span></span>
        <span className="absolute translate-y-1/4 left-[100%]">
          <svg
            width="14"
            height="66"
            viewBox="0 0 14 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 9L14 14.8182V51.1818L0 57V9Z" fill="white" />
            <path
              d="M9.25031 29.3285V28.3622C9.25031 28.2785 9.15406 28.2322 9.08906 28.2835L3.45406 32.6847C3.40618 32.722 3.36744 32.7696 3.34079 32.8241C3.31415 32.8786 3.30029 32.9385 3.30029 32.9991C3.30029 33.0598 3.31415 33.1196 3.34079 33.1741C3.36744 33.2286 3.40618 33.2762 3.45406 33.3135L9.08906 37.7147C9.15531 37.766 9.25031 37.7197 9.25031 37.636V36.6697C9.25031 36.6085 9.22156 36.5497 9.17406 36.5122L4.67406 32.9997L9.17406 29.486C9.22156 29.4485 9.25031 29.3897 9.25031 29.3285V29.3285Z"
              fill="#8C8C8C"
            />
          </svg>
        </span>
      </div>
      <nav className="flex flex-col">
        {routes.map((item) => (
          <NavLink
            key={item.titleLink}
            to={item.path}
            onClick={() =>
              onChangeHeader({
                titleHeader: item.titleLink,
                iconHeader: item.iconHeader,
                buttonHeader: item.buttonHeader,
              })
            }
            className="mb-2"
          >
            <div
              className={`flex items-center gap-x-3 text-sm p-3  relative  ${
                activeLink === item.titleLink ? "bg-colorItem" : ""
              }`}
              onClick={() => setActiveLink(item.titleLink)}
            >
              {activeLink === item.titleLink && (
                <div className="absolute h-full w-[6px] bg-bgOrange left-0 z-10"></div>
              )}
              <img src={item.icon} alt="SVG as an image"></img>
              <span>{item.titleLink}</span>
            </div>
          </NavLink>
        ))}
      </nav>
      <div className="flex justify-between items-center mt-auto p-4 border-t">
        <div className="flex gap-x-3 ">
          <div className="w-[24px] h-[24px] object-cover">
            <img src="./../../../assets/unsplash_6njf0P5QOZ4.png" alt="" />
          </div>
          <span>本田 圭佑</span>
        </div>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.65">
              <path
                d="M8.00004 14.6667C4.31804 14.6667 1.33337 11.682 1.33337 8.00001C1.33337 4.31801 4.31804 1.33335 8.00004 1.33335C9.03515 1.33257 10.0562 1.57319 10.982 2.03611C11.9078 2.49902 12.7129 3.17146 13.3334 4.00001H11.5267C10.7569 3.32119 9.80749 2.87892 8.79252 2.72628C7.77754 2.57364 6.74008 2.71711 5.80463 3.13949C4.86918 3.56186 4.07547 4.24519 3.51875 5.10747C2.96203 5.96975 2.66595 6.97436 2.66604 8.00075C2.66612 9.02714 2.96237 10.0317 3.51924 10.8939C4.0761 11.7561 4.86992 12.4393 5.80544 12.8615C6.74097 13.2837 7.77845 13.427 8.7934 13.2742C9.80834 13.1214 10.7576 12.679 11.5274 12H13.334C12.7135 12.8287 11.9083 13.5011 10.9824 13.9641C10.0564 14.427 9.03526 14.6676 8.00004 14.6667ZM12.6667 10.6667V8.66668H7.33337V7.33334H12.6667V5.33334L16 8.00001L12.6667 10.6667Z"
                fill="black"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
