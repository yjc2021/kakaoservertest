import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let auth;
  const onSubmit = (e) => {
    e.preventDefault();
    const data = axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((response) => {
        auth = response.headers.authorization;
        if (auth) {
          localStorage.setItem("user", auth);
        }
      });
  };
  return (
    <div>
      <form>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="EMAIL"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="PASSWORD"
          required
        />
        <br />
        <br />
        <button type="submit" onClick={onSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
