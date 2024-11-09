import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Risks from "../pages/Risks";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index path="" element={<Login />}/>
                <Route path="risks" element={<Risks />}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;