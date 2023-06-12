import "./App.less";
import React from "react";

import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import { connect } from "react-redux";
import Layout from "./component/Layout";
import SystemPage from "./pages/SystemPage";
import CompanyManage from "./pages/CompanyManagePage";
import PlantInfo from "./pages/PlantInfo/plantInfo";
import FaultPage from "./pages/FaultPage";

// import { connect } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="moniringSystem" element={<SystemPage />} />
          <Route path="CompanyManage" element={<CompanyManage />} />
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
