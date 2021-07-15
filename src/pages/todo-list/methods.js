import { v4 as uuid } from "uuid";

export const createTodo = (text) => {
  return {
    text,
    id: uuid(),
  };
};

export const addTodo = (prevTodos = [], newTodo) => {
  return [...prevTodos, newTodo];
};

export const removeTodo = (prevTodos = [], todoId)=>{
    return prevTodos.filter(todo => todo.id !== todoId)
}
