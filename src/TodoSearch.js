import "./TodoSearch.css"

function TodoSearch() {
  return (
    <input
      className="TodoSearch"  
      placeholder="Cortar Cebolla"
      onChange={(event) => {
        console.log(event);
        console.log(event.target.value);
      }}
    />
  );
};

export { TodoSearch };