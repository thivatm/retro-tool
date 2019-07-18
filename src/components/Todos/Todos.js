import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import "./Todos.sass";

function Todos({ index, todos, addTodos, deleteTodos }) {
  return (
    <div className="todos">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem todo={todo} index={index} deleteTodo={deleteTodos} />
        ))}
      </div>
      <AddTodo addTodos={addTodos} />
    </div>
  );
}

export default Todos;
