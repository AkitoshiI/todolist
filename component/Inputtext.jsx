import React, { useState, useEffect } from "react";
import { Todo } from "../screen/Todo";
import classes from "./inputText.module.css";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDefaultNormalizer } from "@testing-library/react";
//データベース呼び出し
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const Inputtext = () => {
  const [login, setLogin] = useState(false); //ログイン要素
  const [text, setText] = useState(""); //テキストボックスの中身の管理
  const [todo, setTodo] = useState([]); //Todoリストの管理

  //テキストボックスの中身をコピー
  const changeText = (event) => {
    setText(event.target.value);
  };
  //データベースからの情報取得
  const getData = async () => {
    let todoData = [];
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      todoData = [
        ...todoData,
        {
          key: doc.id,
          time: doc.data().dateTime,
          message: doc.data().message,
        },
      ];
    });
    setTodo(todoData);
    console.log(todo);
  };
  //初期化
  useEffect(() => {
    getData();
    console.log(todo);
  }, []);

  //Todoリストの追加
  const pushTodo = async () => {
    const time = new Date();

    const setTime = time.valueOf();
    if (text === "") {
    } else {
      await setDoc(doc(collection(db, "todolist")), {
        dateTime: setTime,
        message: text,
      });

      getData();
      /*
      const todoLog = todo;
      
      setTodo([
        ...todo,
        {
          key: todoLog.length, //id
          message: text,
        },
      ]);
      */
      document.getElementById(classes.textBox).value = ""; //テキストボックスのリセット
      console.log(todo);

      setText(""); //テキストのリセット
    }
  };
  //Todoリストの削除
  const deleteTodo = (key) => {
    console.log(key);
    deleteDoc(doc(db, "todolist", key));
    getData();
    /*
    const todoLog = todo.filter((event) => event.key !== index); //削除する項目以外を抽出
    console.log(todoLog);
    //console.log(todo.filter((event) => event.key !== index));
    //keyの更新
    for (let j = 0; j < todoLog.length; j++) {
      //index以外の表記の仕方を考える必要あり
      todoLog[j].key = j;
    }
    setTodo(todoLog); //Todoリストの更新
    */
  };

  return (
    <div id={classes.container}>
      <div id={classes.textContainer}>
        <input
          id={classes.textBox}
          type="text"
          placeholder="テキストを入力・・・"
          onChange={(event) => changeText(event)}
        />
        <button id={classes.addButton} onClick={pushTodo}></button>
      </div>

      <Todo todo={todo} deleteTodo={(index) => deleteTodo(index)} />
    </div>
  );
};
