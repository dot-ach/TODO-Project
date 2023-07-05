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
  deleteTodo
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