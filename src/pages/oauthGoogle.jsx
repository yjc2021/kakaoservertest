import React from "react";
import axios from "axios";
import { useEffect } from "react";
const OauthGoogle = (props) => {
  let code = new URL(window.location.href).searchParams.get("code");
  //const auth = localStorage.getItem("user");
  useEffect(() => {
    console.log(code);
    axios
      .get(`http://localhost:8080/auth/google?code=${code}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  }, []);
  return <h1>Waiting for GOOGLE Authorization...</h1>;
};

export default OauthGoogle;
