import React from "react";
import "./TodoSearch.css"

function TodoSearch() {
  // const [state, setState] = React.useState('');
  // setState('Nuevo valor');
  const [searchValue, setSearchValue] = React.useState('');
  console.log(`Buscando: ${searchValue}`);
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