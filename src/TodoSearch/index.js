import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const {
    searchValue,
    setSearchValue} = React.useContext(TodoContext);
  // const [state, setState] = React.useState('');
  // setState('Nuevo valor');
  return (
    <input
      className="TodoSearch"  
      placeholder="Cortar Cebolla"
      value={searchValue}
      onChange={(event) => {
        // console.log(event);
        // console.log(event.target.value);
        setSearchValue(event.target.value);
      }}
    />
  );
};

export { TodoSearch };