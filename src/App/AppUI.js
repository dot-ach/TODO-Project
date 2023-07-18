import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import { TodoContext } from '../TodoContext';

function AppUi() {

  const { searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error } = React.useContext(TodoContext);

  return (
    <>

      <TodoCounter
      // total={totalTodos}
      // completed={completedTodos}
      // loading={loading}
      />
      <TodoSearch
      // setSearchValue={setSearchValue}
      // searchValue={searchValue}
      />


      <TodoList>
        {loading &&
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        }
        {/* {<TodosLoading/>} */}
        {error && <TodosError />}
        {(!loading && !error && searchedTodos.length === 0) && <EmptyTodos />}

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

};

export { AppUi }