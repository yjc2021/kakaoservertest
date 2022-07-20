import React, { useState } from "react";
import axios from "axios";
const Join = () => {
  const [role, setUserRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [userRoleError, setUserRoleError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onChangeUserRole = (e) => {
    setUserRoleError(false);
    setUserRole(e.target.value);
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || e.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserNameError(false);
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };
  const validation = () => {
    if (!role) setUserRoleError(true);
    if (!password) setPasswordError(true);
    if (!confirmPassword) setConfirmPasswordError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    if (role && password && confirmPassword && userName && email) return true;
    else return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signup", {
        name: userName,
        email,
        password,
        role,
      })
      .then((response) => {
        console.log(JSON.stringify(response.body));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="USER ROLE"
              value={role}
              onChange={onChangeUserRole}
              required
            />
            {userRoleError && <div classNmae="invalid-input">Required</div>}
          </div>
          <div>
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={onChangePassword}
              required
            />
            {passwordError && (
              <div className="invalid-input">
                Password must be at least 8 characters and contain at least one
                letter and one number.{" "}
              </div>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="CONFIRMPASSWORD"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              required
            />
            {confirmPasswordError && (
              <div className="invalid-input">Those passwords didn't match</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="NAME"
              value={userName}
              onChange={onChangeUserName}
              required
            />
            {userNameError && <div className="invalid-input">Required</div>}
          </div>
          <div>
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={onChangeEmail}
              required
            />
            {emailError && (
              <div className="invalid-input">
                Please enter valid email format
              </div>
            )}
          </div>
          <br />
          <button onClick={onSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
