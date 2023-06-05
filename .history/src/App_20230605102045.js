import "./App.less";
import React from "react";

import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import { connect } from "react-redux";
import Layout from "./component/Layout";
import SystemPage from "./pages/SystemPage";
import Overview from "./pages/OverviewPage";
import PlantInfo from "./pages/PlantInfo/plantInfo";
import FaultPage from "./pages/FaultPage";

// import { connect } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Layout />
        <Login />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="moniringSystem" element={<SystemPage />} />
          <Route path="overview" element={<Overview />} />
          <Route path="plantInfo" element={<PlantInfo />} />
          <Route path="faultPage" element={<FaultPage />} />
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
