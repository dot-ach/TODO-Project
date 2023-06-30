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

function useLocalStorage(itemName, initialState){
  
  const localStorageItem = localStorage.getItem(itemName);
  // Is localStorageTodos empty? if it is: save in the variable an empty array and set an initial state as an Item in Local Storage, but if not: save in the variable the localStorageTodos parsed.
  let parsedItem = !localStorageItem ? [] &&  localStorage.setItem(itemName, JSON.stringify(initialState)) : JSON.parse(localStorageItem);
  
  const [item, setItem] = React.useState(parsedItem);
  // function to save the changes in both our state and the local storage
  const saveItem = (item) => {
    setItem(item);
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  return [item, saveItem];

}

function App() {

  const [todos, saveTodos] =useLocalStorage('TODOS', []);
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
