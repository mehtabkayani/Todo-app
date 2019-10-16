import React, { useContext, useState } from 'react';
import TodoContextProvider, { TodoContext } from '../contexts/TodoContext';

const NewTodoForm = () => {
  const { dispatch } = useContext(TodoContext);

  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: {
        text: text
      }
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='add todo'
        required
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type='submit' value='add todo' />
    </form>
  );
};

export default NewTodoForm;
