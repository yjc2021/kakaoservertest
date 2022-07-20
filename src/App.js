import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Join } from "./pages";
//import Oauth2Redirect from "./pages/oauth2Redirect";
import Oauth2Redirect from "./pages/oauth2Redirect";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Oauth2Redirect />} />
      </Routes>
    </>
  );
};

export default App;
