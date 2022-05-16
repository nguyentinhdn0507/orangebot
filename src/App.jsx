import LoginForm from "./components/loginform/LoginForm";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Appended from "./components/pages/Appended";
import Attachment from "./components/pages/Attachment";
import SettingUIBot from "./components/pages/SettingUIBot";
import TotalChart from "./components/pages/TotalChart";
import Marketing from "./components/pages/Marketing";
import ScenarioSettings from "./components/pages/ScenarioSettings";
import { useState } from "react";
import { userImg } from "./assets/index";
import Main from "./components/layout/Main";
import PageNotFound from "./components/pages/PageNotFound";
import Scenario from "./components/pages/Scenario";
import Graph from "./components/pages/Graph";
import DialogueHistory from "./components/pages/DialogueHistory";
import ScenarioChart from "./components/pages/ScenarioChart";
import NumberOfAccesses from "./components/pages/NumberOfAccesses";
import NumberOfStarts from "./components/pages/NumberOfStarts";

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
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route
          path="/"
          element={
            <Main textHeader={textHeader} onChangeHeader={onChangeHeader} />
          }
        >
          <Route path="profile" element={<Profile />}></Route>
          <Route path="appended" element={<Appended />}></Route>
          <Route path="settingUIBot" element={<SettingUIBot />}></Route>
          <Route path="marketing" element={<Marketing />}></Route>
          <Route path="scenariosettings" element={<ScenarioSettings />}></Route>
          <Route path="chart" element={<TotalChart />}>
            <Route path="scenario" element={<Scenario />} />
            <Route path="dialogue_history" element={<DialogueHistory />} />
            <Route path="graph" element={<Graph />}>
              <Route path="attachment" element={<Attachment />} />
              <Route path="scenarioChart" element={<ScenarioChart />} />
              <Route path="numberofaccesses" element={<NumberOfAccesses />} />
              <Route path="numberOfStarts" element={<NumberOfStarts />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
