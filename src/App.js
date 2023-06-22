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

  console.log(defaultTodos);
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(`Buscando: ${searchValue}`);

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  // setTodos()

  console.log({totalTodos, completedTodos});
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
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
