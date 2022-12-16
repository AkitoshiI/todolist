import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { SignUp } from "../screen/SignUp";
import { LoginSc } from "../screen/LoginSc";
import { TabMenu } from "./TabMenu";
import classes from "./log.module.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
  const tablist = ["新規作成", "サインイン"];

  const navigate = useNavigate();
  const createUser = (email, password) => {
    console.log(`データ確認:${email}=${password}`);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`createUser:username=${user}`);
        navigate("/Todolist");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`missingUser:username=${errorMessage}`);
        document.getElementById("password").value = "";
        document.getElementById("password").classList.add("err");

        // ..
      });
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user2 = userCredential.user;
        console.log(`signInUser:username=${user2}`);
        navigate("/Todolist");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("password").value = "";
        document.getElementById("password").classList.add("err");
      });
  };
  return (
    <div id={classes.login}>
      <TabMenu
        tablist={tablist}
        login={
          <div>
            <LoginSc
              createUser={(email, password) => {
                createUser(email, password);
              }}
            />
          </div>
        }
        signup={
          <SignUp
            loginUser={(email, password) => {
              loginUser(email, password);
            }}
          />
        }
      />
    </div>
  );
};
