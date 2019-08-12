import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import "./Todos.sass";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todos({ index, todos, addTodos, deleteTodos }) {
  const [color, setColor] = useState("");

  const getRandomColor = () => {
    let code = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += code[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <DragDropContext>
      <div className="todos">
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div className="todos-list" ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="todoItem"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem
                        provided={provided}
                        snapshot={snapshot}
                        todo={todo}
                        index={index}
                        deleteTodo={deleteTodos}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddTodo addTodos={addTodos} />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Todos;
