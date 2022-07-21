import axios from "axios";
import React from "react";
import { useEffect } from "react";

const OauthKakao = (props) => {
  let code = new URL(window.location.href).searchParams.get("code");
  //const auth = localStorage.getItem("user");
  useEffect(() => {
    console.log(code);
    axios
      .get(`http://localhost:8080/auth/kakao?code=${code}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  }, []);
  return <h1>Waiting for KAKAO Authorization...</h1>;
};

export default OauthKakao;
