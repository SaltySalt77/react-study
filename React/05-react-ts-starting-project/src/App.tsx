import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo'
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import TodoContextProvider from './store/todos-context';

function App() {
  
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
