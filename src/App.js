import React from 'react';
import Todo from './components/Todo';
import TodoContextProvider from './contexts/TodoContext';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className='App'>
      <TodoContextProvider>
        <Navbar />
        <Todo />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
