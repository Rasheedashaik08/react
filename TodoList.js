jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={(link unavailable)} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;

