import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index path="" element={<Login />}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;