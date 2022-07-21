import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Join } from "./pages";
//import Oauth2Redirect from "./pages/oauth2Redirect";
import OauthKakao from "./pages/oauthKakao";
import OauthGoogle from "./pages/oauthGoogle";
import OauthNaver from "./pages/oauthNaver";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/kakao" element={<OauthKakao />} />
        <Route path="/auth/naver" element={<OauthNaver />} />
        <Route path="/auth/google" element={<OauthGoogle />} />
      </Routes>
    </>
  );
};

export default App;
