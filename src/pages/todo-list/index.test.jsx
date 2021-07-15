import { mount } from "enzyme";
import React from "react";
import { TodoList } from ".";
import "../../utils/testing/setup";
import { createTodo } from "./methods";

describe("<Todo />", () => {
  let todoList, todoForm, todoInput;
  beforeEach(() => {
    todoList = mount(<TodoList />);
    todoForm = todoList.find("#todo-form");
  });

  test("create todo should have an id", () => {
    let randomString = "new string";
    const newTodo = createTodo(randomString);
    expect(!!newTodo.id.length).toBe(true);
  });

  test("input should be mounted on todo form", () => {
    todoInput = todoList.find("input").at(0);
    // todoList.find("input").get(0).props.value = 'test'
    todoInput.simulate("change", { target: { value: "Changed" } });
    console.log({ a: todoInput, b: todoInput.html() });

    expect(todoForm.find("#todo-input").length).toBe(1);
  });
});
