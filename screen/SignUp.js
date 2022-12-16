import react, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./login.css";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="container">
      <div id="textBox">
        <label>email</label>
        <input
          type="text"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div id="textBox">
        <label>password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button id="loginButton" onClick={() => props.loginUser(email, password)}>
        OK
      </button>
    </div>
  );
};
