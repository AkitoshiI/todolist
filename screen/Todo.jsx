import React from "react";
import "./todo.css";

export const Todo = (props) => {
  /*マウスストーカテスト*/
  /*
  const mauseStalker = {
    down(event) {
      window.addEventListener("mousemove", mauseStalker.move);
      window.addEventListener("mauseup", mauseStalker.up);
      console.log(event);
      event.target.classList.add("active");
    },
    move(event) {
      event.target.style.left = `${event.clientX}px`;
      event.target.style.top = `${event.clientY}px`;
    },
    up(event) {
      window.removeEventListener("mousemove", mauseStalker.move);
      window.removeEventListener("mouseup", mauseStalker.up);
      event.target.classList.remove("active");
    },
    {(() => {
      document.querySelectorAll(".todoContainer").forEach((el) => {
        el.addEventListener("mousedown", mauseStalker.down);
      });
    })()}
  };
*/
  /*マウスストーカテスト*/

  //todoリストの描写
  const todoList = props.todo.map((index) => {
    return (
      <div className="todoContainer" key={index.key}>
        <p className="message">{index.message}</p>
        <button
          className="delButton"
          onClick={(event) => props.deleteTodo(index.key)}
        ></button>
      </div>
    );
  });

  return <div id="list">{todoList}</div>;
};
