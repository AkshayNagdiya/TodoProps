import React, { useState } from 'react';
import './Todoitem.css';

function TodoItem({ todo, index, removeTodo, updateTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleUpdate} className="update-button">Update</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(index)} className="todo-text">
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          <button onClick={() => removeTodo(index)} className="remove-button">Remove</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
