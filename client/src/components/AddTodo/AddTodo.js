import React, { useState } from "react";
import "./AddTodo.sass";

function AddTodo({ addTodos }) {
  const [description, setDescription] = useState("");

  return (
    <form className="addForm" onSubmit={e => e.preventDefault() && false}>
      <input
        className="todoDescription"
        id="todoDesc"
        type="textarea"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="addButton" type="submit" onClick={addCard}>
        +
      </button>
    </form>
  );

  function addCard() {
    if (!description) return;
    addTodos(description);
    setDescription("");
  }
}

export default AddTodo;
