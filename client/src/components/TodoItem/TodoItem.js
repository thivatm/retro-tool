import React, { useState, useEffect } from "react";
import "./TodoItem.sass";

function TodoItem({ todo, deleteTodo, index }) {
  const getRandomColor = () => {
    let code = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += code[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div
      className="todo-item"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : ""
      }}
    >
      <p>{todo.description}</p>
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
