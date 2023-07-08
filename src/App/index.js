import React from 'react';
import { AppUi } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text:"Ir a la compra", completed: false},
//   {text:"Trapear", completed: true},
//   {text:"Hacer de comer", completed: false},
//   {text:"Cortar cebolla", completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.Item('TODOS_V1');

function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS', []);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

console.log('log 1');

// React.useEffect(() => {
//   console.log('log 2');
// });
// React.useEffect(() => {
//   console.log('log 2');
// },[]);
React.useEffect(() => {
  console.log('log 2');
},[totalTodos]);

console.log('log 3');

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
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    }
    else {
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
    <AppUi
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
