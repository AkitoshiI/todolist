import React, { useState } from "react";
import styles from "./tabmenu.module.css";
import { SignUp } from "../screen/SignUp";
import { LoginSc } from "../screen/LoginSc";
import { hover } from "@testing-library/user-event/dist/hover";
export const TabMenu = ({ tablist, loginUser, createUser }) => {
  //const { tablist } = props;
  const tabArray = tablist;
  const [active, setActive] = useState(tabArray[0]);
  const tab = () => {
    return (
      <div id={styles.tabContainer}>
        {tabArray.map((index) => (
          <div
            id={styles.tab}
            className={active === index ? styles.active : ""}
            onClick={() => setActive(index)}
          >
            {index}
          </div>
        ))}
      </div>
    );
  };
  const message = () => {
    return (
      <div>
        {active === tabArray[0] ? (
          <div>
            <LoginSc
              loginUser={(email, password) => loginUser(email, password)}
            />
          </div>
        ) : (
          <div>
            <SignUp
              createUser={(email, password) => createUser(email, password)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {tab()}
      {message()}
    </div>
  );
};
/*
const styles = {
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    firstOfType: {
      width: "100%",
      height: "100%",
      padding: "10px 0",
      borderRadius: "20px 0 0 0",
      borderBottom: "solid 0.5px",
    },
    lastOfType: {
      width: "100%",
      height: "100%",
      padding: "10px 0",
      borderRadius: "0 20px 0 0",
      borderBottom: "solid 0.5px",
      borderLeft: "solid 0.5px",
    },
  },
  tab: {
    width: "100%",
    height: "100%",
    padding: "10px 0",
    borderBottom: "solid 0.5px",
    hover: {
      width: "100%",
      height: "100%",
      padding: "10px 0",
      borderBottom: "solid 0.5px",
      backgrounColor: "rgb(170, 170, 170)",
    },
    active: {
      width: "100%",
      height: "100%",
      padding: "10px 0",
      borderBottom: "none",
    },
  },
};
*/
