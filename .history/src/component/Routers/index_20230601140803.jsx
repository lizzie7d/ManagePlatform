import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SystemPage from '../../pages/SystemPage';

const CustomRouters = () => {
    return (
        <Routes>
            <Route path="moniringSystem" element={<SystemPage />} />

        </Routes>
    )
}
export default CustomRouters;
