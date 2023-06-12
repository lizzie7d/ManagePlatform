import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SystemPage from '../../pages/SystemPage';
import CompanyManage from '../../pages/CompanyManagePage';

const CustomRouters = () => {
    return (
        <Routes>
            <Route path="moniringSystem" element={<SystemPage />} />
            <Route path="CompanyManage" element={<CompanyManage />} />

        </Routes>
    )
}
export default CustomRouters;
