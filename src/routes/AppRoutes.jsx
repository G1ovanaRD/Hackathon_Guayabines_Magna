import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Risks from "../pages/Risks";
import Employees from "../pages/Employees";
import Departed from "../pages/Departed";
import  Add from "../pages/Add";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index path="" element={<Login />}/>
                <Route path="risks" element={<Risks />}/>
                <Route path="employees" element={<Employees />}/>
                <Route path="departed" element={<Departed />}/>
                <Route path="add" element={<Add/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;