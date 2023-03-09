import React, { useState } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import './App.css'
import './Components/Todos.css'
import './Components/AddTodo.css'

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const addTodo = (todo) => {
    todo.id = Math.random();
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  }

  return (
    <div className="container">
      <h1 className="name">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;

