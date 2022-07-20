import axios from "axios";
import React from "react";
const Home = (props) => {
  /*const onKakaoConnect = () => {
    const auth = localStorage.getItem("user");
    axios.get("http://localhost:8080/auth/kakao/callback", {
      heade
    })
  };*/
  const onKakaoConnect = () => {
    axios
      .get("http://localhost:8080/auth/kakao/callback&response_type=code")
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  };
  const onAllAccess = () => {
    const auth = localStorage.getItem("user");
    console.log(auth);
    axios
      .get("http://localhost:8080/user", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error.response);
      });
  };
  const onAdminAccess = () => {
    const auth = localStorage.getItem("user");
    console.log(auth);
    axios
      .get("http://localhost:8080/admin", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={onAllAccess}>USER&ADMIN</button>
      <button onClick={onAdminAccess}>ADMIN</button>
      <a
        href="https://kauth.kakao.com/oauth/authorize?client_id=437bc2fb95b24ca5a80d5763e4619f54&redirect_uri=http://localhost:3000/loading&response_type=code"
        //href="https://kauth.kakao.com/oauth/authorize?client_id=437bc2fb95b24ca5a80d5763e4196f54&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code"
        //onClick={onKakaoConnect}
      >
        <img src="kakao_login.png" />
      </a>
    </div>
  );
};

export default Home;
