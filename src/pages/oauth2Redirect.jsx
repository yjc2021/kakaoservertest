import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Oauth2Redirect = (props) => {
  let code = new URL(window.location.href).searchParams.get("code");
  //const auth = localStorage.getItem("user");
  useEffect(() => {
    console.log(code);
    axios
      .get(`http://localhost:8080/test?code=${code}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  }, []);
  return <h1>Waiting for Authorization...</h1>;
};

export default Oauth2Redirect;
