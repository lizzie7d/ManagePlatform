import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SystemPage from '../../pages/SystemPage';
import Overview from '../../pages/OverviewPage';

const CustomRouters = () => {
    return (
        <Routes>
            <Route path="moniringSystem" element={<SystemPage />} />
            <Route path="overview" element={<Overview />} />

        </Routes>
    )
}
export default CustomRouters;
