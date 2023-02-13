import React, { useState } from "react";
import { Todo } from "../screen/Todo";
import "./inputText.css";

export const Inputtext = () => {
  const [text, setText] = useState(""); //テキストボックスの中身の管理
  const [todo, setTodo] = useState([]); //Todoリストの管理
  //テキストボックスの中身をコピー
  const changeText = (event) => {
    setText(event.target.value);
  };
  //Todoリストの追加
  const pushTodo = () => {
    if (text === "") {
    } else {
      const todoLog = todo;
      setTodo([
        ...todo,
        {
          key: todoLog.length, //id
          message: text,
        },
      ]);
      document.getElementById("textBox").value = ""; //テキストボックスのリセット
      console.log(todo);
      setText(""); //テキストのリセット
    }
  };
  //Todoリストの削除
  const deleteTodo = (index) => {
    console.log(todo);
    const todoLog = todo.filter((event) => event.key !== index); //削除する項目以外を抽出
    console.log(todoLog);
    //console.log(todo.filter((event) => event.key !== index));
    //keyの更新
    for (let j = 0; j < todoLog.length; j++) {
      //index以外の表記の仕方を考える必要あり
      todoLog[j].key = j;
    }
    setTodo(todoLog); //Todoリストの更新
  };

  return (
    <div id="container">
      <div id="textContainer">
        <input
          id="textBox"
          type="text"
          placeholder="テキストを入力・・・"
          onChange={(event) => changeText(event)}
        />
        <button id="addButton" onClick={pushTodo}></button>
      </div>

      <Todo todo={todo} deleteTodo={(index) => deleteTodo(index)} />
    </div>
  );
};
