import React, { useState, useEffect } from "react";
import Todos from "../Todos/Todos";

import Service from "./../../services";

export default function Home() {
  const [lists, setLists] = useState([]);

  const getTodoList = () => {
    let ref = Service.getTodosList();
    ref.on("value", snapshot => {
      let listSnap = snapshot.val();
      let newLists = [];
      for (let list in listSnap) {
        let newListItems = [];
        for (let item in listSnap[list]) {
          newListItems.push({
            id: item,
            description: listSnap[list][item].description
          });
        }
        newLists.push({
          id: list,
          array: newListItems
        });
      }
      setLists(newLists);
      console.log(newLists);
    });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const addList = description => {
    Service.addList(description);
  };

  const addTodos = (listId, description) => {
    Service.addTodo(listId, description);
  };

  const deleteTodos = (listId, todoId) => {
    Service.deleteTodo(listId, todoId);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <Todos
          lists={lists}
          addList={addList}
          addTodos={addTodos}
          deleteTodos={deleteTodos}
        />
      </div>
    </div>
  );
}
