import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Risks from "../pages/Risks";
import Employees from "../pages/Employees";
import Departed from "../pages/Departed";
import  Add from "../pages/Add";
import SurveyAdd30 from "../components/SurveyAdd30";
import SurveyAdd60 from "../components/SurveyAdd60";
import SurveyAdd90 from "../components/SurveyAdd90";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index path="" element={<Login />}/>
                <Route path="risks" element={<Risks />}/>
                <Route path="employees" element={<Employees />}/>
                <Route path="departed" element={<Departed />}/>
                <Route path="add" element={<Add/>}/>
                <Route path="add/30" element={<SurveyAdd30/>}/>
                <Route path="add/60" element={<SurveyAdd60/>}/>
                <Route path="add/90" element={<SurveyAdd90/>}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;