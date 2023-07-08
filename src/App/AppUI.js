import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUi({
  totalTodos,
  completedTodos,
  setSearchValue,
  searchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
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
      {loading && <p>Estamos cargando, espre por favor...</p>}
      {error && <p>Demonios, algo salió mal...</p>}
      {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}

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