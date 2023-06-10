import "./App.less";
import React, { useEffect } from "react";

import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./component/Layout";
import SystemPage from "./pages/SystemPage";
import Overview from "./pages/OverviewPage";
import PlantInfo from "./pages/PlantInfo/plantInfo";
import FaultPage from "./pages/FaultPage";
import Yunwei from "./pages/yunwei";
import EnterPage from "./pages/EnterPage";

const App = () => {
  useEffect(() => {
    console.log(localStorage.getItem('login'));
  })
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Layout />
        {/* <Login /> */}
        <Routes>

          <Route exact path="/" element={<EnterPage />} />
          <Route exact path="login" element={<Login />} />
          <Route path="moniringSystem" element={<SystemPage />} />
          <Route path="overview" element={<Overview />} />
          <Route path="plantInfo" element={<PlantInfo />} />
          <Route path="faultPage" element={<FaultPage />} />
          <Route path="yunwei" element={<Yunwei />} />


          {/* <Route path="/console/home/*" element={<Home/>} />*/}
        </Routes>
        {/* {userInfo?<CustomLayout />:<Login />}*/}
      </ConfigProvider>
    </BrowserRouter>
    // <Login />
  );
};

App.propTypes = {
  // logged: PropTypes.bool.isRequired,
};

export default App;
