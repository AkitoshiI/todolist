import React, { useState } from "react";
import "./tabmenu.css";
import { SignUp } from "../screen/SignUp";
import { LoginSc } from "../screen/LoginSc";
export const TabMenu = (props) => {
  const tabarr = props.tablist;
  const [active, setActive] = useState(tabarr[0]);
  const tab = () => {
    return (
      <div id="tabConponent">
        {tabarr.map((index) => (
          <div
            id="tab"
            className={active === index ? "active" : ""}
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
        {active === tabarr[0] ? (
          <div>{props.login}</div>
        ) : (
          <div>{props.signup}</div>
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
