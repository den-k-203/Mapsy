import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";

const useRoutesHook = (role: string | null | undefined) => {
  switch (role) {
    case "ADMIN":
      return(
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      );
    case "USER":
      return(
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>
      );
  }
};

export default useRoutesHook;