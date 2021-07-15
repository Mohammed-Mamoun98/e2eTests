import { useState } from "react";

export const TodoInput = ({ onSubmit = () => {} }) => {
  const [value, setValue] = useState('');

  const clearInput = () => setValue("");
  const onChange = ({ target: { value } }) => setValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    onSubmit(value);
    clearInput();
  };
  return (
    <form className="w-100" id='todo-form' onSubmit={handleSubmit}>
      <input
        id="todo-input"
        value={value}
        type="text"
        placeholder="Enter a new task"
        onSubmit={handleSubmit}
        onChange={onChange}
        className="w-100"
      />
    </form>
  );
};
