import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

function Todo() {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className='todo-list'>
      <ul>
        {todos.map(todo => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'> You don´t have any todos to complete !</div>
  );
}

export default Todo;
