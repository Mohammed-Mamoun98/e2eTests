import React, { useState } from "react";
import { List } from "../../components/list";
import { addTodo, createTodo, removeTodo } from "./methods";
import { TodoItem } from "./todo";
import { TodoInput } from "./todo-input";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodos = addTodo(todos, createTodo(text));
    setTodos(newTodos);
  };
  const handleDelete = (id)=>{
    const newTodos = removeTodo(todos,id)
    setTodos(newTodos);
  }

  return (
    <>
      <TodoInput onSubmit={handleAddTodo} />
      <div className="todos-wrapper w-100 mt-3">
        <List data={todos} ListComponent={TodoItem} onDelete={handleDelete} />
      </div>
    </>
  );
};
