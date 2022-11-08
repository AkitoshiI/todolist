import React from "react";
import "./todo.css";

export const Todo = (props) => {
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

  return <div>{todoList}</div>;
};
