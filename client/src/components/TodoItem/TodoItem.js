import React from "react";
import "./TodoItem.sass";

function TodoItem({ item, listId, deleteTodo, index }) {
  return (
    <div className="todo-item">
      <p>{item.description}</p>
      <div className="btns">
        <i
          className="material-icons delete"
          onClick={() => deleteTodo(listId, item.id)}
        >
          delete_outline
        </i>
      </div>
    </div>
  );
}

export default TodoItem;
