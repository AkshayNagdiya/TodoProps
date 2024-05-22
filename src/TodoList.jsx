import React from 'react';
import TodoItem from './Todoitem';
import './Todolist.css';

function TodoList({ todos, removeTodo, updateTodo, toggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
