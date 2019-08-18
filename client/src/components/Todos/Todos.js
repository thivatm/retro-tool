import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import "./Todos.sass";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todos({ index, lists, addList, addTodos, deleteTodos }) {
  // const [color, setColor] = useState("");
  const [newListDesc, setNewListDesc] = useState("");

  // const getRandomColor = () => {
  //   let code = "0123456789ABCDEF";
  //   let color = "#";
  //   for (var i = 0; i < 6; i++) {
  //     color += code[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  const createList = () => {
    if (!newListDesc) return;
    addList(newListDesc);
    setNewListDesc("");
  };

  // useEffect(() => {
  //   // setColor(getRandomColor());
  // }, []);

  return (
    <DragDropContext>
      <div className="todos">
        {lists.map((list, index) => (
          <Droppable droppableId={list.id}>
            {(provided, snapshot) => (
              <div className="todosList" ref={provided.innerRef}>
                {list.array.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="todoItem"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem
                          item={item}
                          listId={list.id}
                          index={index}
                          deleteTodo={deleteTodos}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <AddTodo listId={list.id} addTodos={addTodos} />
              </div>
            )}
          </Droppable>
        ))}
        <div className="addList">
          <form
            className="addListForm"
            onSubmit={e => e.preventDefault() && false}
          >
            <input
              className="newDescription"
              id="newDescription"
              type="textarea"
              value={newListDesc}
              onChange={e => setNewListDesc(e.target.value)}
            />
            <button
              className="addListButton"
              type="submit"
              onClick={createList}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Todos;
