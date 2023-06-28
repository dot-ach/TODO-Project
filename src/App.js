import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   {text:"Ir a la compra", completed: false},
//   {text:"Trapear", completed: true},
//   {text:"Hacer de comer", completed: false},
//   {text:"Cortar cebolla", completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.Item('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  // Is localStorageTodos empty? if it is: save in the variable an empty array and set an empty array as an Item in Local Storage, but if not: save in the variable the localStorageTodos parsed.
  let parsedTodos = !localStorageTodos ? [] &&  localStorage.setItem('TODOS_V1', JSON.stringify([])) : JSON.parse(localStorageTodos);
  
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  // function to save the changes in both our state and the local storage
  const saveTodos = (todos) => {
    setTodos(todos);
    localStorage.setItem('TODOS_V1', JSON.stringify(todos));
  }

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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
