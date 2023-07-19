import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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
  }, [totalTodos]);

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
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        setSearchValue,
        searchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal, 
        setOpenModal,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider }