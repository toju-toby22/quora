import {  Navigate, Routes, Route } from "react-router-dom";
import React from 'react';
import Quora from "./pages/Quora"
import Auth from "./pages/Auth"
import Answer from "./pages/Answer"
import ProfilePage from "./pages/profile/ProfilePage";
// import Login from "./pages/Login"
// import { useMemo } from "react";
import { useSelector } from "react-redux";



import './App.css'




function App() {
  const user = useSelector((state) => state.authReducer.authData);

 
  return (
    <div>
      
          <Routes>
            {/* <Route element={<Login />} path="/" /> */}
            <Route path="/" element={user ? <Navigate to = '/Quora'/> : <Navigate to = '/Auth'/>} />
            <Route path="/Quora" element={user ? <Quora/> : <Navigate to = '/Auth'/>} />
            <Route path="/Auth"  element={ <Auth />} />
            <Route path="Answer" element={<Answer />} />
            <Route
          path="/ProfilePage/:id"
          element={user ? <ProfilePage /> : <Navigate to="../auth" />}
        />
          </Routes>
    </div>
  );
}
export default App;