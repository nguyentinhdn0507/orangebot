import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  user,
  clip,
  paint,
  ads,
  file,
  chart,
  logoOrange,
  arrowdown,
  arrowup,
  closemenu,
  openmenu,
  logout,
} from "../../svg";
import * as assets from "../../assets";
// console.log(user);
const SideBar = ({ onChangeHeader, onToggleSlideBar }) => {
  const [activeLink, setActiveLink] = useState("プロファイル");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const routes = [
    {
      path: "profile",
      titleLink: "プロファイル",
      icon: user,
      iconHeader: assets.userImg,
    },
    {
      path: "appended",
      titleLink: "添付",
      icon: clip,
      iconHeader: assets.clipImg,
      buttonHeader: true,
    },
    {
      path: "settingUIBot",
      titleLink: "チャットボットUIの設定",
      icon: paint,
      iconHeader: assets.paintImg,
    },
    {
      path: "marketing",
      titleLink: "投稿の設定",
      icon: ads,
      iconHeader: assets.marketingImg,
    },
    {
      path: "scenariosettings",
      titleLink: "シナリオの設定",
      icon: file,
      iconHeader: assets.pageImg,
    },
    {
      path: "chart",
      titleLink: "集計",
      icon: chart,

      iconHeader: assets.diagramImg,
      subMenu: [
        {
          path: "/chart/scenario",
          titleLink: "シナリオ",
          icon: file,
        },
        {
          path: "/chart/dialogue_history",
          titleLink: "対話履歴",
          icon: clip,
        },
        {
          path: "/chart/graph",
          titleLink: "グラフ",
          icon: chart,
        },
      ],
    },
  ];
  return (
    <div className="flex fixed h-full">
      <div
        className={` ${
          !openSideBar ? "w-[208px] " : "w-10"
        } duration-200 flex w-full flex-col gap-y-6  duration-500  bg-white drop-shadow-xl`}
      >
        <div className="flex p-2 items-end  py-3 relative">
          <img src={logoOrange} alt="" />
          <span
            className={`text-bgOrange text-lg font-[600]  whitespace-nowrap ${
              openSideBar && "scale-0"
            }`}
          >
            Orange Bot
          </span>

          <img
            src={!openSideBar ? closemenu : openmenu}
            alt=""
            className="absolute translate-y-1/4 left-[100%] cursor-pointer"
            onClick={() => {
              setOpenSideBar(!openSideBar);
              onToggleSlideBar((x) => !x);
              setShowSubMenu(false);
            }}
          />
        </div>
        <nav className="flex flex-col">
          {routes.map((item) => (
            <div>
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
                  className={`flex items-center gap-x-3 text-sm p-3  relative overflow-hidden ${
                    activeLink === item.titleLink ? "bg-colorItem" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(item.titleLink);
                    setShowSubMenu(false);
                  }}
                >
                  {activeLink === item.titleLink && (
                    <div className="absolute h-full w-[6px] bg-bgOrange left-0 z-10"></div>
                  )}
                  <img src={item.icon} alt="SVG as an image"></img>
                  <span
                    className={`${openSideBar && "hidden"} whitespace-nowrap`}
                  >
                    {item.titleLink}
                  </span>
                  {item.subMenu && !openSideBar && (
                    <img
                      src={showSubMenu ? arrowdown : arrowup}
                      alt="logo-header"
                      className="ml-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSubMenu(!showSubMenu);
                      }}
                    />
                  )}
                </div>
              </NavLink>
              {item.subMenu && showSubMenu && (
                <nav className="">
                  {console.log("item.subMenu", item.subMenu)}
                  {item.subMenu.map((subItem) => (
                    <NavLink to={subItem.path} key={subItem.titleLink}>
                      <div className="flex items-center gap-x-3 text-sm p-3 relative">
                        <div className="absolute h-full w-[6px] bg-bgOrange left-0 z-10"></div>
                        <img src={subItem.icon} alt="" className="ml-5" />
                        <span>{subItem.titleLink}</span>
                      </div>
                    </NavLink>
                  ))}
                </nav>
              )}
            </div>
          ))}
        </nav>
        <div
          className={` flex  items-center mt-auto  border-t overflow-hidden ${
            !openSideBar ? "justify-between p-4" : "flex-col py-4"
          }`}
        >
          <div className="flex gap-x-3 ">
            <div className="w-[24px] h-[24px] object-cover ">
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="w-full h-full rounded-full"
              />
            </div>
            <span
              className={`${
                openSideBar && "hidden"
              } origin-left whitespace-nowrap`}
            >
              本田 圭佑
            </span>
          </div>
          <div className="flex-shrink-0 ">
            <img src={logout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
