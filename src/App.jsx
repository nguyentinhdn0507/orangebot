import LoginForm from "./components/loginform/LoginForm";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Appended from "./components/pages/Appended";
// import Main from "./components/layout/Main";
import SettingUIBot from "./components/pages/SettingUIBot";
import TotalChart from "./components/pages/TotalChart";
import PostSetting from "./components/pages/PostSetting";
import ScenarioSettings from "./components/pages/Homepage";
import Header from "./components/layout/Header";
import { useState } from "react";
import { userImg } from "./assets/index";

function App(props) {
  // console.log("props", props);
  const [textHeader, setText] = useState({
    titleHeader: "プロファイル",
    iconHeader: userImg,
  });
  const onChangeHeader = (value) => {
    setText(value);
  };
  return (
    <>
      {/* <LoginForm/> */}
      <SideBar onChangeHeader={onChangeHeader} />
      <div className=" gap-x-4 " style={{ marginLeft: 208 }}>
        <Header textHeader={textHeader} />
        <div className="p-10">
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/appended" element={<Appended />}></Route>
            <Route path="/settingUIBot" element={<SettingUIBot />}></Route>
            <Route path="/postsettings" element={<PostSetting />}></Route>
            <Route
              path="/scenariosettings"
              element={<ScenarioSettings />}
            ></Route>
            <Route path="/chart" element={<TotalChart />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
