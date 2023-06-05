import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SystemPage from '../../pages/systemPage';

const CustomRouters = () => {
    return (
        <Routes>
            <Route path="moniringSystem" element={<SystemPage />} />

        </Routes>
    )
}
export default CustomRouters;
