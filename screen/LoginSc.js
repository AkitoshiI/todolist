import react, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import classes from "./login.module.css";

export const LoginSc = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id={classes.container}>
      <div id={classes.textBox}>
        <label>email</label>
        <input
          type="text"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div id={classes.textBox}>
        <label>password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button
        id={classes.loginButton}
        onClick={() => loginUser(email, password)}
      >
        OK
      </button>
    </div>
  );
};
