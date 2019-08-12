import React, { useState, useEffect } from "react";
import Todos from "../Todos/Todos";

import Service from "./../../services";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getTodoList = () => {
    let ref = Service.getTodosList();
    ref.on("value", snapshot => {
      let todos = snapshot.val();
      let newTodos = [];
      for (let todo in todos) {
        newTodos.push({
          id: todo,
          title: todos[todo].title,
          description: todos[todo].description
        });
      }
      setTodos(newTodos);
    });
  };

  useEffect(() => {
    getTodoList();
  });

  const addTodos = description => {
    Service.addTodo(description);
  };

  const deleteTodos = todoId => {
    Service.deleteTodo(todoId);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <Todos todos={todos} addTodos={addTodos} deleteTodos={deleteTodos} />
      </div>
    </div>
  );
}
