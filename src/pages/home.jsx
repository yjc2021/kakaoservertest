import axios from "axios";
import React from "react";
import styled from "styled-components";
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
      <ButtonsContainer>
        <ButtonWrapper
          href="https://kauth.kakao.com/oauth/authorize?client_id=437bc2fb95b24ca5a80d5763e4619f54&redirect_uri=http://localhost:3000/auth/kakao&response_type=code"
          //href="https://kauth.kakao.com/oauth/authorize?client_id=437bc2fb95b24ca5a80d5763e4196f54&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code"
          //onClick={onKakaoConnect}
        >
          <ImgWrapper src="kakao_btn.png" />
        </ButtonWrapper>
        <ButtonWrapper href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=uD5deNWJiPwEgGJY2FO7&redirect_uri=http://localhost:3000/auth/naver&state=1234">
          <ImgWrapper src="naver_btn.png" />
        </ButtonWrapper>
        <ButtonWrapper href="https://accounts.google.com/o/oauth2/v2/auth?client_id=63234602229-u49a73vg77uch12osuh9egbp6vmshsps.apps.googleusercontent.com&redirect_uri=http://localhost:3000/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile">
          <ImgWrapper src="google_btn.png" />
        </ButtonWrapper>
      </ButtonsContainer>
    </div>
  );
};

export default Home;

const ButtonWrapper = styled.a`
  margin: 5px;
`;
const ImgWrapper = styled.img`
  width: 240px;
  height: 60px;
`;
const ButtonsContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
