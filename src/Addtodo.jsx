import React, { useState } from 'react';
import './Addtodo.css';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
}

export default AddTodo;
