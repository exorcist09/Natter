import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Profile from "./pages/Profile";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

function App() {

  return (
    <>
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/video" element={<Video/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>  

    
   
    </>
  )
}

export default App
