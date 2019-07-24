import React, { useState } from "react";
import "./AddTodo.sass";

function AddTodo({ addTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form onSubmit={e => e.preventDefault() && false}>
      <input
        className="todoTitle"
        id="todoTitle"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="todoDescription"
        id="todoDesc"
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="addButton" type="submit" onClick={addCard}>
        Add
      </button>
    </form>
  );

  function addCard() {
    if (!title || !description) return;
    addTodos(title, description);
    setTitle("");
    setDescription("");
  }
}

export default AddTodo;
