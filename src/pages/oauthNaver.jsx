import React from "react";
import axios from "axios";
import { useEffect } from "react";
const OauthNaver = (props) => {
  let code = new URL(window.location.href).searchParams.get("code");
  //let state = new URL(window.location.href).searchParams.get("state");
  //const auth = localStorage.getItem("user");
  useEffect(() => {
    console.log(code);
    axios
      .get(`http://localhost:8080/auth/naver?code=${code}&state=1234`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  }, []);
  return <h1>Waiting for NAVER Authorization...</h1>;
};

export default OauthNaver;
