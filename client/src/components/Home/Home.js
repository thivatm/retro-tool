import React, { useState, useEffect } from "react";
import Todos from "../Todos/Todos";

import service from "./../../services";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getTodoList = () => {
    let ref = service.getTodosList();
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

  const addTodos = (title, description) => {
    service.addTodo(title, description);
  };

  const deleteTodos = todoId => {
    service.deleteTodo(todoId);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <Todos todos={todos} addTodos={addTodos} deleteTodos={deleteTodos} />
      </div>
    </div>
  );
}
