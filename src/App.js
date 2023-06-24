import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text:"Ir a la compra", completed: false},
  {text:"Trapear", completed: true},
  {text:"Hacer de comer", completed: false},
  {text:"Cortar cebolla", completed: true},
]

function App() {

  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    if(newTodos[todoIndex].completed){
      newTodos[todoIndex].completed = false;
    }
    else{
      newTodos[todoIndex].completed = true;
    }
    // newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
    
      <TodoCounter 
        total={totalTodos} 
        completed={completedTodos}
      />
      <TodoSearch 
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            completed={todo.completed} 
            key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
