import React from "react";
import "./TodoItem.sass";

function TodoItem({ todo, deleteTodo, index }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <span className="todoTitle">{todo.title}</span>
      {todo.description}
      <div className="btns">
        <i
          className="material-icons delete"
          onClick={() => deleteTodo(todo.id)}
        >
          delete_outline
        </i>
      </div>
    </div>
  );
}

export default TodoItem;
