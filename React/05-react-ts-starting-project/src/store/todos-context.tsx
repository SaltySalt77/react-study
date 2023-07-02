import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj ={items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void;} ;

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);

  const addTodoHandler = (text:string) => {
    setTodos((prev) => {return prev.concat(new Todo(text));});
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prev) => {return prev.filter((item) => {return item.id !== id})});
  }

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return <TodoContextProvider>{props.children}</TodoContextProvider>
}

export default TodoContextProvider;