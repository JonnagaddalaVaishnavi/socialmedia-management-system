import React from "react";
import Register from "./pages/Register/register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // < acts like div >
    <>
      {/* <Register />
      <Login />
      <Profile />
      <Post />
      <Home /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Register />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Post" element={<Post />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
