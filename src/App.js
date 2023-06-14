import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text:"Ir a la compra", completed : false},
  {text:"Trapear", completed : true},
  {text:"Hacer de comer", completed : false},
  {text:"Cortar cebolla", completed : true},
]

function App() {
  return (
    <React.Fragment>
    
      <TodoCounter 
        total={10} 
        completed={3}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            completed={todo.completed} 
            key={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
