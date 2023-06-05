import "./App.less";
import React from "react";

import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import { connect } from "react-redux";
import Layout from "./component/Layout";
import ContentBox from "./component/ContentBox";
import SystemPage from "./pages/SystemPage";

// import { connect } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Layout />
        <ContentBox />
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route path="moniringSystem" element={<SystemPage />} />

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
