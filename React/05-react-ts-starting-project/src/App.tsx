import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo'
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);

  const addTodoHandler = (text:string) => {
    setTodos((prev) => {return prev.concat(new Todo(text));});
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prev) => {return prev.filter((item) => {return item.id !== id})});
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
